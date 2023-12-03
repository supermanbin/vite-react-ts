import { NavLink } from 'react-router-dom';
import menu from './menu.module.css';

export default function Menu() {
  return (
    <ul>
      <li>
        <NavLink className="flex px-2 h-11 items-center hover:bg-gray-200" to="token-generator">
          <span className="rounded-full bg-lime-400 w-6 h-6 text-center mr-3 text-sm">T</span>Token Generator
        </NavLink>
      </li>
      <li>
        <NavLink className="flex px-2 h-11 items-center hover:bg-gray-200" to="token-generator">
          <span className="rounded-full bg-lime-400 w-6 h-6 text-center mr-3">H</span>Hash Text
        </NavLink>
      </li>
    </ul>
  );
}
