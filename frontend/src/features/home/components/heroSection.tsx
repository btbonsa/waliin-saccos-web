import { Link } from "react-router-dom";
import { motion } from "motion/react";
import banner from "../../../assets/banner.png";
import Container from "../../../components/ui/container";
import { useLang } from "../../../context/LanguageContext";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background image with subtle Ken Burns zoom */}
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
          {/* Eyebrow label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#d4af5a]"
          >
            {t("est2024")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t("headline").split(" ").slice(0, -1).join(" ")} {" "}
            <span className="text-[#d4af5a]">{t("headline").split(" ").slice(-1)[0]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/65 sm:text-lg leading-relaxed"
          >
            {t("tagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <Link
              to="/login"
              className="inline-flex h-12 items-center rounded-full bg-[#d4a017] px-7 text-sm font-bold text-white tracking-wide hover:bg-[#d4af5a] transition-colors"
            >
              {t("becomeMember")}
            </Link>
            <Link
              to="/services"
              className="inline-flex h-12 items-center rounded-full border border-white/25 px-7 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              {t("viewProducts")}
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
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
