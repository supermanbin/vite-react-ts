import { CardType, getNoRepeatRandomIntArray, getRandomInt, initCard } from '@/utils/tools';
import { useEffect, useState } from 'react';
import Card from './Card';

const deck = initCard();

export default function FightLandlords() {
  const [playerA, setPlayerA] = useState({ lord: false, cards: [] });
  const [playerB, setPlayerB] = useState({ lord: false, cards: [] });
  const [playerC, setPlayerC] = useState({ lord: false, cards: [] });
  let randomLord = -1;
  useEffect(() => {
    // 随机分配地主：0:A 1:B 2:C
    randomLord = getRandomInt(0, 3);
    console.log(randomLord);
  }, []);
  // 发牌
  const dealt = () => {
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

    setPlayerA({
      lord: randomLord === 0,
      cards: playerA.sort(sortCard),
    });
    setPlayerB({
      lord: randomLord === 1,
      cards: playerB.sort(sortCard),
    });
    setPlayerC({
      lord: randomLord === 2,
      cards: playerC.sort(sortCard),
    });
  };

  // 对随机的发牌进行排序
  const sortCard = (a: CardType, b: CardType) => {
    return b.realNum - a.realNum;
  };

  const cardClickHandle = (item: CardType, index: number) => {
    console.log(item, index);
  };

  const callLord = () => {
    if (playerA.lord) {
      setPlayerA((prevState) => ({ ...prevState, lord: false }));
      setPlayerB((prevState) => ({ ...prevState, lord: true }));
      setPlayerC((prevState) => ({ ...prevState, lord: false }));
    }
    if (playerB.lord) {
      setPlayerA((prevState) => ({ ...prevState, lord: false }));
      setPlayerB((prevState) => ({ ...prevState, lord: false }));
      setPlayerC((prevState) => ({ ...prevState, lord: true }));
    }
    if (playerC.lord) {
      setPlayerA((prevState) => ({ ...prevState, lord: true }));
      setPlayerB((prevState) => ({ ...prevState, lord: false }));
      setPlayerC((prevState) => ({ ...prevState, lord: false }));
    }
  };

  return (
    <div>
      <button onClick={dealt} className="rounded p-2 border mr-2">
        发牌
      </button>
      <div className="flex flex-col">
        <div className="flex">
          {playerA.cards.map((item: CardType, index: number) => (
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
        <div className="flex mt-2">
          <button
            className={`rounded p-2 border mr-2 ${!playerA.lord ? 'bg-gray-200' : ''}`}
            disabled={!playerA.lord}
            onClick={callLord}
          >
            叫地主
          </button>
          <button className="rounded p-2 border mr-2 disabled:bg-gray-200" disabled>
            出牌
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-end">
          {playerB.cards.map((item: CardType, index: number) => (
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
        <div className="flex justify-end mt-2">
          <button
            className={`rounded p-2 border mr-2 ${!playerB.lord ? 'bg-gray-200' : ''}`}
            disabled={!playerB.lord}
            onClick={callLord}
          >
            叫地主
          </button>
          <button className="rounded p-2 border ml-2 disabled:bg-gray-200" disabled>
            出牌
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-center">
          {playerC.cards.map((item: CardType, index: number) => (
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
        <div className="flex justify-center mt-2">
          <button
            className={`rounded p-2 border mr-2 ${!playerC.lord ? 'bg-gray-200' : ''}`}
            disabled={!playerC.lord}
            onClick={callLord}
          >
            叫地主
          </button>
          <button className="rounded p-2 border mr-2 disabled:bg-gray-200" disabled>
            出牌
          </button>
        </div>
      </div>
    </div>
  );
}
