import React from "react";

interface InputProps {
  className?: string,
  inputFor?: string,
  labelText: string,
  placeholder?: string,
  type?: string,
  value?: string,
  defaultValue?: string,
  onChange(val: any): void
}

const inputCls = "rounded-md border border-slate-200 focus:outline-none focus:border-indigo-500 focus:border-2 focus:ring-indigo-200 focus:ring h-9 px-3 transition w-full text-slate-800";
const inputLabel = "mb-2 block text-slate-800";

export default function Input({className,inputFor, labelText, placeholder, type, value,defaultValue, onChange}:InputProps) {

  function onChangeHandle(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div className={`${className?className:''}`}>
      <label htmlFor={inputFor} className={inputLabel}>{labelText}</label>
      <input className={`${inputCls}`} type={type} placeholder={placeholder} onChange={(e) => {onChangeHandle(e)}} value={value} defaultValue={defaultValue}  />
    </div>
  )
}