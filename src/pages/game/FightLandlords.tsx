import { getNoRepeatRandomIntArray } from '@/utils/tools';
import { useState } from 'react';
import Card from './Card';

const deck: any = [
  ['JOKER'],
  ['joker'],
  ['♠', 'A'],
  ['♠', 2],
  ['♠', 3],
  ['♠', 4],
  ['♠', 5],
  ['♠', 6],
  ['♠', 7],
  ['♠', 8],
  ['♠', 9],
  ['♠', 10],
  ['♠', 'J'],
  ['♠', 'Q'],
  ['♠', 'K'],
  ['♥', 'A'],
  ['♥', 2],
  ['♥', 3],
  ['♥', 4],
  ['♥', 5],
  ['♥', 6],
  ['♥', 7],
  ['♥', 8],
  ['♥', 9],
  ['♥', 10],
  ['♥', 'J'],
  ['♥', 'Q'],
  ['♥', 'K'],
  ['♣', 'A'],
  ['♣', 2],
  ['♣', 3],
  ['♣', 4],
  ['♣', 5],
  ['♣', 6],
  ['♣', 7],
  ['♣', 8],
  ['♣', 9],
  ['♣', 10],
  ['♣', 'J'],
  ['♣', 'Q'],
  ['♣', 'K'],
  ['♦', 'A'],
  ['♦', 2],
  ['♦', 3],
  ['♦', 4],
  ['♦', 5],
  ['♦', 6],
  ['♦', 7],
  ['♦', 8],
  ['♦', 9],
  ['♦', 10],
  ['♦', 'J'],
  ['♦', 'Q'],
  ['♦', 'K'],
];

export default function FightLandlords() {
  const [playerA, setPlayerA] = useState([]);
  const [playerB, setPlayerB] = useState([]);
  const [playerC, setPlayerC] = useState([]);
  const playCard = () => {
    // 初始化一副牌
    // const flowers = ['♠', '♥', '♣', '♦'];
    // const cardNum = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    // const deck = [['JOKER'], ['joker']];
    // for (let i = 0; i < flowers.length; i++) {
    //   for (let j = 0; j < cardNum.length; j++) {
    //     deck.push([flowers[i], cardNum[j]]);
    //   }
    // }
    // console.log(deck);

    // 角色
    const playerA: any = [];
    const playerB: any = [];
    const playerC: any = [];
    // 地主的最后3张牌
    const last3Card: any = [];
    // 0 ~ 53不重复的随机数，用于洗牌
    const randomAry = getNoRepeatRandomIntArray(0, 54, 54);

    // 发牌
    for (let i = 0; i < randomAry.length; i++) {
      const distribute = i % 3;
      if (i === randomAry.length - 1 || i === randomAry.length - 2 || i === randomAry.length - 3) {
        // 留最后3张牌作为底牌
        last3Card.push(deck[randomAry[i]]);
      } else {
        // 顺序发牌
        if (distribute === 0) {
          playerA.push(deck[randomAry[i]]);
        } else if (distribute === 1) {
          playerB.push(deck[randomAry[i]]);
        } else if (distribute === 2) {
          playerC.push(deck[randomAry[i]]);
        }
      }
    }
    setPlayerA(playerA);
    setPlayerB(playerB);
    setPlayerC(playerC);
  };
  return (
    <div>
      <button onClick={playCard} className="rounded p-2 border mr-3">
        发牌
      </button>
      <div className="flex">
        {playerA.map((item) => (
          <Card key={`${item[0]}-${item[1]}`} flower={item[0]} num={item.length > 1 && item[1]} />
        ))}
      </div>
      <div className="flex">
        {playerB.map((item) => (
          <Card key={`${item[0]}-${item[1]}`} flower={item[0]} num={item.length > 1 && item[1]} />
        ))}
      </div>
      <div className="flex">
        {playerC.map((item) => (
          <Card key={`${item[0]}-${item[1]}`} flower={item[0]} num={item.length > 1 && item[1]} />
        ))}
      </div>
    </div>
  );
}
