import { useState } from 'react'
import {animated, useSpring} from '@react-spring/web'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
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
    </div>
  )
}

export default App
