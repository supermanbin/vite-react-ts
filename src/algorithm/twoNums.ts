import { getRandomIntArray } from '../utils/tools';
export const twoSum = function (nums: number[], target: number): number[] | void {
  const indexs: number[] = [];
  const len: number = nums.length;
  if (len < 2) {
    return indexs;
  }
  // 1. 双循环方式
  // for (let i = 0; i < len; i++) {
  //   for (let j = 0; j < len; j++) {
  //     if (j > i && nums[i] + nums[j] === target) {
  //       indexs.push(i, j);
  //       return indexs;
  //     }
  //   }
  // }
  // return indexs;

  // 2. Map 方式
  const map = new Map();
  for (let i = 0; i < len; i++) {
    console.log(i);
    if (map.has(target - nums[i])) {
      indexs.push(map.get(target - nums[i]), i);
      return indexs;
    }
    map.set(nums[i], i);
  }
  return indexs;
};
