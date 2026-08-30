import { motion } from "motion/react";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Users,
} from "lucide-react";

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
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Green gradient orb */}
        <motion.div
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-100/70 blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, 20, -30, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary orb */}
        <motion.div
          className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-green-50 blur-3xl"
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Decorative circles */}
        <motion.div
          className="absolute right-[40%] top-[20%] h-4 w-4 rounded-full bg-emerald-400/40"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[25%] left-[10%] h-3 w-3 rounded-full bg-green-500/30"
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* ================= HERO CONTENT ================= */}

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          
          {/* ================= LEFT ================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Badge */}

            <motion.div variants={itemVariants}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                <ShieldCheck className="h-4 w-4" />

                Trusted Financial Cooperative
              </div>
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={itemVariants}
              className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
            >
              Building financial
              <span className="block text-emerald-600">
                strength together.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl"
            >
              Save with confidence, access affordable financial services,
              and build a stronger future with{" "}
              <span className="font-semibold text-slate-800">
                Waliin SACCOS Ltd.
              </span>
            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                Become a Member

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-sm transition hover:border-emerald-200 hover:text-emerald-600"
              >
                <Play className="h-4 w-4 fill-current" />

                Explore Services
              </motion.button>
            </motion.div>

            {/* Trust indicators */}

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-6"
            >
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-600" />

                <div>
                  <p className="font-bold text-slate-900">10K+</p>
                  <p className="text-xs text-slate-500">Members</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-emerald-600" />

                <div>
                  <p className="font-bold text-slate-900">ETB 50M+</p>
                  <p className="text-xs text-slate-500">Savings</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-600" />

                <div>
                  <p className="font-bold text-slate-900">Growing</p>
                  <p className="text-xs text-slate-500">Together</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT VISUAL ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Floating card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Main dashboard */}

              <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-6 shadow-2xl shadow-emerald-900/10 backdrop-blur-xl">
                
                {/* Dashboard header */}

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Total Savings
                    </p>

                    <h2 className="mt-1 text-3xl font-bold text-slate-900">
                      ETB 45,280
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
                    <Wallet className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>

                {/* Growth */}

                <div className="mt-5 flex items-center gap-2">
                  <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
                    <TrendingUp className="h-4 w-4" />

                    +12.8%
                  </div>

                  <span className="text-sm text-slate-400">
                    this month
                  </span>
                </div>

                {/* Chart */}

                <div className="mt-8">
                  <div className="flex h-40 items-end gap-3">
                    {[35, 48, 42, 65, 58, 75, 68, 90, 82, 100].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            height: 0,
                          }}
                          animate={{
                            height: `${height}%`,
                          }}
                          transition={{
                            duration: 0.8,
                            delay: 0.8 + index * 0.08,
                            ease: "easeOut",
                          }}
                          className="flex-1 rounded-t-lg bg-emerald-500/20"
                        >
                          <div className="h-full w-full rounded-t-lg bg-gradient-to-t from-emerald-600 to-emerald-400 opacity-80" />
                        </motion.div>
                      )
                    )}
                  </div>

                  <div className="mt-3 flex justify-between text-xs text-slate-400">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Aug</span>
                  </div>
                </div>

                {/* Bottom cards */}

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Savings Growth
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-900">
                      +18.4%
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-50 p-4">
                    <p className="text-xs text-emerald-700">
                      Loan Access
                    </p>

                    <p className="mt-1 text-lg font-bold text-emerald-700">
                      Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating notification */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-8 bottom-16 hidden rounded-2xl border border-white/60 bg-white p-4 shadow-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Savings increased
                    </p>

                    <p className="font-bold text-slate-900">
                      + ETB 5,240
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating member card */}

              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 -top-6 hidden rounded-2xl border border-white/60 bg-white p-4 shadow-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    W
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Member status
                    </p>

                    <p className="font-bold text-emerald-600">
                      Active
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;





const savingProducts = [
  {
    name: "Qusannoo Dirqamaa",
    description: "Baasii kan goodhamuu yoomu miseens dhabaticha galakisan ta`a",
    link: "/services#liqi",
    icons: <PiggyBank className=" text-green-900 mb-4 bg-green-100 rounded-full p-1" size={46} />,
  },
  {
    name: "Qusannaa",
    description: "Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa dhibentaa 7 kan kafaluu yoo tau`u ijooleedhaaf moo dhibentaa 10.5 kafalaa.",
    link: "/services#qusan",
  },
  {
    name: "Qusannaa Ijoolee",
    description: "Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa dhibentaa 7 kan kafaluu yoo tau`u ijooleedhaaf moo dhibentaa 10.5 kafalaa.",
    link: "/services#qusan",
  },
  {
    name: "Qusannaa Ijoolee",
    description: "Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa dhibentaa 7 kan kafaluu yoo tau`u ijooleedhaaf moo dhibentaa 10.5 kafalaa.",
    link: "/services#qusan",
  },
  {
    name: "Qusannaa Ijoolee",
    description: "Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa dhibentaa 7 kan kafaluu yoo tau`u ijooleedhaaf moo dhibentaa 10.5 kafalaa.",
    link: "/services#qusan",
  }
]