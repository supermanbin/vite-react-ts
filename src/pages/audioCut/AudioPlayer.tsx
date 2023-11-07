import FileInput from '@/components/FileInput/FileInput';
import { useEffect, useState } from 'react';

// 1. 创建文件读取
const reader = new FileReader();
// 2. 创建音频上下文
const actx = new AudioContext();
// 3. 创建增益节点
const gainNode = actx.createGain();
// 4. 创建buffer来源
let bufferSource: AudioBufferSourceNode | null = null;
let audioBuffer: AudioBuffer | null = null;

export default function AudioPlayer() {
  const [audioInfo, setAudioInfo] = useState({
    name: '',
    duration: 0,
  });
  const [playState, setPlayState] = useState('play');

  const fileChange = (file: any) => {
    reader.readAsArrayBuffer(file);
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

  const getCurrentTime = () => {};

  const clickHandle = () => {
    setPlayState((prev) => {
      if (prev === 'play') {
        return 'pause';
      } else {
        return 'play';
      }
    });
    if (playState === 'play') {
      console.log('play');
      bufferSource?.disconnect();
      bufferSource = actx.createBufferSource();
      bufferSource.buffer = audioBuffer;
      bufferSource.connect(gainNode);
      bufferSource.start(0, 0, 10);
      console.log(bufferSource);
    } else {
      console.log('pause');
      bufferSource?.stop();
    }
  };

  return (
    <div>
      <p>文件名：{audioInfo.name}</p>
      <p>时长：{audioInfo.duration} s</p>
      <FileInput onChange={fileChange}></FileInput>
      <button onClick={clickHandle}>{playState}</button>
    </div>
  );
}
