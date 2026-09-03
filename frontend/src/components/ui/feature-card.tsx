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
        "group rounded-4xl shadow shadow-lg bg-white p-5 sm:p-7 transition-shadow duration-600 transition-all hover:-translate-y-3",
        className,
      )}
    >
      <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-200 text-green-900 font-bold hover:bg-green-300 transition-all duration-600 group-hover:bg-green-900 group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="mb-2 text-xl font-bold text-ink">{title}</h3>
      <p className="text-md leading-relaxed text-muted">{description}</p>
    </article>
  );
}
