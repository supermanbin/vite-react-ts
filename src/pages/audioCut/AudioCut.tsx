import FileInput from '../../components/FileInput/FileInput';
import { useState, useRef, MutableRefObject, useEffect } from 'react';
import style from './AudioCut.module.css';

export default function AudioCut() {
  const [fileName, setFileName] = useState('');
  const audioRef: MutableRefObject<HTMLAudioElement> = useRef(null);
  const canvasRef: MutableRefObject<HTMLCanvasElement> = useRef(null);

  useEffect(() => {}, []);

  const fileChange = (file: any) => {
    // const reader = new FileReader();
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
    const barW = WIDTH / bufferLength / 2;
    // const barW = 2;
    let barH;
    let x = 0;
    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, '#6500ff');
    gradient.addColorStop(0.5, '#ff00a2');
    gradient.addColorStop(1, '#6500ff');
    // #ff00a2, #6500ff
    function renderFrame() {
      requestAnimationFrame(renderFrame);
      x = 0;
      // 获取每一帧的音频频率数据
      // 实际是通过getByteFrequencyData方法将音频的采集点的数据回填到dataArray里
      // 这样dataArray每一帧的数据都是不同的，就可以针对数据进行可视化操作
      analyser.getByteFrequencyData(dataArray);
      // 清除画布内容
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barH = dataArray[i];
        // var r = barH + 50 * (i / bufferLength);
        // var g = 250 * (i / bufferLength);
        // var b = 250 * (i / bufferLength);
        // ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        ctx.fillStyle = gradient;
        // X轴的前半部分数据
        // ctx.fillRect(WIDTH / 2 - x, HEIGHT - barH, barW, barH);
        // X轴的后半部分数据
        // ctx.fillRect(WIDTH / 2 + x, HEIGHT - barH, barW, barH);

        // 镜像操作
        ctx.fillRect(WIDTH / 2 - x, HEIGHT / 2, barW, -barH / 2);
        ctx.fillRect(WIDTH / 2 - x, HEIGHT / 2, barW, barH / 2);
        ctx.fillRect(WIDTH / 2 + x, HEIGHT / 2, barW, -barH / 2);
        ctx.fillRect(WIDTH / 2 + x, HEIGHT / 2, barW, barH / 2);
        x += barW;
      }
    }

    audio.play();
    renderFrame();
  };

  const clearFile = () => {};

  return (
    <div>
      {fileName}
      <audio ref={audioRef} controls>
        <source src="" />
      </audio>
      <FileInput onChange={fileChange}></FileInput>
      <canvas className={style.canvas} ref={canvasRef}></canvas>
    </div>
  );
}
