import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const companyLinks = [
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Membership", path: "/login" },
  { name: "News & Insights", path: "/news" },
];

const resourceLinks = [
  { name: "FAQs", path: "#" },
  { name: "Security", path: "#" },
  { name: "Privacy Policy", path: "#" },
  { name: "Terms of Service", path: "#" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-emerald-950 text-emerald-50">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-emerald-500/8 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-amber-500/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top divider accent */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-700/50 to-transparent" />

        <div className="py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/40 bg-emerald-900 text-xl font-extrabold text-amber-400 shadow-inner">
                W
              </div>
              <div className="leading-none">
                <p className="text-base font-extrabold tracking-[0.15em] text-amber-400 uppercase">Waliin</p>
                <p className="text-[9px] font-semibold tracking-[0.3em] text-emerald-300/60 uppercase mt-1">Saccos</p>
              </div>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-emerald-200/60">
              Empowering members through trusted savings, community support, and long-term financial growth across Ethiopia.
            </p>

            <div className="flex items-center gap-2">
              {socials.map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 bg-white/4 text-emerald-300/70 hover:border-amber-400/50 hover:text-amber-400 hover:bg-amber-400/8 transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold tracking-[0.2em] text-amber-400/90 uppercase">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.path}
                    className="text-sm text-emerald-200/60 hover:text-white transition-colors duration-200"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold tracking-[0.2em] text-amber-400/90 uppercase">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.path}
                    className="text-sm text-emerald-200/60 hover:text-white transition-colors duration-200"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold tracking-[0.2em] text-amber-400/90 uppercase">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400/70" />
                <span className="text-sm text-emerald-200/60 leading-relaxed">44, Holeta, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-amber-400/70" />
                <a href="tel:0911915610" className="text-sm text-emerald-200/60 hover:text-white transition-colors duration-200">
                  0911 915 610
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-amber-400/70" />
                <a href="mailto:hailudelesa16@gmail.com" className="text-sm text-emerald-200/60 hover:text-white transition-colors duration-200 break-all">
                  hailudelesa16@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-emerald-200/40">
            © {new Date().getFullYear()} Waliin Saccos. All rights reserved.
          </p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400/70 hover:text-amber-400 transition-colors duration-200"
          >
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
