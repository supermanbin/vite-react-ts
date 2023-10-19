import { useState } from 'react';
import firefox from '../../assets/img/firefox-logo.svg';
import style from './CssFliter.module.css';

export default function CssFilter() {
  const [filter, setFilter] = useState({
    grayscale: 0,
    blur: 0,
  });
  const changeHandle = (value: any) => {
    const target = value.target;

    setFilter((state) => ({
      ...state,
      [target.name]: parseInt(target.value),
    }));
  };
  return (
    <div className={style.filter}>
      <div className={style['filter-item']}>
        <p>filter: grayscale({filter.grayscale}%)</p>
        <img alt="" src={firefox} width={200} style={{ filter: `grayscale(${filter.grayscale}%)` }} />
        <input
          defaultValue={filter.grayscale}
          name="grayscale"
          type="range"
          max={100}
          min={0}
          step={25}
          onChange={changeHandle}
        />
      </div>
      <div className={style['filter-item']}>
        <p>filter: blur({filter.blur}px)</p>
        <img alt="" src={firefox} width={200} className={style.blur} style={{ filter: `blur(${filter.blur}px)` }} />
        <input defaultValue={filter.blur} name="blur" type="range" max={10} min={0} step={1} onChange={changeHandle} />
      </div>
    </div>
  );
}
