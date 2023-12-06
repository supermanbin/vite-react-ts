import { NavLink } from 'react-router-dom';
import menu from './menu.module.css';

export default function Menu() {
  return (
    <ul>
      <li>
        <NavLink className={menu['menu-item']} to="token-generator">
          <span className="">T</span>Token Generator
        </NavLink>
      </li>
      <li>
        <NavLink className={menu['menu-item']} to="hash-text">
          <span className="">H</span>Hash Text
        </NavLink>
      </li>
      <li>
        <NavLink className={menu['menu-item']} to="bcrypt">
          <span className="">B</span>Bcrypt
        </NavLink>
      </li>
    </ul>
  );
}
