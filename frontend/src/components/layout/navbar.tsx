import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../assets/logo.jpg";
import { cn } from "../ui/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const aboutSubLinks = [
  { name: "Overview", path: "/about" },
  { name: "Mission & Vision", path: "/about#mission" },
  { name: "Leadership", path: "/about#leadership" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "rounded-lg px-3 py-2 text-lg transition-colors",
      isActive ? "text-forest" : "text-muted hover:text-ink",
    );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-line bg-white shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Waliin SACCO Ltd"
            className="h-10 w-10 rounded-full border border-line object-cover"
          />
          <div className="leading-tight">
            <p className="text-md font-bold text-ink">Waliin</p>
            <p className="text-[11px] text-muted">SACCO Ltd</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex text-lg">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          <div className="group relative">
            <Link
              to="/about"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-lg text-muted hover:text-ink"
            >
              About
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="w-52 overflow-hidden rounded-2xl border border-line bg-paper py-2 shadow-lg">
                {aboutSubLinks.map((sub) => (
                  <Link
                    key={sub.path}
                    to={sub.path}
                    className="block px-4 py-2.5 text-sm font-bold text-muted hover:bg-cream hover:text-ink"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/login" className="text-sm font-bold text-muted hover:text-ink">
            Sign in
          </Link>
          <Link
            to="/login"
            className="inline-flex h-10 items-center rounded-full bg-yellow-500 px-5 text-sm font-bold text-white hover:bg-yellow-500 hover:text-white hover:brightness-105 transition-all"
          >
            Become a member
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              <NavLink
                to="/"
                end
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn("block rounded-xl px-4 py-3 text-sm font-bold", isActive ? "bg-yellow-500 text-ink" : "text-muted")
                }
              >
                Home
              </NavLink>

              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-muted"
              >
                About
                <ChevronDown size={16} className={mobileAboutOpen ? "rotate-180" : ""} />
              </button>
              {mobileAboutOpen && (
                <div className="ml-4 space-y-1 border-l border-line pl-3">
                  {aboutSubLinks.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileAboutOpen(false);
                      }}
                      className="block rounded-lg px-3 py-2 text-sm text-muted"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.slice(1).map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn("block rounded-xl px-4 py-3 text-sm font-bold", isActive ? "bg-yellow-500 text-ink" : "text-muted")
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="mt-3 block rounded-full bg-yellow-500 px-4 py-3 text-center text-sm font-bold text-white"
              >
                Become a member
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
