import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-grow overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
