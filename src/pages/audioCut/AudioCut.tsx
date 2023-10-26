import FileInput from '../../components/FileInput/FileInput';
import { useState, useRef, MutableRefObject, useEffect } from 'react';
import style from './AudioCut.module.css';

export default function AudioCut() {
  const [fileName, setFileName] = useState('');
  const [ctx, setCtx] = useState(null);
  const audioRef: MutableRefObject<HTMLAudioElement> = useRef(null);
  const canvasRef: MutableRefObject<null> = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;

    setCtx(ctx);
  }, []);

  const fileChange = (file: any) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    audioRef.current.src = URL.createObjectURL(file);
    audioRef.current.play();
    const audioCtx = new AudioContext();
    console.log(audioCtx);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 1024;

    const mes = audioCtx.createMediaElementSource(audioRef.current);
    mes.connect(analyser);
    mes.connect(audioCtx.destination);

    setFileName(file.name);

    reader.onload = function (pe: ProgressEvent<FileReader>) {
      // let dataArray = new Uint8Array(analyser.frequencyBinCount);
      // console.log(dataArray);
      //
      // analyser.getByteFrequencyData(dataArray);
      // console.log(analyser);
      // ctx.fillRect(0, 0, 100, 100);
    };
  };

  return (
    <div>
      {fileName}
      <audio ref={audioRef} controls>
        <source src="" />
      </audio>
      <canvas className={style.canvas} ref={canvasRef}></canvas>
      <FileInput onChange={fileChange}></FileInput>
    </div>
  );
}
