import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Tag, Newspaper } from "lucide-react";
import API from "../api/axios";
import ScrollReveal from "../components/ui/ScrollReveal";

interface Announcement {
  id: number;
  title: string;
  body: string;
  category: string;
  created_at: string;
}

const categoryConfig: Record<string, { label: string; color: string; dot: string }> = {
  all:       { label: "All",       color: "bg-gray-100 text-gray-700",       dot: "bg-gray-400" },
  general:   { label: "General",   color: "bg-gray-100 text-gray-700",       dot: "bg-gray-400" },
  financial: { label: "Financial", color: "bg-emerald-100 text-emerald-800", dot: "bg-emerald-500" },
  event:     { label: "Event",     color: "bg-amber-100 text-amber-800",     dot: "bg-amber-500" },
  alert:     { label: "Alert",     color: "bg-red-100 text-red-700",         dot: "bg-red-500" },
};

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
  const filtered = activeCategory === "all" ? announcements : announcements.filter((a) => a.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-gray-50/50">
      {/* Hero */}
      <section className="w-full bg-emerald-950 py-20 px-4 text-center relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amber-500/8 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/8 blur-3xl" />
        </div>
        <div className="relative space-y-4">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="inline-block text-xs font-bold tracking-[0.2em] text-amber-400/90 uppercase">
            Stay Informed
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            News & Announcements
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-emerald-100/70 text-base sm:text-lg max-w-xl mx-auto">
            Stay up to date with the latest news, events, and updates from Waliin SACCOS.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        {/* Category filter */}
        {!loading && !error && announcements.length > 0 && (
          <ScrollReveal direction="none">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const cfg = categoryConfig[cat] ?? categoryConfig.general;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
                      activeCategory === cat
                        ? "bg-emerald-950 text-white border-emerald-950 shadow-md"
                        : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${activeCategory === cat ? "bg-amber-400" : cfg.dot}`} />
                    {cfg.label ?? cat}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        )}

        {loading && (
          <div className="flex justify-center py-24">
            <div className="h-10 w-10 rounded-full border-4 border-emerald-800 border-t-transparent animate-spin" />
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center py-24 gap-4 text-center">
            <p className="text-red-600 bg-red-50 border border-red-200 rounded-2xl px-6 py-4 max-w-md text-sm font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="flex flex-col items-center py-24 gap-4 text-center">
            <div className="p-5 bg-gray-100 rounded-full">
              <Newspaper className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium">No announcements yet. Check back soon.</p>
          </div>
        )}

        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => {
              const cfg = categoryConfig[item.category] ?? categoryConfig.general;
              return (
                <ScrollReveal key={item.id} delay={i * 0.06} direction="up">
                  <motion.article
                    layout
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:shadow-gray-100/80 hover:border-gray-200 transition-all duration-300 flex flex-col gap-4 h-full"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${cfg.color}`}>
                        <Tag size={10} />
                        {cfg.label ?? item.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                        <Calendar size={11} />
                        {new Date(item.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-gray-900 leading-snug group-hover:text-emerald-900 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-4 flex-1">{item.body}</p>
                    <div className="pt-2 border-t border-gray-50">
                      <button className="text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors duration-200">
                        Read more →
                      </button>
                    </div>
                  </motion.article>
                </ScrollReveal>
              );
            })}
          </div>
        </AnimatePresence>
      </section>
    </div>
  );
}
