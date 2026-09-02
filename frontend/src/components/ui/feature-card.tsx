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
    <article
      className={cn(
        "group h-full rounded-2xl border border-line bg-paper p-7 transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(18,36,30,0.06)]",
        className,
      )}
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-forest">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
