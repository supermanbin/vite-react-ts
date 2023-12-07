import style from './layout.module.css';
import { Outlet } from 'react-router-dom';

export default function Layout({ ...props }) {
  return (
    <div className="flex">
      <div className={style['left-pannel']}>
        <nav className="basis-48">{props.children}</nav>
      </div>

      <main className={style.content}>
        <Outlet />
      </main>
    </div>
  );
}
