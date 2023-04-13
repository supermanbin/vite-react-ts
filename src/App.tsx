import { useState } from 'react'
import {animated, useSpring} from '@react-spring/web'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [back, setBack] = useState(false)
  const [springs, api] = useSpring(() => {
    return {
      from: {width: 80}
    };
  });

  const handleClick = () => {
    if (!back) {
      api.start({
        from: {width: 80},
        to: {width: 200}
      })
    } else {
      api.resume()
    }
    setBack((back) => !back);
  }
  
  

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
      <h1>Vite + React</h1>
      <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="">
        Click on the Vite and React logos to learn more
      </p>
      <animated.div
       style={{
        height:80, 
        background: '#ff6d6d', 
        ...springs
        }} onClick={handleClick}></animated.div>
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
