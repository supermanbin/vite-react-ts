type cardProppType = {
  flower?: string;
  num: number | string;
};
export default function Card({ flower, num }) {
  return (
    <div
      className={`flex w-16 h-20 rounded-md border relative justify-center items-center ${
        (flower === '♥' || flower === '♦' || flower === 'JOKER') && 'text-red-500'
      }`}
    >
      <span className={`absolute top-1 left-1`}>{flower}</span>
      <strong className="text-4xl">{num}</strong>
    </div>
  );
}
