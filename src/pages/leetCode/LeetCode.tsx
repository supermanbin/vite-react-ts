import { twoSum } from '../../algorithm/twoNums';
import { getNoRepeatRandomIntArray, getRandomIntArray } from '../../utils/tools';
import { moveZero } from '../../algorithm/moveZero';
import Layout from '@/components/layout/Layout';
export default function LeetCode() {
  const twoNumsHandle = () => {
    const randomAry = getRandomIntArray(0, 10, 10);
    const array = twoSum(randomAry, 9);
    console.log(randomAry, array);
  };

  const moveZeroHandle = () => {
    const randomAry = getRandomIntArray(0, 10, 10);
    console.log(randomAry);
    const array = moveZero(randomAry);
    console.log(array);
  };

  const cardSort = () => {
    const randomAry = getNoRepeatRandomIntArray(1, 14, 13);
    console.log(randomAry);
    const first = randomAry[0];
    console.log(
      randomAry.sort((a: number, b: number) => {
        return b - a;
      }),
    );
  };

  return (
    <div>
      <Layout></Layout>
      <button onClick={twoNumsHandle} className="rounded p-2 border mr-3">
        two Numbers
      </button>
      <button onClick={moveZeroHandle} className="rounded p-2 border mr-3">
        move zero
      </button>
      <button onClick={cardSort} className="rounded p-2 border mr-3">
        扑克排序
      </button>
    </div>
  );
}
