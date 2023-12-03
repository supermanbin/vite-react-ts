import Menu from './components/menu/Menu';
import { Outlet } from 'react-router-dom';
import style from './index.module.css';

export default function ItTools() {
  return (
    <div className="flex">
      <nav className="basis-48">
        <Menu />
      </nav>
      <main className={style.content}>
        <Outlet />
      </main>
    </div>
  );
}
