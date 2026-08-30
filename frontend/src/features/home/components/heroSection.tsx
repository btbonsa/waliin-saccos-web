import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import banner from "../../../assets//banner.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f1] text-white">
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1.08, 1.12, 1.08],
          x: [0, -30, 0, 30, 0],
          y: [0, 12, 0, -12, 0],
          opacity: [0.85, 1, 0.9],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-70 grayscale-[0.5]"
          style={{ filter: "grayscale(0.5) brightness(0.7) gradient(to bottom, rgba(0,0,0,0.42), rgba(0,0,0,0.15), rgba(0,0,0,0.08))" }}
          src={banner}
          alt="Hands holding each other"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.42),rgba(0,0,0,0.15),rgba(0,0,0,0.08))]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-3xl pt-8 lg:pt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-2xl font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-5xl pt-2 pl-8 lg:text-6xl lg:leading-[1.05]">
              Grow Together Save
              <span className="mt-2 block ">Better</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80 pl-8">
              Secure your future with trusted savings, insurance, and financial
              growth from Waliin Saccos.
            </p>

            <div className="mt-8 pl-8 ">
              <motion.div
                whileHover={{ scale: 0.99 }}
                whileTap={{ scale: 1.01 }}
              >
                <Button className="text-white font-bold shadow-lg shadow-white/20 hover:yellow-400 border border-green-950/20 rounded-2xl bg-yellow-400 ">
                  Join us<ArrowRight size={12} className="ml-1" />

                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  );
}

export default HeroSection;