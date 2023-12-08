import { CardType, getNoRepeatRandomIntArray, initCard } from '@/utils/tools';
import { useState } from 'react';
import Card from './Card';

const deck = initCard();

export default function FightLandlords() {
  const [playerA, setPlayerA] = useState([]);
  const [playerB, setPlayerB] = useState([]);
  const [playerC, setPlayerC] = useState([]);
  const [last3, setLast3] = useState([]);
  const playCard = () => {
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
    setPlayerA(playerA.sort(sortCard));
    setPlayerB(playerB.sort(sortCard));
    setPlayerC(playerC.sort(sortCard));
    setLast3(last3Card);
  };

  // 对随机的发牌进行排序
  const sortCard = (a: CardType, b: CardType) => {
    return b.realNum - a.realNum;
  };

  const cardClickHandle = (item: CardType, index: number) => {
    console.log(item, index);
  };

  return (
    <div>
      <button onClick={playCard} className="rounded p-2 border mr-3">
        发牌
      </button>
      <div className="flex">
        {playerA.map((item: CardType, index: number) => (
          <Card
            onClick={() => {
              cardClickHandle(item, index);
            }}
            key={`${item.flower}-${item.realNum}`}
            flower={item.flower}
            showCard={item.showCard}
          />
        ))}
      </div>
      <div className="flex">
        {playerB.map((item: CardType) => (
          <Card key={`${item.flower}-${item.realNum}`} flower={item.flower} showCard={item.showCard} />
        ))}
      </div>
      <div className="flex">
        {playerC.map((item: CardType) => (
          <Card key={`${item.flower}-${item.realNum}`} flower={item.flower} showCard={item.showCard} />
        ))}
      </div>
      <div className="flex">
        {last3.map((item: CardType) => (
          <Card key={`${item.flower}-${item.realNum}`} flower={item.flower} showCard={item.showCard} />
        ))}
      </div>
    </div>
  );
}
