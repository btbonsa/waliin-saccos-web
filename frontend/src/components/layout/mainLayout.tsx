import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Top Navigation */}
      <Navbar />

      {/* Dynamic Main Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;