import Menu from './components/menu/Menu';
import { Outlet } from 'react-router-dom';

export default function ItTools() {
  return (
    <div className="flex">
      <nav className="left-pannel">
        <Menu />
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
