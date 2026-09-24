import { useState, useEffect, useRef, useCallback } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaTelegram } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";
import { Phone } from "lucide-react";
import logo from "../../assets/logo.jpg";
import { cn } from "../ui/utils";
import { useLang } from "../../context/LanguageContext";
import type { Lang } from "../../context/LanguageContext";

const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "am", label: "አማርኛ", short: "AM" },
  { code: "om", label: "Oromiffa", short: "OM" },
];

const NAV_LINKS = [
  { key: "home" as const, path: "/" },
  { key: "services" as const, path: "/services" },
  { key: "news" as const, path: "/news" },
  { key: "contact" as const, path: "/contact" },
];

const ABOUT_SUB = [
  { key: "overview" as const, path: "/about" },
  { key: "missionVision" as const, path: "/about#mission" },
  { key: "leadership" as const, path: "/about#leadership" },
];

const SOCIAL_LINKS = [
  { name: "TikTok", href: "https://tiktok.com/@waliinsacco", Icon: FaTiktok, hover: "hover:text-[#000]" },
  { name: "Telegram", href: "https://t.me/waliinsacco", Icon: FaTelegram, hover: "hover:text-[#229ed9]" },
  { name: "Facebook", href: "https://www.facebook.com/share/p/1LvS29g9Jk/", Icon: FaFacebook, hover: "hover:text-[#1877f2]" },
  { name: "Instagram", href: "https://www.instagram.com/hailudelesa?stkn=M3hubnh6dTFyanN6", Icon: FaInstagram, hover: "hover:text-[#e4405f]" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { lang, setLang, t } = useLang();
  const activeLang = LANGUAGES.find((l) => l.code === lang)!;
  const location = useLocation();
  const navigate = useNavigate();
  const isAboutActive = location.pathname.startsWith("/about");

  const handleAboutSub = useCallback((path: string) => {
    setAboutOpen(false);
    const [route, hash] = path.split("#");
    if (location.pathname === route && hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(path);
    }
  }, [location.pathname, navigate]);

  const openAbout = useCallback(() => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    setAboutOpen(true);
  }, []);

  const closeAbout = useCallback(() => {
    aboutTimer.current = setTimeout(() => setAboutOpen(false), 120);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node))
        setLangOpen(false);
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
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);
  const PHONE_NUMBER = "+251 911 91 56 10";
  const PHONE_HREF = "tel:+251911915610";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300 bg-white",
        scrolled ? "border-[#e6e0d6] shadow-sm" : "border-transparent",
      )}
    >
      <aside aria-label="Top Bar Header" className="bg-yellow-400">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Left Side: Bold Phone Contact */}
          <a
            href={PHONE_HREF}
            className="group inline-flex items-center gap-2 text-xs font-extrabold text-black transition-all duration-200 hover:text-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-1"
            aria-label={`Call Waliin SACCO at ${PHONE_NUMBER}`}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10 transition-transform duration-200 group-hover:scale-110 group-hover:bg-black/20">
              <Phone className="h-3.5 w-3.5 text-black stroke-[2.5]" aria-hidden="true" />
            </div>
            <span className="tracking-wider">{PHONE_NUMBER}</span>
          </a>

          {/* Right Side: Social Media Links & Label */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <span className="hidden text-xs font-bold uppercase tracking-widest text-black/90 sm:inline">
              Connect with us
            </span>

            {/* Solid Divider */}
            <span className="hidden h-3.5 w-px bg-black/30 sm:inline" aria-hidden="true" />

            {/* High-Visibility Bold Social Icons */}
            <div className="flex items-center gap-3.5">
              {SOCIAL_LINKS.map(({ name, href, Icon, hover }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Waliin SACCO on ${name}`}
                  className={cn(
                    "group text-black transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-1",
                    hover
                  )}
                >
                  <Icon className="h-4 w-4 text-current stroke-[2.2] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </aside>

      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Waliin SACCO Ltd"
            className="h-10 w-10 rounded-full border border-[#e6e0d6] object-cover"
          />
          <div className="leading-tight">
            <p className="text-md font-bold text-[#0e241d]">WALIN</p>
            <p className="text-sm font-bold text-[#0e241d]">SACCOS Ltd</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0 md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              cn(
                "relative px-4 py-2 text-sm font-semibold transition-colors",
                isActive ? "text-[#0e241d]" : "text-[#5d6f68] hover:text-[#0e241d]",
              )
            }
          >
            {({ isActive }) => (
              <>
                {t("home")}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 inset-x-4 h-[2px] rounded-full bg-[#d4a017]"
                  />
                )}
              </>
            )}
          </NavLink>

          {/* About dropdown */}
          <div
            ref={aboutRef}
            className="relative"
            onMouseEnter={openAbout}
            onMouseLeave={closeAbout}
          >
            <button
              type="button"
              onClick={() => setAboutOpen((v) => !v)}
              className={cn(
                "relative flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors",
                isAboutActive || aboutOpen ? "text-[#0e241d]" : "text-[#5d6f68] hover:text-[#0e241d]",
              )}
            >
              {t("about")}
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
              />
              {isAboutActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 inset-x-4 h-[2px] rounded-full bg-[#d4a017]"
                />
              )}
            </button>

            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  onMouseEnter={openAbout}
                  onMouseLeave={closeAbout}
                  className="absolute left-0 top-full pt-2 z-50"
                >
                  <div className="w-52 overflow-hidden rounded-xl border border-[#e6e0d6] bg-white py-1.5 shadow-lg">
                    {ABOUT_SUB.map((sub) => (
                      <button
                        key={sub.path}
                        type="button"
                        onClick={() => handleAboutSub(sub.path)}
                        className="block w-full text-left px-4 py-2.5 text-sm text-[#5d6f68] hover:bg-[#f7f5f0] hover:text-[#0e241d] transition-colors"
                      >
                        {t(sub.key)}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.slice(1).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "relative px-4 py-2 text-sm font-semibold transition-colors",
                  isActive ? "text-[#0e241d]" : "text-[#5d6f68] hover:text-[#0e241d]",
                )
              }
            >
              {({ isActive }) => (
                <>
                  {t(link.key)}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 inset-x-4 h-[2px] rounded-full bg-[#d4a017]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Language picker */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-semibold text-[#5d6f68] hover:text-[#0e241d] transition-colors"
            >
              <Globe size={14} />
              {activeLang.short}
              <ChevronDown size={12} className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-36 overflow-hidden rounded-xl border border-[#e6e0d6] bg-white shadow-lg"
                >
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={cn(
                        "flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-[#f7f5f0]",
                        lang === l.code ? "font-bold text-[#0e241d]" : "text-[#5d6f68]",
                      )}
                    >
                      {l.label}
                      {lang === l.code && <span className="h-1.5 w-1.5 rounded-full bg-[#d4a017]" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/login"
            className="text-sm font-semibold text-[#5d6f68] hover:text-[#0e241d] transition-colors"
          >
            {t("signIn")}
          </Link>

          <Link
            to="/login"
            className="inline-flex h-10 items-center rounded-full bg-yellow px-5 text-sm font-bold text-white hover:bg-[#16382e] transition-colors"
          >
            {t("becomeMember")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e6e0d6] text-[#0e241d] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#e6e0d6] bg-white md:hidden"
          >
            <div className="space-y-0.5 px-4 py-4">
              <NavLink
                to="/"
                end
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-[#f7f5f0] text-[#0e241d] border-l-2 border-[#d4a017]"
                      : "text-[#5d6f68] hover:bg-[#f7f5f0] hover:text-[#0e241d]",
                  )
                }
              >
                {t("home")}
              </NavLink>

              {/* About accordion */}
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                  isAboutActive
                    ? "bg-[#f7f5f0] text-[#0e241d] border-l-2 border-[#d4a017]"
                    : "text-[#5d6f68] hover:bg-[#f7f5f0] hover:text-[#0e241d]",
                )}
              >
                {t("about")}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {mobileAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden ml-4 border-l border-[#e6e0d6] pl-3"
                  >
                    {ABOUT_SUB.map((sub) => (
                      <button
                        key={sub.path}
                        type="button"
                        onClick={() => { setIsOpen(false); setMobileAboutOpen(false); handleAboutSub(sub.path); }}
                        className="block w-full text-left rounded-lg px-3 py-2.5 text-sm text-[#5d6f68] hover:text-[#0e241d] transition-colors"
                      >
                        {t(sub.key)}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {NAV_LINKS.slice(1).map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-[#f7f5f0] text-[#0e241d] border-l-2 border-[#d4a017]"
                        : "text-[#5d6f68] hover:bg-[#f7f5f0] hover:text-[#0e241d]",
                    )
                  }
                >
                  {t(link.key)}
                </NavLink>
              ))}

              <div className="pt-3 border-t border-[#e6e0d6] mt-3 space-y-2">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#5d6f68] hover:bg-[#f7f5f0] hover:text-[#0e241d] transition-colors"
                >
                  {t("signIn")}
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full bg-yellow-500 px-4 py-3 text-center text-sm font-bold text-white hover:bg-[#16382e] transition-colors"
                >
                  {t("becomeMember")}
                </Link>
              </div>

              {/* Mobile language picker */}
              <div className="mt-4 border-t border-[#e6e0d6] pt-4">
                <p className="mb-2 flex items-center gap-1.5 px-1 text-xs font-bold uppercase tracking-widest text-[#5d6f68]">
                  <Globe size={12} /> {t("language")}
                </p>
                <div className="flex gap-2">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={cn(
                        "flex-1 rounded-xl py-2 text-sm font-bold transition-colors",
                        lang === l.code
                          ? "bg-[#0e241d] text-white"
                          : "bg-[#f7f5f0] text-[#5d6f68] hover:bg-[#e6e0d6]",
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
