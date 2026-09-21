import { motion } from "motion/react";
import Container from "../components/ui/container";
import banner from "../assets/banner.png";
import { useLang } from "../context/LanguageContext";

export default function News() {
  const { t } = useLang();

  return (
    <div className="bg-[#f7f5f0]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ height: 360 }}>
        <motion.img
          src={banner}
          alt=""
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 14,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e241d]/95 via-[#0e241d]/55 to-[#0e241d]/25" />
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[#d4a017]" />

        <Container className="relative flex h-full flex-col justify-end pb-14">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af5a]"
          >
            {t("contactEyebrow")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {t("newsTitle")}
          </motion.h1>
        </Container>
      </section>

      {/* ── Content ── */}
    
    </div>
  );
}