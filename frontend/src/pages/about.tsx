import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Target, Eye, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Container from "../components/ui/container";
import ScrollReveal from "../components/ui/ScrollReveal";
import hailuImage from "../assets/hailu.png";
import BirhanuImage from "../assets/Birahanu.png";
import members1Image from "../assets/members.png";
import members2Image from "../assets/members1.png";
import members3Image from "../assets/members2.png";
import members4Image from "../assets/members0.png"
import members5Image from "../assets/member1.png"
import { useLang } from "../context/LanguageContext";
import bannerImage from "../assets/banner.png";

const SECTIONS = ["mission", "values", "leadership", "founding-members"] as const;

const memberPhotos = [members1Image, members2Image, members3Image, members4Image,  members5Image];

const leadership = [
  { name: "Hailu Delesa", roleKey: "leadershipRole1" as const, image: hailuImage },
  { name: "Birahanu Tolesa", roleKey: "leadershipRole2" as const, image: BirhanuImage },
];

export default function About() {
  const { t } = useLang();
  const { hash } = useLocation();
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  const coreValues = [
    { value: t("coreValueEquality"), icon: "⚖️", desc: t("coreValueEqualityDesc") },
    { value: t("coreValueSolidarity"), icon: "🤝", desc: t("coreValueSolidarityDesc") },
    { value: t("coreValueSelfHelp"), icon: "💪", desc: t("coreValueSelfHelpDesc") },
    { value: t("coreValueSelfResponsibility"), icon: "🎯", desc: t("coreValueSelfResponsibilityDesc") },
    { value: t("coreValueDemocracy"), icon: "🗳️", desc: t("coreValueDemocracyDesc") },
  ];

  const ethicalValues = [
    { value: t("ethicalHonesty"), icon: "🤝" },
    { value: t("ethicalTransparency"), icon: "🔍" },
    { value: t("ethicalAccountability"), icon: "⚖️" },
    { value: t("ethicalParticipation"), icon: "🗳️" },
    { value: t("ethicalSocialResponsibility"), icon: "🌱" },
    { value: t("ethicalConsideration"), icon: "💛" },
  ];

  const missionVision = {
    vision: { icon: Target, title: t("missionVisionVisionTitle"), description: t("missionVisionVisionDescription") },
    mission: { icon: Eye, title: t("missionVisionMissionTitle"), description: t("missionVisionMissionDescription") },
  };

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }, [hash]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: 520 }}>
        <motion.img
          src={bannerImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0e241d99 0%, #0e241dcc 60%, #0e241d 100%)" }} />
        {/* gold top bar */}
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "linear-gradient(90deg,#d4a017,#eab308,#d4a017)" }} />

        <Container className="relative flex flex-col items-center py-32 text-center sm:py-40">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#eab308" }}
          >
            {t("ourStory")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t("aboutTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed sm:text-base"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {t("aboutDescription")}
          </motion.p>

          {/* section jump pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s === "values" ? "values" : s)}
                className="rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "rgba(212,160,23,0.15)", color: "#eab308", border: "1px solid rgba(212,160,23,0.3)" }}
              >
                {s === "mission" ? t("missionAndVisionTitle") : s === "values" ? t("whatWeStandFor") : s === "leadership" ? t("leadershipTitle") : t("foundingMembersTitle")}
              </button>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────────── */}
      <section id="mission" className="py-20 sm:py-24 lg:py-28" style={{ background: "#f7f5f0" }}>
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(14,36,29,0.08)", color: "#0e241d" }}>
                {t("purpose")}
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl" style={{ color: "#0e241d" }}>
                {t("missionAndVisionTitle")}
              </h2>
            </div>
          </ScrollReveal>

          {/* Tab switcher */}
          <ScrollReveal delay={0.1}>
            <div className="mx-auto mt-10 max-w-2xl">
              <div className="flex rounded-2xl p-1" style={{ background: "#e6e0d6" }}>
                {(["vision", "mission"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="relative flex-1 rounded-xl py-3 text-sm font-semibold transition-colors duration-200"
                    style={{ color: activeTab === tab ? "#0e241d" : "#5d6f68" }}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="tab-bg"
                        className="absolute inset-0 rounded-xl"
                        style={{ background: "#fff" }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {tab === "vision"
                        ? <Target className="h-4 w-4" />
                        : <Eye className="h-4 w-4" />}
                      {missionVision[tab].title}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 rounded-3xl p-8 sm:p-10"
                  style={{ background: "#fff", border: "1px solid #e6e0d6" }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "#0e241d" }}>
                    {activeTab === "vision"
                      ? <Target className="h-5 w-5" style={{ color: "#eab308" }} />
                      : <Eye className="h-5 w-5" style={{ color: "#eab308" }} />}
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "#0e241d" }}>{missionVision[activeTab].title}</h3>
                  <p className="mt-3 leading-relaxed" style={{ color: "#5d6f68" }}>{missionVision[activeTab].description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Core & Ethical Values ────────────────────────────────── */}
      <section id="values" className="py-20 sm:py-24 lg:py-28" style={{ background: "#fff" }}>
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(212,160,23,0.12)", color: "#d4a017" }}>
                {t("whatWeStandFor")}
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl" style={{ color: "#0e241d" }}>
                {t("coreEthicalValuesTitle")}
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed" style={{ color: "#5d6f68" }}>
                {t("coreValuesDescription")}
              </p>
            </div>
          </ScrollReveal>

          {/* Core Values — premium accordion */}
          <div className="mt-14">
            <ScrollReveal delay={0.05}>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg,#e6e0d6,transparent)" }} />
                <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#d4a017" }}>{t("ourCoreValues")}</h3>
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg,transparent,#e6e0d6)" }} />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((v, i) => {
                const open = expandedValue === v.value;
                return (
                  <ScrollReveal key={v.value} delay={i * 0.07}>
                    <motion.button
                      onClick={() => setExpandedValue(open ? null : v.value)}
                      whileHover={{ y: -4, boxShadow: open ? "0 20px 48px rgba(14,36,29,0.28)" : "0 8px 24px rgba(14,36,29,0.08)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="relative w-full overflow-hidden rounded-3xl p-6 text-left"
                      style={{
                        background: open ? "#0e241d" : "#fff",
                        border: `1px solid ${open ? "#d4a017" : "#e6e0d6"}`,
                        boxShadow: open ? "0 12px 40px rgba(14,36,29,0.22)" : "0 2px 8px rgba(14,36,29,0.04)",
                      }}
                    >
                      {/* gold top accent — only when open */}
                      {open && (
                        <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: "linear-gradient(90deg,#d4a017,#eab308,#d4a017)" }} />
                      )}

                      {/* inner glow when open */}
                      {open && (
                        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%,rgba(212,160,23,0.07) 0%,transparent 70%)" }} />
                      )}

                      <div className="relative flex items-start justify-between gap-3">
                        <div className="flex items-center gap-4">
                          {/* icon badge */}
                          <div
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xl transition-colors duration-300"
                            style={{
                              background: open ? "rgba(212,160,23,0.15)" : "#f7f5f0",
                              border: `1px solid ${open ? "rgba(212,160,23,0.3)" : "#e6e0d6"}`,
                            }}
                          >
                            {v.icon}
                          </div>
                          <span
                            className="text-sm font-bold leading-snug"
                            style={{ color: open ? "#eab308" : "#0e241d" }}
                          >
                            {v.value}
                          </span>
                        </div>

                        <motion.div
                          animate={{ rotate: open ? 180 : 0 }}
                          transition={{ duration: 0.28 }}
                          className="mt-0.5 shrink-0"
                        >
                          <ChevronDown
                            className="h-4 w-4"
                            style={{ color: open ? "#eab308" : "#9ab0a8" }}
                          />
                        </motion.div>
                      </div>

                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 border-t pt-4" style={{ borderColor: "rgba(212,160,23,0.2)" }}>
                              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                                {v.desc}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Ethical Values — animated pill grid */}
          <div className="mt-14">
            <ScrollReveal delay={0.05}>
              <h3 className="mb-5 text-lg font-bold" style={{ color: "#0e241d" }}>{t("ethicalValues")}</h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {ethicalValues.map((v, i) => (
                <ScrollReveal key={v.value} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(212,160,23,0.2)" }}
                    transition={{ type: "spring", stiffness: 320, damping: 18 }}
                    className="group flex cursor-default flex-col items-center gap-2 rounded-2xl px-3 py-5 text-center"
                    style={{ background: "#f7f5f0", border: "1px solid #e6e0d6" }}
                  >
                    <motion.span
                      className="text-2xl"
                      whileHover={{ scale: 1.25, rotate: -8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    >
                      {v.icon}
                    </motion.span>
                    <span className="text-xs font-bold leading-snug" style={{ color: "#0e241d" }}>
                      {v.value}
                    </span>
                    {/* gold underline on hover */}
                    <motion.div
                      className="h-0.5 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: 24 }}
                      style={{ background: "#d4a017" }}
                    />
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Leadership ───────────────────────────────────────────── */}
      <section id="leadership" className="relative overflow-hidden py-20 sm:py-24 lg:py-32" >
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%,rgba(212,160,23,0.08) 0%,transparent 70%)" }} />

        <Container>
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(212,160,23,0.15)", color: "#eab308" }}>
                {t("leadershipTitle")}
              </span>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed" style={{ color: "#9ab0a8" }}>
                {t("leadershipDescription")}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 flex flex-wrap items-stretch justify-center gap-10 sm:mt-16">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.12} direction="up">
                <motion.div
                  whileHover={{ y: -10, boxShadow: "0 32px 64px rgba(0,0,0,0.35)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group relative flex h-full w-80 flex-col items-center overflow-hidden rounded-3xl pb-10 pt-12 text-center"
                  style={{ background: "linear-gradient(160deg,rgba(255,255,255,0.07) 0%,rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(212,160,23,0.22)", backdropFilter: "blur(12px)" }}
                >
                  {/* gold top accent */}
                  <div className="absolute inset-x-0 top-0 h-1" style={{ background: "linear-gradient(90deg,#d4a017,#eab308,#d4a017)" }} />

                  {/* subtle inner glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%,rgba(212,160,23,0.07) 0%,transparent 70%)" }} />

                  {/* avatar */}
                  <motion.div
                    className="relative h-36 w-36 rounded-full p-[3px]"
                    style={{ background: "linear-gradient(135deg,#d4a017,#eab308)" }}
                    whileHover={{ boxShadow: "0 0 0 8px rgba(212,160,23,0.2)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-full w-full overflow-hidden rounded-full">
                      <motion.img
                        src={person.image}
                        alt={person.name}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.45 }}
                      />
                    </div>
                  </motion.div>

                  {/* name */}
                  <p className="mt-6 text-lg font-bold tracking-wide" style={{ color: "black" }}>
                    {person.name}
                  </p>

                  {/* divider */}
                  <div className="my-3 h-px w-12" style={{ background: "rgba(212,160,23,0.4)" }} />

                  {/* role badge */}
                  <span className="rounded-full bg-amber-400/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-900 border border-amber-400/20">
                    {t(person.roleKey)}
                  </span>

                  {/* animated bottom bar */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: 80 }}
                    transition={{ duration: 0.35 }}
                    style={{ background: "linear-gradient(90deg,#d4a017,#eab308)" }}
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
      {/* ── Founding Members ─────────────────────────────────────── */}
      <section id="founding-members" className="py-20 sm:py-24 lg:py-28" style={{ background: "#f7f5f0" }}>
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest"
                style={{ background: "rgba(14,36,29,0.08)", color: "#0e241d" }}
              >
                {t("foundingMembersEyebrow")}
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl" style={{ color: "#0e241d" }}>
                {t("foundingMembersTitle")}
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed" style={{ color: "#5d6f68" }}>
                {t("foundingMembersDescription")}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {memberPhotos.slice(0, 4).map((src, i) => (
              <ScrollReveal key={i} delay={i * 0.12} direction="up">
                <motion.div
                  className="group relative overflow-hidden rounded-3xl"
                  style={{
                    height: 420,
                    boxShadow: "0 4px 24px rgba(14,36,29,0.10)",
                  }}
                  whileHover={{ y: -8, boxShadow: "0 24px 56px rgba(14,36,29,0.22)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  {/* photo */}
                  <motion.img
                    src={src}
                    alt={`Founding member ${i + 1}`}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                  />
                  {/* gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(14,36,29,0.72) 0%, rgba(14,36,29,0.18) 50%, transparent 100%)" }}
                  />
                  {/* gold top accent line */}
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ background: "linear-gradient(90deg,#d4a017,#eab308,#d4a017)" }}
                  />
                  {/* bottom label */}
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span
                        className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                        style={{ background: "rgba(212,160,23,0.18)", color: "#eab308", backdropFilter: "blur(6px)" }}
                      >
                        {t("foundingMemberBadge")}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5">
            {memberPhotos.slice(4).map((src, i) => (
              <ScrollReveal key={i} delay={i * 0.12} direction="up">
                <motion.div
                  className="group grid overflow-hidden rounded-3xl bg-white md:grid-cols-[minmax(0,280px)_1fr]"
                  style={{ boxShadow: "0 4px 24px rgba(14,36,29,0.10)" }}
                  whileHover={{ y: -6, boxShadow: "0 24px 56px rgba(14,36,29,0.18)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  <div className="relative h-72 overflow-hidden md:h-64">
                    <motion.img
                      src={src}
                      alt="Committee"
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.07 }}
                      transition={{ duration: 0.55, ease: "easeOut" }}
                    />
                    <div
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ background: "linear-gradient(90deg,#d4a017,#eab308,#d4a017)" }}
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <span
                      className="w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                      style={{ background: "rgba(212,160,23,0.14)", color: "#9a7410" }}
                    >
                      {t("committeeBadge")}
                    </span>
                    <h3 className="mt-4 text-xl font-bold" style={{ color: "#0e241d" }}>
                      {t("committeeTitle")}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: "#5d6f68" }}>
                      {t("committeeDescription")}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
