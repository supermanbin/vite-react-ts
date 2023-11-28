import { twoSum } from '../../algorithm/twoNums';
import { getRandomIntArray } from '../../utils/tools';
import { moveZero } from '../../algorithm/moveZero';
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

  return (
    <div>
      <button onClick={twoNumsHandle}>two Numbers</button>
      <button onClick={moveZeroHandle}>move zero</button>
    </div>
  );
}
