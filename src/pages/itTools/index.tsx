import Menu from './components/menu/Menu';
import { Outlet } from 'react-router-dom';
import style from './index.module.css';

export default function ItTools() {
  return (
    <div className="flex">
      <div className={style['left-pannel']}>
        <nav className="basis-48">
          <Menu />
        </nav>
      </div>

      <main className={style.content}>
        <Outlet />
      </main>
    </div>
  );
}
