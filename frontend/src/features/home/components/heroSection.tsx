import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import banner from "../../../assets/banner.png";

export default function HeroSection() {
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-emerald-950">
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1.04, 1.08, 1.04], x: [0, -18, 0, 18, 0], y: [0, 10, 0, -10, 0] }}
        transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
      >
        <img
          src={banner}
          alt=""
          className="h-full w-full object-cover"
          style={{ filter: "brightness(0.35) saturate(0.8)" }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
      <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-amber-500/8 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold tracking-widest text-amber-400 uppercase backdrop-blur-sm">
              <Sparkles size={12} />
              Trusted Cooperative Since 2009
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white"
          >
            Grow Together,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Save Better
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.2 }}
            className="text-lg sm:text-xl text-emerald-100/70 leading-relaxed max-w-lg"
          >
            Secure your future with trusted savings, flexible credit, and community-driven financial growth from Waliin Saccos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 px-7 py-3.5 text-sm font-bold text-emerald-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:brightness-105 transition-all duration-200"
            >
              Join Us Today
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/30 transition-all duration-200"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50/50 to-transparent" />
    </section>
  );
}
