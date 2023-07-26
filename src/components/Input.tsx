
interface InputProps {
  className?: string,
  inputFor?: string,
  labelText: string,
  value: string,
  placeholder?: string,
  type?: string,
}

const inputCls = "rounded-md border border-slate-200 focus:outline-none focus:border-indigo-500 focus:border-2 focus:ring-indigo-200 focus:ring h-9 px-3 transition w-full text-slate-800";
const inputLabel = "mb-2 block text-slate-800";

export default function Input({className,inputFor, labelText, value, placeholder, type}:InputProps) {
  return (
    <div className={`${className}`}>
      <label htmlFor={inputFor} className={inputLabel}>{labelText}</label>
      <input className={`${inputCls}`} type={type} placeholder={placeholder} value={value} />
    </div>
  )
}