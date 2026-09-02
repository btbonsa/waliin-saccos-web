import { motion } from "motion/react";
import Container from "./container";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-20 sm:py-24">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/80 to-forest-deep" />
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <Container className="relative text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-sm font-bold text-gold-soft"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/70"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
