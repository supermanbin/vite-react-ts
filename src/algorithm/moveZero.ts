export const moveZero = (nums: number[]): void | number[] => {
  if (!nums.length) {
    return [];
  }
  if (nums.length === 1) return nums;
  // for (let i = 0; i < nums.length; i++) {
  //   if (!nums[i]) {
  //     nums.splice(i, 1);
  //     console.log(nums);
  //     nums.push(0);
  //   }
  // }
  const temp = Map.groupBy(nums, (item) => !!item);
  nums.splice(0, nums.length);
  return nums.concat(temp.get(true), temp.get(false));
};
