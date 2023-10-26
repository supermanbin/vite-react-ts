import React from 'react';

// button class
const buttonCls = 'rounded-md bg-blue-500 focus:ring-blue-200 focus:ring text-white px-3 h-9 w-full transition';

export default function LoadingButton({ onClick, children }) {
  const clickHandle = () => {
    onClick();
  };
  return (
    <button className={buttonCls} onClick={clickHandle}>
      {children}
    </button>
  );
}
