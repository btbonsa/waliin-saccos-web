import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Container from "../components/ui/container";
import banner from "../assets/banner.png";
import { useLang } from "../context/LanguageContext";
import SEO from "../components/seo";
import API from "../api/axios";

interface Announcement {
  id: number;
  title: string;
  body: string;
  category: string;
  created_at: string;
}

export default function News() {
  const { t } = useLang();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await API.get("/announcements");
      setAnnouncements(response.data);
    } catch (error) {
      console.error("Failed to fetch announcements:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f7f5f0]">
      <SEO
        title="News & Announcements"
        description="News and announcements from Waliin SACCO Ltd — updates, events, and notices for members of the savings and credit cooperative in Holeta, Ethiopia."
        path="/news"
      />
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ height: 360 }}>
        <motion.img
          src={banner}
          alt=""
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 14,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e241d]/95 via-[#0e241d]/55 to-[#0e241d]/25" />
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[#d4a017]" />

        <Container className="relative flex h-full flex-col justify-end pb-14">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af5a]"
          >
            {t("newsEyebrow")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {t("newsTitle")}
          </motion.h1>
        </Container>
      </section>

      {/* ── Content ── */}
      <section className="py-16 sm:py-24">
        <Container>
          {loading ? (
            <div className="text-center py-12">
              <p className="text-[#5d6f68]">Loading announcements...</p>
            </div>
          ) : announcements.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#5d6f68]">No announcements available at this time.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {announcements.map((announcement, index) => (
                <motion.div
                  key={announcement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                        style={{ background: "rgba(212,160,23,0.14)", color: "#9a7410" }}
                      >
                        {announcement.category || "General"}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: "#0e241d" }}>
                      {announcement.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#5d6f68" }}>
                      {announcement.body.length > 150 
                        ? `${announcement.body.substring(0, 150)}...` 
                        : announcement.body}
                    </p>
                    <p className="text-xs" style={{ color: "#999" }}>
                      {new Date(announcement.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}