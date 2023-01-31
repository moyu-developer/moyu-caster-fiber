import 'reset-css'
import { Link, Outlet } from 'umi';

export default function Layout() {
  return (
      <div>
        <Outlet />
      </div>
  );
}
