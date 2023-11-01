import FileInput from '@/components/FileInput/FileInput';
import { useState } from 'react';

export default function AudioPlayer() {
  const [audioInfo, setAudioInfo] = useState({
    name: '',
    duration: 0,
  });
  const fileChange = (file: any) => {
    // 1. 创建文件读取
    const reader = new FileReader();
    // 2. 创建音频上下文
    const actx = new AudioContext();
    // 3. 创建增益节点
    const gainNode = actx.createGain();
    // 4. 创建buffer来源
    const bufferSource = actx.createBufferSource();
    // 5. buffer连接增益效果节点
    bufferSource.connect(gainNode);
    // 6. 增益效果节点连接输出节点
    gainNode.connect(actx.destination);
    // 7. 读取文件为ArrayBuffer类型
    reader.readAsArrayBuffer(file);
    console.log(gainNode);
    console.log(bufferSource);

    // 8. 读取文件
    reader.onload = (pe) => {
      // 8.1 将读取的文件流转化为音频流
      actx.decodeAudioData(pe.target.result).then((buffer) => {
        bufferSource.buffer = buffer;
        setAudioInfo((prev) => ({
          ...prev,
          name: file.name,
          duration: buffer.duration,
        }));
        bufferSource.start(actx.currentTime, 0);
      });
    };
  };

  const getCurrentTime = () => {};

  return (
    <div>
      <p>文件名：{audioInfo.name}</p>
      <p>时长：{audioInfo.duration} s</p>
      <FileInput onChange={fileChange}></FileInput>
    </div>
  );
}
