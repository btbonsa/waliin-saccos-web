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
    <section className="relative overflow-hidden bg-yellow-500 py-20 sm:py-24 h-150">
      {image && (
        <motion.img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
      )}
      <div className="absolute inset-0 bg-yellow-600 mix-blend-multiply brightness-105" />

      <Container className="relative text-center flex flex-col items-center justify-center h-full">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-md text-gray-100 tracking-widest uppercase"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-5xl text-7xl font-bold tracking-tight text-white"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-base text-xl text-white/70"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}