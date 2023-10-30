import style from './FileInput.module.css';
import { useRef, useState } from 'react';

type FileInputType = {
  onChange: (file: any) => void;
};
export default function FileInput({ onChange }: FileInputType) {
  const [val, setVal] = useState('');
  const fileRef = useRef();
  const fileChange = (e: any) => {
    const files = e.target.files;

    if (!files.length) return;
    setVal(e.target.value);
    onChange(files[0]);
  };

  const handleClick = () => {
    setVal('');
  };

  return (
    <div className={style['file-uploader']}>
      <label htmlFor="fileUploader">请选择文件</label>
      <input type="file" id="fileUploader" value={val} onChange={fileChange} />
      <button onClick={handleClick}>Clear</button>
    </div>
  );
}
