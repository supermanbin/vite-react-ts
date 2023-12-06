import style from './checkbox.module.css';
import { ChangeEvent } from 'react';

export type checkboxPropsType = {
  htmlFor?: string;
  label?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
export default function Checkbox({ htmlFor, label, name, onChange, ...props }: checkboxPropsType) {
  const changeHandel = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };
  return (
    <div className={style['wrapper']}>
      <input className={style['checkbox']} type="checkbox" name={name} id={htmlFor} onChange={changeHandel} />
      {label && (
        <label className={style['label']} htmlFor={htmlFor}>
          {label}
        </label>
      )}
    </div>
  );
}
