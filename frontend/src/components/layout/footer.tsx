import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  X as XIcon,
} from "lucide-react";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-emerald-800/60 bg-emerald-950 text-emerald-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.12),_transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/50 bg-emerald-900/80 text-lg font-bold text-amber-300">
                W
              </div>
              <div className="leading-tight">
                <p className="text-lg font-bold tracking-[0.14em] text-amber-300 uppercase">
                  Waliin
                </p>
                <p className="text-[10px] tracking-[0.22em] text-emerald-100/80 uppercase">
                  Saccos
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-emerald-100/75">
              We help members build stronger financial habits through trusted
              savings, community support, and long-term growth opportunities.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[XIcon].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-emerald-50 transition hover:border-amber-300 hover:text-amber-300"
                  aria-label="Social media link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] text-amber-300 uppercase">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-emerald-100/80">
              <li>
                <a href="#" className="transition hover:text-amber-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-amber-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-amber-300">
                  Membership
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-amber-300">
                  News & Insights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] text-amber-300 uppercase">
              Resources
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-emerald-100/80">
              <li>
                <a href="#" className="transition hover:text-amber-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-amber-300">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-amber-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-amber-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] text-amber-300 uppercase">
              location & contact
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-emerald-100/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-amber-300" />
                <span>44, Holeta</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-300" />
                <span>0911915610</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-300" />
                <span>hailudelesa16@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-emerald-100/70">
              © 2026 Waliin Saccos. All rights reserved.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition hover:text-amber-200"
            >
              Back to top
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
