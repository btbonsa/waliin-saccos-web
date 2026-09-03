import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../../assets/logo.jpg";
import Container from "../ui/container";

const companyLinks = [
  { name: "About us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Membership", path: "/login" },
  { name: "News", path: "/news" },
];

const resourceLinks = [
  { name: "How to join", path: "/contact" },
  { name: "Savings & loans", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black/95 text-white">
      
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <Link to="/" className="flex w-fit items-center gap-3">
              <img src={logo} alt="" className="h-11 w-11 rounded-full object-cover" />
              <div>
                <p className="text-sm font-bold text-white/50">Waliin SACCO Ltd</p>
                <p className="text-sm text-white/50">Holeta, Ethiopia</p>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              A member-owned savings and credit cooperative providing trusted savings, fair credit, and shared dividends.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-md font-bold text-white uppercase">Explore</h3>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="text-sm text-white/65 hover:text-white">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-md font-bold text-white uppercase">Services</h3>
            <ul className="space-y-3">
              {resourceLinks.map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="text-sm text-white/65 hover:text-white">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-md font-bold text-white uppercase">Visit us</h3>
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                44, Holeta, Ethiopia
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-white/50" />
                <a href="tel:0911915610" className="hover:text-white">0911 915 610</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-white/50" />
                <a href="mailto:hailudelesa16@gmail.com" className="break-all hover:text-white">
                  hailudelesa16@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Waliin SACCO Ltd. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 text-xs font-bold hover:text-yellow-500 transition-all"
          >
            Back to top
          </button>
        </div>
      </Container>
    </footer>
  );
}
