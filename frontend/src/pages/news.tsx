import { useEffect, useState } from "react";
import { Calendar, Tag, Newspaper } from "lucide-react";
import API from "../api/axios";
import PageHero from "../components/ui/page-hero";
import Container from "../components/ui/container";
import ScrollReveal from "../components/ui/ScrollReveal";

interface Announcement {
  id: number;
  title: string;
  body: string;
  category: string;
  created_at: string;
}

const categoryConfig: Record<string, { label: string; color: string }> = {
  all: { label: "All", color: "bg-[#f5f3ef] text-[#000]" },
  general: { label: "General", color: "bg-[#f5f3ef] text-[#000]" },
  financial: { label: "Financial", color: "bg-emerald-50 text-emerald-800" },
  event: { label: "Event", color: "bg-amber-50 text-amber-800" },
  alert: { label: "Alert", color: "bg-red-50 text-red-700" },
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
    <div>
      <PageHero
        eyebrow="Stay informed"
        title="News and announcements"
        description="Updates, events, and notices from Waliin SACCO Ltd."
      />

      <section className="bg-[#fffcf8] py-16">
        <Container className="space-y-10">
          {!loading && !error && announcements.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors ${
                    activeCategory === cat
                      ? "border-[#0e241d] bg-[#0e241d] text-white"
                      : "border-[#e6e0d6] bg-white text-[#5d6f68] hover:text-[#000]"
                  }`}
                >
                  {categoryConfig[cat]?.label ?? cat}
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div className="flex justify-center py-24">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#0e241d] border-t-transparent" />
            </div>
          )}

          {error && (
            <p className="mx-auto max-w-md rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-center text-sm text-red-700">
              {error}
            </p>
          )}

          {!loading && !error && filtered.length === 0 && (
            <div className="flex flex-col items-center gap-4 py-24 text-center">
              <Newspaper className="h-8 w-8 text-[#5d6f68]" />
              <p className="font-bold text-[#5d6f68]">No announcements yet. Check back soon.</p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => {
              const cfg = categoryConfig[item.category] ?? categoryConfig.general;
              return (
                <ScrollReveal key={item.id} delay={i * 0.05}>
                  <article className="flex h-full flex-col gap-4 rounded-2xl border border-[#e6e0d6] bg-white p-6 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${cfg.color}`}>
                        <Tag size={10} />
                        {cfg.label ?? item.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#5d6f68]">
                        <Calendar size={11} />
                        {new Date(item.created_at).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-base font-bold leading-snug text-[#000]">{item.title}</h3>
                    <p className="line-clamp-4 flex-1 text-sm leading-relaxed text-[#5d6f68]">{item.body}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
