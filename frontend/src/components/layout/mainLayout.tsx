import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
