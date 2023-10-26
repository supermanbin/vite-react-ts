import style from './FileInput.module.css';

type FileInputType = {
  onChange: (file: any) => void;
};
export default function FileInput(props: FileInputType) {
  const { onChange } = props;

  const fileChange = (e: any) => {
    const files = e.target.files;
    if (!files.length) return;
    onChange(files[0]);
  };

  return (
    <div className={style['file-uploader']}>
      <label htmlFor="fileUploader">请选择文件</label>
      <input type="file" id="fileUploader" onChange={fileChange} />
    </div>
  );
}
