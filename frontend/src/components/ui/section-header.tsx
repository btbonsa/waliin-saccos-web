import { cn } from "./utils";

export default function SectionHeader({
  title,
  description,
  moreDescription,
  align = "center",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  moreDescription?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-3",
        align === "left" && "mx-auto text-center",
        className,
      )}
    >

      <h1
        className={cn(
          "text-6xl font-bold ",
          light && "text-yellow-600",
        )}
      >
        {title}
      </h1>
      {description && (
        <p className={cn("text-muted leading-relaxed text-xl", light && "text-white/70")}>
          {description}
        </p>
      )}
      {moreDescription && (
        <p className={cn(" text-muted leading-relaxed text-xl", light && "text-white/70")}>
          {moreDescription}
        </p>
      )}
    </div>
  );
}
