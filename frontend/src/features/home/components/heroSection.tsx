import { Link } from "react-router-dom";
import { motion } from "motion/react";
import banner from "../../../assets/banner.png";
import Container from "../../../components/ui/container";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={banner}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-95"
      />
      <div className="absolute inset-0 bg-yellow-600 mix-blend-multiply brightness-105" />

      <Container className="relative grid min-h-[88vh] py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl"
          >
            Waliin Haa Qussannu
            <br />
            Tokkummaa,
            <br />
            Keenya Haa Cimsinu.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-full text-base text-white/70 sm:text-xl lg:text-2xl leading-relaxed"
          >
            Quusannaa miseensotaan qabamu, liqii haqa qabeessa, fi bu'aa waggaa — maatiiwwan, qoteebulaa, fi daldaltoota xixiqqoo hawaasa keenyaaf kan ijaaran
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/login"
              className="inline-flex h-11 sm:h-14 items-center gap-2 rounded-full bg-white px-5 sm:px-7 text-base sm:text-xl text-yellow-600 font-bold hover:brightness-105"
            >
              Become a member
            </Link>
            <Link
              to="/services"
              className="inline-flex h-11 sm:h-12 items-center rounded-full border border-white/20 px-5 sm:px-7 text-base sm:text-xl text-white hover:bg-white hover:text-yellow-600 hover:brightness-105"
            >
              View products
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
