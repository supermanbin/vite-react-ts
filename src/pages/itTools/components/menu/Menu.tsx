import { NavLink } from 'react-router-dom';
import menu from './menu.module.css';

export default function Menu() {
  return (
  <ul>
    <li>
      <NavLink  className="flex px-2 h-11 items-center" to="token-generator"><span className="rounded-full bg-lime-400">T</span>Token Generator</NavLink>
    </li>
  </ul>
  );
}
