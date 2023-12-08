type cardProppType = {
  flower?: string;
  showCard?: string;
  realNum: number;
};
export default function Card({ flower, showCard }) {
  return (
    <div
      className={`flex w-16 h-20 rounded-md border relative justify-center items-center ${
        (flower === '♥' || flower === '♦' || flower === 'JOKER') && 'text-red-500'
      }`}
    >
      <span className={`absolute top-1 left-1`}>{flower === 'Joker' || flower === 'JOKER' || flower}</span>
      <strong className={`text-${flower === 'Joker' || flower === 'JOKER' ? '' : '3'}xl`}>{showCard}</strong>
    </div>
  );
}
