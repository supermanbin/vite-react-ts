import { animated, useSpring } from '@react-spring/web';
import { NavLink } from 'react-router-dom';
import './App.css';
import HttpClient from '../utils/httpClient';
import apis from '../utils/apis';
import useStore from '../store/store';

function App() {
  const [springs, api] = useSpring(() => {
    return {
      from: { width: 80 },
    };
  });

  const count = useStore((state) => state.count);
  const add = useStore((state) => state.add);

  const handleClick = () => {
    api.start({
      to: { width: springs.width.get() === 80 ? 200 : 80 },
    });
  };

  const getOneFileHandle = () => {
    add(0);
    HttpClient.get(`${apis.film}/1`)
      .then((value) => {
        console.log(value);
      })
      .catch((reason) => {
        console.log(reason);
      });
  };
  // const p = new Promise((resolve, reject) => {
  //   resolve('This is resolve');
  // });
  // console.log(p);
  //
  // p.then((val) => {
  //   console.log(val);
  // }).catch(reason => {
  //   console.log(reason);
  // });

  return (
    <div className="container mx-auto p-5 xl:p-10 bg-white shadow-lg rounded-lg ">
      <animated.div
        style={{
          height: 80,
          background: '#ff6d6d',
          ...springs,
        }}
        onClick={handleClick}
      >
        {springs.width.to((x) => x.toFixed(0))}
      </animated.div>
      <h1>{count}</h1>
      <form action="">
        <label className="flex flex-row items-center">
          <input type="radio" name="fruit" className="w-5 h-5 mr-2" defaultChecked />
          Apple
        </label>
        <label className="flex flex-row items-center">
          <input type="radio" name="fruit" className="w-5 h-5 mr-2" />
          Banana
        </label>
        <select name="" id="">
          <option value="aa">aaaa</option>
        </select>
      </form>
      <animated.button className="bg-slate-300 px-6 py-1 box" onClick={getOneFileHandle}>
        download
      </animated.button>
      <ul className="flex">
        <li className="p-2" key="cssfilter">
          <NavLink to={'/cssfilter'}>Css Filter</NavLink>
        </li>
        <li className="p-2" key="login">
          <NavLink to={'/login'}>Login</NavLink>
        </li>
        <li className="p-2" key="audiocut">
          <NavLink to={'/audiocut'}>Audio Cut</NavLink>
        </li>
        <li className="p-2" key="player">
          <NavLink to={'/player'}>Audio Player</NavLink>
        </li>
        <li className="p-2" key="textcounters">
          <NavLink to={'/textcounters'}>Text Statistics</NavLink>
        </li>
        <li className="p-2" key="leetcode">
          <NavLink to={'/leet'}>Leet Code</NavLink>
        </li>
        <li className="p-2" key="itTools">
          <NavLink to={'/tools'}>IT Tools</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default App;
