import { useState } from 'react'
import {animated, useSpring} from '@react-spring/web'
import './App.css'

function App() {
  const [springs, api] = useSpring(() => {
    return {
      from: {width: 80}
    };
  });

  const handleClick = () => {
    api.start({
      to: {width: springs.width.get() === 80 ? 200 : 80}
    })

  }

  const p = new Promise((resolve, reject) => {
    resolve('This is resolve');
  });
  console.log(p);

  p.then((val) => {
    console.log(val);
  }).catch(reason => {
    console.log(reason);
  });

  return (
    <div className="container mx-auto p-5 xl:p-10 bg-white shadow-lg rounded-lg ">
      <animated.div
       style={{
        height:80,
        background: '#ff6d6d',
        ...springs
        }} onClick={handleClick}>
          {springs.width.to(x => x.toFixed(0))}
        </animated.div>
      <form action="">
        <label className='flex flex-row items-center'>
          <input type="radio" name="fruit" className='w-5 h-5 mr-2' defaultChecked />
          Apple
        </label>
        <label className='flex flex-row items-center'>
          <input type="radio" name="fruit" className='w-5 h-5 mr-2' />
          Banana
        </label>
        <select name="" id="">
          <option value="aa">aaaa</option>
        </select>
      </form>
      <animated.button className="bg-slate-300 px-6 py-1 box">
        download
      </animated.button>
    </div>
  )
}

export default App
