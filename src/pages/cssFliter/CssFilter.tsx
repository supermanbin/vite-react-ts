import firefox from '../../assets/img/firefox-logo.svg';
import style from './CssFliter.module.css';

export default function CssFilter() {
  const changeHandle = (value: any) => {
    console.log(value.target.value);
    console.log(value.target.name);
  };
  return (
    <div className={style.filter}>
      <div className={style['filter-item']}>
        <p>grayscale</p>
        <img src={firefox} width={200} className={style.grayscale} />
        <input name="grayscale" type="range" max={100} min={0} step={25} onChange={changeHandle} />
      </div>
      <div className={style['filter-item']}>
        <p>blur</p>
        <img src={firefox} width={200} className={style.blur} />
        <input name="blur" type="range" max={100} min={0} step={1} onChange={changeHandle} />
      </div>
    </div>
  );
}
