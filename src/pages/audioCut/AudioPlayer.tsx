import FileInput from '@/components/FileInput/FileInput';
import { useEffect, useState } from 'react';

// 1. 创建文件读取
const reader = new FileReader();
// 2. 创建音频上下文
let actx: AudioContext | null = null;
// 3. 创建增益节点
let gainNode: GainNode | null = null;
// 4. 创建buffer来源
let bufferSource: AudioBufferSourceNode | null = null;
let audioBuffer: AudioBuffer | null = null;
let interval = null;

export default function AudioPlayer() {
  const [audioInfo, setAudioInfo] = useState({
    name: '',
    duration: 0,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [playTime, setPlayTime] = useState(0);

  const fileChange = (file: any) => {
    reader.readAsArrayBuffer(file);
    actx = new AudioContext();
    gainNode = actx.createGain();
    // 读取文件
    reader.onload = (pe) => {
      // 将读取的文件流转化为音频流
      actx.decodeAudioData(pe.target.result).then((buffer) => {
        audioBuffer = buffer;
        setAudioInfo((prev) => ({
          ...prev,
          name: file.name,
          duration: parseInt(buffer.duration),
        }));
      });
    };
  };

  const playHandle = () => {
    bufferSource?.disconnect();
    bufferSource = actx.createBufferSource();
    bufferSource.buffer = audioBuffer;
    bufferSource.connect(gainNode);
    gainNode.connect(actx.destination);
    bufferSource.start(actx?.currentTime, playTime);
    update();
  };

  const update = () => {
    interval = setInterval(() => {
      setPlayTime((prev) => {
        return prev + 1;
      });
    }, 1000);
  };

  const pauseHandle = () => {
    clearInterval(interval);
  };

  return (
    <div>
      <p>文件名：{audioInfo.name}</p>
      <p>时长：{audioInfo.duration} s</p>
      <FileInput onChange={fileChange}></FileInput>
      <button onClick={playHandle} className="mr-6 p-2 px-4 rounded bg-blue-400 text-white">
        play
      </button>
      <button onClick={pauseHandle} className="mr-6 p-2 px-4 rounded bg-blue-400 text-white">
        pause
      </button>
      <span>{playTime} s</span>
      <input type="range" max={audioInfo.duration} value={playTime.toString()} />
      <span>{audioInfo.duration} s</span>
    </div>
  );
}
