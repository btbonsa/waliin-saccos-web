import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Users, HeartHandshake, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "../features/home/components/heroSection";
import Stats from "../features/home/components/stats";
import ScrollReveal from "../components/ui/ScrollReveal";

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Secure & Transparent",
    desc: "Guaranteed cooperative financial oversight with regular member-led audits and annual dividends.",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    icon: Users,
    title: "Member-Owned",
    desc: "Every member holds equal voting authority and directly shapes our lending priorities.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: HeartHandshake,
    title: "Flexible Credit",
    desc: "Tailored business, agricultural, and personal credit lines with competitive interest rates.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

const partnerBenefits = [
  "Financial literacy programs",
  "Entrepreneur empowerment",
  "Youth transition support",
  "Sustainable financial inclusion",
];

export default function Home() {
  return (
    <div className="bg-gray-50/50">
      <HeroSection />
      <Stats />

      {/* Why Choose Us */}
      <section className="w-full py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-3">
              Why Waliin
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Built Around Member Success
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              Empower your future with transparent cooperative banking designed for your community.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.12} direction="up">
                <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-2xl ${item.bg} mb-5`}>
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-amber-400 to-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="w-full py-20 sm:py-24 bg-gray-50/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left" className="space-y-7">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-3">
                  Partnerships
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                  Partner With Us
                </h2>
              </div>
              <p className="text-base text-gray-500 leading-relaxed">
                We welcome partnerships with foundations, development organizations, CSR programs, philanthropists, and institutions committed to inclusive economic development.
              </p>
              <ul className="space-y-3">
                {partnerBenefits.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3 text-sm font-medium text-gray-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    {b}
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-950 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 hover:bg-emerald-800 transition-all duration-200"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-amber-500/10 blur-2xl" />
                <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-sm space-y-6">
                  <span className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase">
                    Community-Driven Equity
                  </span>
                  <h3 className="text-2xl font-extrabold text-gray-900">Shareholders & Institutions</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Our shareholders represent a strong network of dedicated cooperative members and regional economic partners driving sustainable wealth distribution across Ethiopia.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {[
                      { label: "Member Transparency", value: "100%" },
                      { label: "Annual Dividends", value: "Paid" },
                      { label: "Member Voting", value: "Equal" },
                      { label: "Audit Frequency", value: "Annual" },
                    ].map((item, i) => (
                      <div key={i} className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                        <p className="text-lg font-extrabold text-emerald-800">{item.value}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full py-20 bg-emerald-950 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center space-y-6">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Start Your Financial Journey?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-emerald-200/70 text-base sm:text-lg">
              Join thousands of members already building a better future with Waliin SACCOS.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="flex flex-wrap justify-center gap-4">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 px-8 py-3.5 text-sm font-bold text-emerald-950 shadow-xl shadow-amber-500/25 hover:brightness-105 transition-all duration-200"
            >
              Become a Member <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-all duration-200"
            >
              View Services
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
