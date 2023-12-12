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

export type CardType = {
  flower: string;
  showCard?: string;
  realNum: number;
};

/**
 * 初始化一副54张的扑克
 * @return 按顺序返回扑克牌 [Joker, JOKER, 3, 4]
 */
export function initCard(): CardType[] {
  // 初始化一副牌
  const flowers = ['♠', '♥', '♣', '♦'];
  const cardNum = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const deck: CardType[] = [
    {
      flower: 'Joker',
      showCard: 'Joker',
      realNum: 16,
    },
    {
      flower: 'JOKER',
      showCard: 'JOKER',
      realNum: 17,
    },
  ];
  for (let i = 0; i < flowers.length; i++) {
    for (let j = 0; j < cardNum.length; j++) {
      const real = cardNum[j];
      const card: CardType = {
        flower: flowers[i],
        realNum: real,
      };
      switch (real) {
        case 11:
          card.showCard = 'J';
          break;
        case 12:
          card.showCard = 'Q';
          break;
        case 13:
          card.showCard = 'K';
          break;
        case 14:
          card.showCard = 'A';
          break;
        case 15:
          card.showCard = '2';
          break;
        default:
          card.showCard = real.toString();
      }
      deck.unshift(card);
    }
  }
  return deck;
}

type GenerateTokenType = {
  uppercase?: boolean;
  lowercase?: boolean;
  numeric?: boolean;
  symbols?: boolean;
  length?: number;
};
export default class Tools {
  constructor() {}
  generateToken({
    uppercase = true,
    lowercase = true,
    numeric = false,
    symbols = false,
    length = 16,
    ...options
  }: GenerateTokenType) {
    const word: string = 'abcdefghijklmnopqrstuvwxyz';
    const num: string = '0123456789';
    const special: string = '.,;:!?./-"\'#{([-|\\\\@)]=} * +';
  }
}
