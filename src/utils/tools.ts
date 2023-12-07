export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

export function getRandomIntArray(min: number, max: number, length: number): number[] {
  const randomArray: number[] = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(getRandomInt(min, max));
  }
  return randomArray;
}

export function getNoRepeatRandomIntArray(min: number, max: number, length: number): any {
  const mySet = new Set();
  let array: any = [];
  while (array.length < length) {
    mySet.add(getRandomInt(min, max));
    array = Array.from(mySet);
  }
  return array;
}
