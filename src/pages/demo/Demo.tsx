import { useState } from 'react';

type demoProps = {
  id?: string;
};
export default function Demo({ id }: demoProps) {
  let conditionalComp: string = '';
  if (!id) {
    conditionalComp = 'aaa';
  }

  const [count, setCount] = useState(0);

  const clickHandler = (): void => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };

  return (
    <>
      <h1>{conditionalComp}</h1>
      <h2>{count}</h2>
      <button
        onClick={clickHandler}
        className="rounded-md bg-blue-500 focus:ring-blue-200 focus:ring text-white px-3 h-9 w-full transition"
      >
        add number
      </button>
    </>
  );
}
