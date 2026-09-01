import { motion } from "motion/react";

const stats = [
  { value: "10K+", label: "Active Members" },
  { value: "50M+", label: "Total Savings (ETB)" },
  { value: "20M+", label: "Loans Disbursed (ETB)" },
  { value: "15+", label: "Years of Service" },
];

export default function Stats() {
  return (
    <section className="relative -mt-1 bg-white border-y border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y-2 md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center text-center px-4 py-2 first:pt-0 md:first:pt-2"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-500 tracking-tight">
                {stat.value}
              </span>
              <span className="mt-1.5 text-xs sm:text-sm font-semibold text-gray-500 tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
