import { cn } from "./utils";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-bold text-gold",
            light && "text-gold-soft",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl font-bold tracking-tight text-ink",
          light && "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("text-muted leading-relaxed", light && "text-white/70")}>
          {description}
        </p>
      )}
    </div>
  );
}
