import { motion } from "motion/react";
import { Target, Eye, Shield, Users, TrendingUp, Heart } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";

const values = [
  { icon: Shield, title: "Integrity", desc: "We operate with full transparency and accountability to every member.", color: "text-emerald-700", bg: "bg-emerald-50" },
  { icon: Users, title: "Community", desc: "Member-owned and member-driven — every voice shapes our direction.", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: TrendingUp, title: "Growth", desc: "We invest in financial literacy and sustainable economic empowerment.", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Heart, title: "Inclusion", desc: "Accessible financial services for all, regardless of background.", color: "text-rose-600", bg: "bg-rose-50" },
];

const leadership = [
  { name: "Hailu Delesa", role: "Chairman", initials: "HD" },
  { name: "Tigist Bekele", role: "General Manager", initials: "TB" },
  { name: "Abebe Girma", role: "Finance Director", initials: "AG" },
  { name: "Mekdes Alemu", role: "Operations Manager", initials: "MA" },
];

export default function About() {
  return (
    <div className="w-full min-h-screen bg-gray-50/50">
      {/* Hero */}
      <section className="relative h-72 sm:h-88 w-full overflow-hidden bg-emerald-950 flex items-center justify-center">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1.04, 1.08, 1.04], x: [0, -15, 0, 15, 0] }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
        >
          <img
            className="h-full w-full object-cover"
            style={{ filter: "brightness(0.3) saturate(0.7)" }}
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
            alt="Community"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/50 to-transparent" />
        <div className="relative z-10 text-center px-4 space-y-4">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="inline-block text-xs font-bold tracking-[0.2em] text-amber-400/90 uppercase">
            Our Story
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            About Waliin
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-emerald-100/70 text-base sm:text-lg max-w-xl mx-auto">
            A member-owned cooperative committed to inclusive financial growth across Ethiopia.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-3">Purpose</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Mission & Vision</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { icon: Target, color: "text-emerald-700", bg: "bg-emerald-50", title: "Our Mission", text: "To empower members through accessible, transparent, and sustainable cooperative financial services — fostering economic independence and community resilience across Ethiopia." },
              { icon: Eye, color: "text-amber-600", bg: "bg-amber-50", title: "Our Vision", text: "To be the most trusted and impactful savings and credit cooperative in Ethiopia — where every member thrives through shared prosperity and financial dignity." },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.12} direction={i === 0 ? "left" : "right"}>
                <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:shadow-gray-100/80 hover:border-gray-200 transition-all duration-300 space-y-5 h-full">
                  <div className={`inline-flex p-3 rounded-2xl ${card.bg}`}>
                    <card.icon className={`h-6 w-6 ${card.color}`} />
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/80">
        <div className="max-w-7xl mx-auto space-y-14">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-3">What We Stand For</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-base text-gray-500">The principles that guide every decision we make.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="group bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-xl hover:shadow-gray-100/80 hover:border-gray-200 transition-all duration-300 space-y-4 h-full">
                  <div className={`inline-flex p-3 rounded-2xl ${v.bg}`}>
                    <v.icon className={`h-6 w-6 ${v.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-14">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-3">The Team</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Our Leadership</h2>
            <p className="mt-4 text-base text-gray-500">Dedicated professionals steering Waliin SACCOS forward.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="group bg-white rounded-2xl border border-gray-100 p-8 text-center hover:shadow-xl hover:shadow-gray-100/80 hover:border-gray-200 transition-all duration-300 space-y-4 h-full">
                  <div className="mx-auto h-16 w-16 rounded-full bg-emerald-950 flex items-center justify-center text-xl font-extrabold text-amber-400 shadow-lg shadow-emerald-950/20 group-hover:scale-105 transition-transform duration-200">
                    {person.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{person.name}</p>
                    <p className="text-sm text-emerald-700 font-medium mt-0.5">{person.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
