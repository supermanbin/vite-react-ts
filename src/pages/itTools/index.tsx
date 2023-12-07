import Menu from './components/menu/Menu';
import { Outlet } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

export default function ItTools() {
  return (
    <Layout>
      <Menu />
    </Layout>
  );
}
