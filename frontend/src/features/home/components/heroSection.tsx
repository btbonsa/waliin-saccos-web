import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import banner from "../../../assets/banner.png";
import Container from "../../../components/ui/container";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-forest-deep">
      <img
        src={banner}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/85 to-forest-deep/40" />

      <Container className="relative grid min-h-[78vh] items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="max-w-xl space-y-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold text-gold-soft"
          >
            Waliin SACCO Ltd · Holeta
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Save together.
            <br />
            Grow with confidence.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-md text-lg leading-relaxed text-white/70"
          >
            Member-owned savings, fair loans, and annual dividends — built for families, farmers, and small businesses in our community.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/login"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-7 text-sm font-bold text-forest-deep hover:brightness-105"
            >
              Become a member
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex h-12 items-center rounded-full border border-white/20 px-7 text-sm font-bold text-white hover:bg-white/10"
            >
              View products
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="rounded-3xl border border-white/10 bg-white/8 p-8 backdrop-blur-md">
            <p className="text-sm font-bold text-gold-soft">Member snapshot</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { label: "Share capital", value: "Equal vote" },
                { label: "Mandatory save", value: "ETB 500 / mo" },
                { label: "Adult interest", value: "7%" },
                { label: "Child savings", value: "10.5%" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/8 p-4">
                  <p className="text-lg font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-xs text-white/55">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
