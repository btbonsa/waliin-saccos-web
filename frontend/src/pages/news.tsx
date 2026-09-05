import { useEffect, useState } from "react";
import { Calendar, ArrowRight, Newspaper, Tag } from "lucide-react";
import { motion } from "motion/react";
import API from "../api/axios";
import Container from "../components/ui/container";
import ScrollReveal from "../components/ui/ScrollReveal";
import banner from "../assets/banner.png";
import banner1 from "../assets/banner1.png";

interface Announcement {
  id: number;
  title: string;
  body: string;
  category: string;
  created_at: string;
  image?: string;
}

const CATEGORY: Record<string, { label: string; bg: string; text: string }> = {
  general:   { label: "General",   bg: "#f7f5f0", text: "#5d6f68" },
  financial: { label: "Financial", bg: "#ecfdf5", text: "#065f46" },
  event:     { label: "Event",     bg: "#fffbeb", text: "#92400e" },
  alert:     { label: "Alert",     bg: "#fef2f2", text: "#991b1b" },
};

const PLACEHOLDER_IMAGES = [banner, banner1, banner, banner1, banner, banner1];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/* ── Skeleton card ── */
function SkeletonCard({ featured = false }: { featured?: boolean }) {
  return (
    <div className={`animate-pulse rounded-2xl overflow-hidden bg-white border border-[#e6e0d6] ${featured ? "md:col-span-2" : ""}`}>
      <div className={`bg-[#e6e0d6] ${featured ? "h-72" : "h-48"}`} />
      <div className="p-6 space-y-3">
        <div className="flex gap-2">
          <div className="h-5 w-16 rounded-full bg-[#e6e0d6]" />
          <div className="h-5 w-20 rounded-full bg-[#e6e0d6]" />
        </div>
        <div className="h-5 w-3/4 rounded bg-[#e6e0d6]" />
        <div className="h-4 w-full rounded bg-[#e6e0d6]" />
        <div className="h-4 w-5/6 rounded bg-[#e6e0d6]" />
      </div>
    </div>
  );
}

/* ── News card ── */
function NewsCard({
  item,
  index,
  featured = false,
}: {
  item: Announcement;
  index: number;
  featured?: boolean;
}) {
  const cfg = CATEGORY[item.category] ?? CATEGORY.general;
  const img = item.image ?? PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length];

  return (
    <ScrollReveal delay={index * 0.06}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className={`group flex flex-col overflow-hidden rounded-2xl border border-[#e6e0d6] bg-white cursor-pointer h-full ${
          featured ? "md:flex-row" : ""
        }`}
      >
        {/* Image */}
        <div className={`relative overflow-hidden shrink-0 ${featured ? "md:w-1/2 h-56 md:h-auto" : "h-48"}`}>
          <img
            src={img}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
          {/* Gold top accent */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-[#d4a017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          {/* Category badge over image */}
          <span
            className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold backdrop-blur-sm"
            style={{ background: cfg.bg, color: cfg.text }}
          >
            <Tag size={9} />
            {cfg.label}
          </span>
        </div>

        {/* Body */}
        <div className={`flex flex-col flex-1 p-6 ${featured ? "justify-center" : ""}`}>
          {/* Date */}
          <div className="flex items-center gap-1.5 text-xs text-[#5d6f68] mb-3">
            <Calendar size={11} />
            {formatDate(item.created_at)}
          </div>

          {/* Title */}
          <h3
            className={`font-bold leading-snug text-[#0e241d] group-hover:text-[#16382e] transition-colors ${
              featured ? "text-xl sm:text-2xl" : "text-base"
            }`}
          >
            {item.title}
          </h3>

          {/* Excerpt */}
          <p className={`mt-2 flex-1 leading-relaxed text-[#5d6f68] ${featured ? "text-sm line-clamp-4" : "text-sm line-clamp-3"}`}>
            {item.body}
          </p>

          {/* Read more */}
          <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-[#d4a017] group-hover:gap-2.5 transition-all duration-200">
            Read more <ArrowRight size={12} />
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  );
}

export default function News() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    API.get("/announcements")
      .then((res: { data: Announcement[] }) => setAnnouncements(res.data))
      .catch(() => setError("Failed to load announcements."))
      .finally(() => setLoading(false));
  }, []);

  const categories = ["all", ...Array.from(new Set(announcements.map((a) => a.category)))];
  const filtered =
    activeCategory === "all" ? announcements : announcements.filter((a) => a.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <div className="bg-[#f7f5f0]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ height: 380 }}>
        <motion.img
          src={banner}
          alt=""
          initial={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e241d]/95 via-[#0e241d]/60 to-[#0e241d]/30" />
        <div className="absolute top-0 inset-x-0 h-[3px] bg-[#d4a017]" />

        <Container className="relative flex h-full flex-col justify-end pb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-xs font-bold uppercase tracking-widest text-[#d4af5a]"
          >
            Stay informed
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 }}
            className="text-3xl sm:text-5xl font-bold text-white leading-tight"
          >
            News & Announcements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="mt-3 max-w-lg text-sm leading-relaxed text-white/60"
          >
            Updates, events, and notices from Waliin SACCO Ltd.
          </motion.p>
        </Container>
      </section>

      {/* ── Content ── */}
      <section className="py-16 sm:py-24">
        <Container className="space-y-10">

          {/* Category filter */}
          {!loading && !error && announcements.length > 0 && (
            <ScrollReveal>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors ${
                      activeCategory === cat
                        ? "border-[#0e241d] bg-[#0e241d] text-white"
                        : "border-[#e6e0d6] bg-white text-[#5d6f68] hover:border-[#0e241d] hover:text-[#0e241d]"
                    }`}
                  >
                    {CATEGORY[cat]?.label ?? (cat === "all" ? "All" : cat)}
                    {cat !== "all" && (
                      <span className="ml-1.5 opacity-60">
                        {announcements.filter((a) => a.category === cat).length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Loading skeletons */}
          {loading && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SkeletonCard featured />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="flex flex-col items-center gap-4 py-24 text-center">
              <p className="rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && filtered.length === 0 && (
            <div className="flex flex-col items-center gap-4 py-24 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border border-[#e6e0d6]">
                <Newspaper className="h-7 w-7 text-[#5d6f68]" />
              </div>
              <p className="font-bold text-[#5d6f68]">No announcements yet. Check back soon.</p>
            </div>
          )}

          {/* Cards grid */}
          {!loading && !error && filtered.length > 0 && (
            <div className="space-y-6">
              {/* Featured card — full width */}
              <NewsCard item={featured} index={0} featured />

              {/* Rest — 3-col grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((item, i) => (
                    <NewsCard key={item.id} item={item} index={i + 1} />
                  ))}
                </div>
              )}
            </div>
          )}

        </Container>
      </section>
    </div>
  );
}
