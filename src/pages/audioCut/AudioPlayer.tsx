import FileInput from '@/components/FileInput/FileInput';
import { useEffect, useState } from 'react';
import { update } from '@react-spring/web';

// 1. 创建文件读取
const reader = new FileReader();
// 2. 创建音频上下文
let actx: AudioContext | null = null;
// 3. 创建增益节点
let gainNode: GainNode | null = null;
// 4. 创建buffer来源
let bufferSource: AudioBufferSourceNode | null = null;
let audioBuffer: AudioBuffer | null = null;
const animate = null;

export default function AudioPlayer() {
  const [audioInfo, setAudioInfo] = useState({
    name: '',
    duration: 0,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [playTime, setPlayTime] = useState(0);

  useEffect(() => {
    console.log(isPlaying);
  }, [isPlaying]);

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
          duration: buffer.duration,
        }));
      });
    };
  };

  const clickHandle = () => {
    setIsPlaying((prev) => {
      return !prev;
    });
    if (!isPlaying) {
      // bufferSource?.disconnect();
      bufferSource = actx.createBufferSource();
      bufferSource.buffer = audioBuffer;
      bufferSource.connect(gainNode);
      gainNode.connect(actx.destination);
      bufferSource.start(0, playTime);
      // interval = setInterval(() => {
      //   setPlayTime(parseInt(actx.currentTime));
      // }, 1000);
      update();
    } else {
      bufferSource?.stop();
    }
  };

  const update = () => {
    // requestAnimationFrame(update);
    if (!isPlaying) {
      setPlayTime((prev) => {
        return actx.currentTime - prev;
      });
    }
  };

  return (
    <div>
      <p>文件名：{audioInfo.name}</p>
      <p>时长：{audioInfo.duration} s</p>
      <p>{playTime} s</p>
      <FileInput onChange={fileChange}></FileInput>
      <button onClick={clickHandle}>{isPlaying ? 'pause' : 'play'}</button>
    </div>
  );
}
