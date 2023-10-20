import firefox from '../../assets/img/firefox-logo.svg';
import { ChangeEvent, useState } from 'react';

type ParameterType = {
  title?: string;
  src?: string;
  filterType: string;
  max?: number;
  min?: number;
  step?: number;
  value: string;
  unit?: string;
  onChange: (t: EventTarget & HTMLInputElement) => void;
};

export default function ParameterInput(props: ParameterType) {
  const { title, unit, src, filterType, max, min, step, onChange, value } = props;
  const changeHandle = (value: ChangeEvent<HTMLInputElement>) => {
    const target = value.target;
    onChange(target);
  };

  return (
    <div className="flex items-center">
      <span className="mr-3">
        <img alt="" src={src} width={32} style={{ filter: `${filterType}(${value}${unit ?? '%'})` }} />
      </span>
      <div className="flex items-center">
        <label>{filterType}</label>
        <input
          className="mx-3"
          value={value}
          name={filterType}
          type="range"
          max={max}
          min={min}
          step={step}
          onChange={changeHandle}
        />
        <span title={title}>
          {value}
          {unit ?? '%'}
        </span>
      </div>
    </div>
  );
}
