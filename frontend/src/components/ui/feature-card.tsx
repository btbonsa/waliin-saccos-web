import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "./utils";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group rounded-3xl bg-white border border-[#e6e0d6] p-6 sm:p-8 cursor-default",
        className,
      )}
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: -6 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-900 group-hover:bg-green-900 group-hover:text-white transition-colors duration-300"
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </motion.div>
      <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </motion.article>
  );
}
