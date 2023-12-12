import { ChangeEvent, useState } from 'react';
import style from '../../index.module.css';
import Checkbox from '@/components/Checkbox/Checkbox';

export default function TokenGenerator() {
  const [values, setValues] = useState({
    uppercase: '',
    numbers: '',
    lowercase: '',
    symbols: '',
    length: 1,
  });
  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setValues((state) => ({
      ...state,
      [name]: name === 'length' ? value : checked,
    }));
    console.log(values);
  };
  return (
    <div>
      <Checkbox label="Uppercase" htmlFor="Uppercase" name="uppercase" onChange={onChangeHandle} />
      <Checkbox label="Numbers" htmlFor="Numbers" name="numbers" onChange={onChangeHandle} />
      <Checkbox label="Lowercase" htmlFor="Lowercase" name="lowercase" onChange={onChangeHandle} />
      <Checkbox label="Symbols" htmlFor="Symbols" name="symbols" onChange={onChangeHandle} />
      <label htmlFor="Length" className={style['slider']}>
        <span>Length{values.length}</span>
        <input type="range" name="length" id="Length" defaultValue={1} min={1} max={512} onChange={onChangeHandle} />
      </label>
    </div>
  );
}
