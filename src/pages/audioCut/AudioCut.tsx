import FileInput from '../../components/FileInput/FileInput';
import { useState, useRef, MutableRefObject, useEffect, ChangeEvent } from 'react';
import style from './AudioCut.module.css';

export default function AudioCut() {
  const [fileName, setFileName] = useState('');
  const [barType, setBarType] = useState('leftWave');
  const audioRef: MutableRefObject<HTMLAudioElement> = useRef(null);
  const canvasRef: MutableRefObject<HTMLCanvasElement> = useRef(null);
  const lineRef: MutableRefObject<HTMLCanvasElement> = useRef(null);

  useEffect(() => {}, []);

  const fileChange = (file: any) => {
    const audio = audioRef.current;
    audio.src = URL.createObjectURL(file);
    audio.load();
    setFileName(file.name);
    // 1. 创建音频上下文
    const audioCtx = new AudioContext();
    // 2. 创建音频源
    const audioSource = audioCtx.createMediaElementSource(audio);
    // 3. 创建音频分析节点
    const analyser = audioCtx.createAnalyser();
    // 4. 音频源连接音频节点
    audioSource.connect(analyser);
    // 5. 音频节点连接输出设备
    analyser.connect(audioCtx.destination);
    // 6. 设置fftSize(快速傅里叶变换)
    analyser.fftSize = 256;
    // 7. 设置频率计数，此值一般为fftsize的一半
    const bufferLength = analyser.frequencyBinCount;
    console.log(analyser);
    const dataArray = new Uint8Array(bufferLength);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const WIDTH = (canvas.width = canvas.clientWidth * window.devicePixelRatio);
    const HEIGHT = (canvas.height = canvas.clientHeight * window.devicePixelRatio);
    let barW = WIDTH / bufferLength / 2;
    // const barW = 2;
    let barH;
    let x = 0;
    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, '#6500ff');
    gradient.addColorStop(0.5, '#ff00a2');
    gradient.addColorStop(1, '#6500ff');

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = (pe) => {
      const data = pe.target?.result;
      const acx = new AudioContext();
      const lineCanvas = lineRef.current;
      const lineCtx = lineCanvas.getContext('2d');
      lineCanvas.width = lineCanvas.clientWidth * window.devicePixelRatio;
      lineCanvas.height = lineCanvas.clientHeight * window.devicePixelRatio;
      console.log(lineCanvas.width, lineCanvas.height);
      acx.decodeAudioData(data).then((buffer) => {
        const rawData = buffer.getChannelData(0);
        const sampleRate = 200;
        const onePiceOfSize = Math.floor(rawData.length / sampleRate);
        const filterData: number[] = [];
        let xAxis = 0;
        let yAxis = lineCanvas.height / 2;
        let barW = Math.floor(lineCanvas.width / sampleRate) - 1;
        for (let i = 0; i < sampleRate; i++) {
          filterData.push(100 * rawData[i * onePiceOfSize]);
        }
        for (let i = 0; i < filterData.length; i++) {
          const barH = Math.abs(Math.floor(filterData[i]));
          lineCtx.fillRect(xAxis, yAxis - barH / 2, barW, barH);
          lineCtx.fillStyle = i === filterData.length - 2 ? 'red' : '#1988ff';
          xAxis = xAxis + barW + 1;
        }
      });
    };

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      x = 0;
      // 获取每一帧的音频频率数据
      // 实际是通过getByteFrequencyData方法将音频的采集点的数据回填到dataArray里
      // 这样dataArray每一帧的数据都是不同的，就可以针对数据进行可视化操作
      analyser.getByteFrequencyData(dataArray);
      // 清除画布内容
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      for (let i = 0; i < bufferLength; i++) {
        barH = dataArray[i];
        // var r = barH + 50 * (i / bufferLength);
        // var g = 250 * (i / bufferLength);
        // var b = 250 * (i / bufferLength);
        // ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        ctx.fillStyle = gradient;
        switch (barType) {
          case 'leftWave':
            barW = WIDTH / bufferLength;
            ctx.fillRect(x, HEIGHT - barH, barW, barH);
            break;
          case 'middleWave':
            // X轴的前半部分数据
            ctx.fillRect(WIDTH / 2 - x, HEIGHT - barH, barW, barH);
            // X轴的后半部分数据
            ctx.fillRect(WIDTH / 2 + x, HEIGHT - barH, barW, barH);
            break;
          case 'intelligentWave':
            // 镜像操作
            ctx.fillRect(WIDTH / 2 - x, HEIGHT / 2, barW, -barH);
            ctx.fillRect(WIDTH / 2 - x, HEIGHT / 2, barW, barH);
            ctx.fillRect(WIDTH / 2 + x, HEIGHT / 2, barW, -barH);
            ctx.fillRect(WIDTH / 2 + x, HEIGHT / 2, barW, barH);
            break;
        }

        x = x + barW + 1;
      }
    }

    // audio.play();
    renderFrame();
  };

  const handleBarTypeChange = (e: ChangeEvent) => {
    setBarType(e.target.value);
  };

  const drawWave = () => {
    // console.log(a);
  };

  return (
    <div>
      {fileName}
      <audio ref={audioRef} controls>
        <source src="" />
      </audio>
      <FileInput onChange={fileChange}></FileInput>
      <canvas className={style.canvas} ref={canvasRef}></canvas>
      <label>
        Left Wave
        <input type="radio" name="barType" value="leftWave" onChange={handleBarTypeChange} />
      </label>
      <label>
        Middle Wave
        <input type="radio" name="barType" value="middleWave" onChange={handleBarTypeChange} />
      </label>
      <label>
        Intelligent Wave
        <input type="radio" name="barType" value="intelligentWave" onChange={handleBarTypeChange} />
      </label>
      <canvas className={style.canvas} ref={lineRef}></canvas>
    </div>
  );
}
