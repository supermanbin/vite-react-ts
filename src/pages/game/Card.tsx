import { useState } from 'react';

type CardProppType = {
  flower?: string;
  showCard?: string;
  realNum: number;
};
export default function Card({ flower, showCard, ...props }: CardProppType | any) {
  const [highlight, setHighlight] = useState(false);
  const onClickHandle = () => {
    props?.onClick();
    setHighlight((prevState) => !prevState);
  };
  return (
    <div
      className={`flex w-16 h-20 rounded-md border relative justify-center items-center bg-white transition-all duration-300 ${
        (flower === '♥' || flower === '♦' || flower === 'JOKER') && 'text-red-500'
      }`}
      style={{ marginRight: '-1.5rem', marginTop: `${highlight ? '-1rem' : '0'}` }}
      onClick={onClickHandle}
    >
      <span className={`absolute top-1 left-1`}>{flower === 'Joker' || flower === 'JOKER' || flower}</span>
      <strong className={`${flower === 'Joker' || flower === 'JOKER' ? '' : 'text-3xl'}`}>{showCard}</strong>
    </div>
  );
}
