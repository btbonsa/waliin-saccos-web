import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../assets/logo.jpg";
import { cn } from "../ui/utils";
import { useLang } from "../../context/LanguageContext";
import type { Lang } from "../../context/LanguageContext";

const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English",  short: "EN" },
  { code: "am", label: "አማርኛ",    short: "AM" },
  { code: "om", label: "Oromiffa", short: "OM" },
];

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
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { lang, setLang } = useLang();
  const activeLang = LANGUAGES.find((l) => l.code === lang)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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
          {/* Language picker */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-bold text-muted hover:text-ink transition-colors"
            >
              <Globe size={14} />
              {activeLang.short}
              <ChevronDown size={12} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-36 overflow-hidden rounded-2xl border border-line bg-white shadow-lg"
                >
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={cn(
                        "flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-gray-50",
                        lang === l.code ? "font-bold text-forest" : "text-muted"
                      )}
                    >
                      {l.label}
                      {lang === l.code && <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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

              {/* Mobile language picker */}
              <div className="mt-4 border-t border-line pt-4">
                <p className="mb-2 flex items-center gap-1.5 px-1 text-xs font-bold uppercase tracking-widest text-muted">
                  <Globe size={12} /> Language
                </p>
                <div className="flex gap-2">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={cn(
                        "flex-1 rounded-xl py-2 text-sm font-bold transition-colors",
                        lang === l.code
                          ? "bg-forest text-white"
                          : "bg-gray-100 text-muted hover:bg-gray-200"
                      )}
                    >
                      {l.short}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
