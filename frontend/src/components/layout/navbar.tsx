import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.jpg";

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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-emerald-950/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-emerald-950/80 backdrop-blur-md border-b border-emerald-800/40"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-md group-hover:bg-amber-400/30 transition-all duration-300" />
              <img
                src={logo}
                alt="Waliin Saccos"
                className="relative h-10 w-10 rounded-full border-2 border-amber-400/60 object-cover shadow-md"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-extrabold tracking-[0.15em] text-amber-400 uppercase">
                Waliin
              </span>
              <span className="text-[9px] font-semibold tracking-[0.3em] text-emerald-300/70 uppercase mt-0.5">
                Saccos
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-amber-400 bg-white/5"
                    : "text-emerald-100/75 hover:text-white hover:bg-white/5"
                }`
              }
            >
              Home
            </NavLink>

            {/* About dropdown */}
            <div className="group relative">
              <Link
                to="/about"
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-emerald-100/75 hover:text-white hover:bg-white/5 transition-all duration-200 group-hover:text-amber-400"
              >
                About
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-0 top-full pt-2 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <div className="w-52 rounded-2xl bg-white border border-gray-100 shadow-2xl shadow-black/10 py-2 overflow-hidden">
                  {aboutSubLinks.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 font-medium transition-colors duration-150"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-amber-400 bg-white/5"
                      : "text-emerald-100/75 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm font-semibold text-emerald-200/80 hover:text-white transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-emerald-950 text-sm font-bold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:brightness-105 transition-all duration-200"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-emerald-50 hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-emerald-800/50 bg-emerald-950/98 md:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
              <NavLink
                to="/"
                end
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-150 ${
                    isActive ? "bg-white/8 text-amber-400" : "text-emerald-100/80 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>

              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-emerald-100/80 hover:bg-white/5 hover:text-white transition-colors duration-150"
                >
                  About
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180 text-amber-400" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.15 }}
                      className="overflow-hidden ml-4 mt-1 border-l border-emerald-800/50 pl-3 space-y-0.5"
                    >
                      {aboutSubLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={() => { setIsOpen(false); setMobileAboutOpen(false); }}
                          className="block rounded-lg px-3 py-2 text-sm text-emerald-200/70 hover:text-amber-300 transition-colors duration-150"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-150 ${
                      isActive ? "bg-white/8 text-amber-400" : "text-emerald-100/80 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-3 pb-1">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 px-4 py-3 text-center text-sm font-bold text-emerald-950 shadow-lg shadow-amber-500/20"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
