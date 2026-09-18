import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import banner from "../../../assets/banner.png";
import Container from "../../../components/ui/container";
import { useLang } from "../../../context/LanguageContext";

const cycleWords = ["Guddina", "Hormaata", "Badhaadhinaa"];

export default function HeroSection() {
  const { t } = useLang();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % cycleWords.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background Ken Burns */}
      <motion.img
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        src={banner}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e241d]/60 via-[#0e241d]/70 to-[#0e241d]/90" />

      <Container className="relative flex flex-col justify-center min-h-screen py-24">
        <div className="max-w-2xl space-y-6">

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#d4af5a]"
          >
            {t("est2026")}
          </motion.span>

          {/* Headline with cycling word */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Waliin Madda{" "}
            <span className="relative inline-block overflow-hidden align-bottom h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={cycleWords[wordIndex]}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-[#d4af5a]"
                >
                  {cycleWords[wordIndex]}!
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/65 sm:text-lg leading-relaxed"
          >
            {t("tagline")}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/login"
                className="inline-flex h-12 items-center rounded-full bg-[#d4a017] px-7 text-sm font-bold text-white tracking-wide hover:bg-[#d4af5a] transition-colors"
              >
                {t("becomeMember")}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/services"
                className="inline-flex h-12 items-center rounded-full border border-white/25 px-7 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                {t("viewProducts")}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating stats badge */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 200, damping: 20 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3"
        >
          {[
            { value: "250+", label: "Members" },
            { value: "5M+",  label: "ETB Saved" },
            { value: "7%",   label: "Interest" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.06, x: -4 }}
              className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-5 py-3 text-center cursor-default"
            >
              <p className="text-xl font-bold text-[#d4af5a]">{s.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-white/60">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-[10px] tracking-widest uppercase text-white/40">{t("scroll")}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </Container>
    </section>
  );
}
