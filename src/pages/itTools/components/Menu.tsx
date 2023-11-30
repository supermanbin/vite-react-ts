import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <div className="left-pannel">
      <ul>
        <li>
          <NavLink to={'/tools/aaa'}>aaa</NavLink>
        </li>
        <li>bbb</li>
        <li>ccc</li>
      </ul>
    </div>
  );
}
