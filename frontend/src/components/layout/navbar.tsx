import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import logo from "../../assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const aboutSubLinks = [
    { name: "Overview", path: "/About" },
    { name: "Mission & Vision", path: "/about#mission" },
    { name: "Leadership", path: "/about#leadership" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-800/70 bg-emerald-950/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              src={logo}
              alt="Waliin Saccos logo"
              className="h-11 w-11 rounded-full border border-amber-400/50 object-cover shadow-sm"
              animate={{ rotate: 360 }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold tracking-[0.12em] text-amber-400 uppercase font-Playwrite-Brasil-Guides">
                Waliin
              </span>
              <span className="text-[10px] font-medium tracking-[0.22em] text-emerald-100/80 uppercase">
                Saccos
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-semibold text-amber-400"
                  : "text-sm font-medium text-emerald-50/80 transition hover:text-amber-300"
              }
            >
              Home
            </NavLink>

            {/* Desktop Hover Dropdown Container */}
            <div className="group relative py-6">
              <Link
                to="/about"
                className="flex items-center gap-1 text-sm font-medium text-emerald-50/80 transition hover:text-amber-300 group-hover:text-amber-400"
              >
                <span>About</span>
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180 group-hover:text-amber-400"
                />
              </Link>

              {/* Desktop Dropdown Menu (Triggers on Hover) */}
              <div className="invisible absolute left-0 top-full w-58 mt-1 rounded-xl bg-white py-2 shadow-xl backdrop-blur-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
              >
                {aboutSubLinks.map((subLink) => (
                  <Link
                    key={subLink.path}
                    to={subLink.path}
                    className="block px-4 py-2 text-sm transition duration-200 hover:bg-black/20 hover:text-green-900/70"
                  >
                    {subLink.name}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-semibold text-amber-400"
                  : "text-sm font-medium text-emerald-50/80 transition hover:text-amber-300"
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-semibold text-amber-400"
                  : "text-sm font-medium text-emerald-50/80 transition hover:text-amber-300"
              }
            >
              News
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-semibold text-amber-400"
                  : "text-sm font-medium text-emerald-50/80 transition hover:text-amber-300"
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="hidden md:block">
            <Link
              to="/login"
              className="inline-flex items-center h-8 justify-center rounded-full bg-yellow-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition hover:brightness-105"
            >
              Join Us
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-emerald-50 transition hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="border-t border-emerald-800/80 bg-emerald-950/95 md:hidden">
          <div className="mx-auto max-w-7xl space-y-2 px-4 py-4">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-3 py-2 text-base font-medium ${isActive
                  ? "bg-emerald-900 text-amber-400"
                  : "text-emerald-50/80 hover:bg-emerald-900/70 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            {/* Mobile About Accordion */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-base font-medium text-emerald-50/80 hover:bg-emerald-900/70 hover:text-white"
              >
                <span>About</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180 text-amber-400" : ""
                    }`}
                />
              </button>

              {mobileAboutOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l border-emerald-800/60 pl-3">
                  {aboutSubLinks.map((subLink) => (
                    <Link
                      key={subLink.path}
                      to={subLink.path}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileAboutOpen(false);
                      }}
                      className="block rounded-lg px-3 py-1.5 text-sm text-emerald-100/70 hover:text-amber-300"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/services"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-3 py-2 text-base font-medium ${isActive
                  ? "bg-emerald-900 text-amber-400"
                  : "text-emerald-50/80 hover:bg-emerald-900/70 hover:text-white"
                }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/news"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-3 py-2 text-base font-medium ${isActive
                  ? "bg-emerald-900 text-amber-400"
                  : "text-emerald-50/80 hover:bg-emerald-900/70 hover:text-white"
                }`
              }
            >
              News
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-3 py-2 text-base font-medium ${isActive
                  ? "bg-emerald-900 text-amber-400"
                  : "text-emerald-50/80 hover:bg-emerald-900/70 hover:text-white"
                }`
              }
            >
              Contact
            </NavLink>

            <div className="pt-2">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-4 py-3 text-center text-sm font-bold text-emerald-950"
              >
                Join us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}