import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[2000px] py-6 xl:py-8 bg-gray-100"> {/* برای تست اسکرول */}
        <Outlet />
      </main>
    </>
  );
}
