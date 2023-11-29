import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="token-generator">Token Generator</NavLink>
        </li>
      </ul>
    </div>
  );
}
