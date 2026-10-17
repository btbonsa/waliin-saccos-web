import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Clock,
  AlertCircle,
  PhoneCall,
  Layers,
  HandCoins,
  ArrowRight,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { getLocalizedService } from "../data/services";
import Container from "../components/ui/container";
import ScrollReveal from "../components/ui/ScrollReveal";
import { useLang } from "../context/LanguageContext";

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang, t } = useLang();
  const service = getLocalizedService(id, lang);
  const [openSection, setOpenSection] = useState(0);

  if (!service) {
    return (
      <div className="flex min-h-[72vh] flex-col items-center justify-center gap-5 px-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#e6e0d6] bg-[#f7f5f0]">
          <AlertCircle className="h-7 w-7 text-[#5d6f68]" strokeWidth={1.75} />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-[#0e241d]">{t("serviceNotFound")}</h2>
          <p className="text-sm text-[#5d6f68]">{t("serviceNotFoundDescription")}</p>
        </div>
        <Link to="/services" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#0e241d] underline-offset-4 hover:underline">
          <ArrowLeft size={15} /> {t("backToServices")}
        </Link>
      </div>
    );
  }

  const Icon = service.icon;
  const toggle = (i: number) => setOpenSection(openSection === i ? -1 : i);

  const sections = [
    ...(service.subTypes
      ? [{
          title: t("typesOfSavings"),
          icon: Layers,
          content: (
            <div className="space-y-3">
              {service.subTypes.map((sub) => (
                <div key={sub.name} className="rounded-2xl border border-[#e6e0d6] bg-[#f7f5f0] p-5" style={{ borderLeft: "3px solid #d4a017" }}>
                  <p className="text-sm font-semibold text-[#0e241d]">{sub.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5d6f68]">{sub.desc}</p>
                </div>
              ))}
            </div>
          ),
        }]
      : []),
    {
      title: t("loanTiers"),
      icon: HandCoins,
      content: (
        <div className="space-y-3">
          {service.tiers.map((tier) => (
            <div key={tier.label} className="flex flex-col gap-3 rounded-2xl border border-[#e6e0d6] bg-[#f7f5f0] p-5 sm:flex-row sm:items-center sm:gap-5">
              <span className="inline-flex h-8 shrink-0 items-center rounded-full bg-[#0e241d] px-3.5 text-xs font-semibold tracking-wide text-white">
                {tier.label}
              </span>
              <div className="min-w-0">
                <p className="text-sm text-[#5d6f68]">{tier.condition}</p>
                <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-[#0e241d]">
                  <CheckCircle2 size={14} className="shrink-0 text-[#d4a017]" />
                  {tier.limit}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: t("loanInformation"),
      icon: Clock,
      content: (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { label: t("interestRate"), value: service.interestRate },
            { label: t("tenure"), value: service.tenure },
            { label: t("requiredSavings"), value: `${service.savingsPercent} ${t("continuous")}` },
          ].map((item) => (
            <div key={item.label} className="overflow-hidden rounded-2xl border border-[#e6e0d6] bg-white text-center">
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#d4a017,#eab308)" }} />
              <div className="p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#5d6f68]">{item.label}</p>
                <p className="text-lg font-bold text-[#0e241d]">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#f7f5f0]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ height: 560 }}>
        {service.image ? (
          <motion.img
            src={service.image}
            alt={service.title}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[#0e241d]" />
        )}

        {/* layered gradient */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0e241d 0%, rgba(14,36,29,0.75) 45%, rgba(14,36,29,0.25) 100%)" }} />

        {/* gold top accent */}
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "linear-gradient(90deg,#d4a017,#eab308,#d4a017)" }} />

        {/* subtle radial glow */}
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%,rgba(212,160,23,0.1) 0%,transparent 70%)" }} />

        <Container className="relative flex h-full flex-col justify-between py-8">
          {/* Back button */}
          <motion.button
            type="button"
            onClick={() => navigate("/services")}
            whileHover={{ x: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={15} /> {t("backToServices")}
          </motion.button>

          {/* Bottom content */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              {/* eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                className="mb-3 text-xs font-bold uppercase tracking-widest"
                style={{ color: "#eab308" }}
              >
                {service.subtitle}
              </motion.p>

              {/* icon + title */}
              <motion.div
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="flex items-center gap-4"
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-lg"
                  style={{ background: "linear-gradient(135deg,#d4a017,#eab308)" }}
                >
                  <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                </div>
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {service.title}
                </h1>
              </motion.div>

              {/* description */}
              <motion.p
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mt-4 text-sm leading-relaxed text-white/60"
              >
                {service.description}
              </motion.p>
            </div>

            {/* quick stat badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="flex shrink-0 gap-3"
            >
              {[
                { label: t("interest"), value: service.interestRate },
                { label: t("tenure"), value: service.tenure },
              ].map((s) => (
                <div
                  key={s.label}
                  className="min-w-[96px] rounded-2xl border px-4 py-3 text-center"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(10px)" }}
                >
                  <p className="text-[10px] uppercase tracking-widest text-white/50">{s.label}</p>
                  <p className="mt-1 text-sm font-bold text-white">{s.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Content ── */}
      <section className="py-14 sm:py-18">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">

          {/* Sidebar */}
          <aside className="space-y-5 lg:col-span-4">
            <ScrollReveal direction="left">
              <div className="overflow-hidden rounded-3xl border border-[#e6e0d6] bg-white shadow-sm">
                <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#d4a017,#eab308)" }} />
                <div className="p-7">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#5d6f68]">
                    {t("aboutThisProduct")}
                  </p>
                  <p className="text-sm leading-relaxed text-[#0e241d]/80">{service.overview}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl p-7 text-white" style={{ background: "#0e241d" }}>
                {/* gold top accent */}
                <div className="absolute inset-x-0 top-0 h-1" style={{ background: "linear-gradient(90deg,#d4a017,#eab308,#d4a017)" }} />
                {/* inner glow */}
                <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%,rgba(212,160,23,0.08) 0%,transparent 70%)" }} />

                <h3 className="relative text-lg font-bold">{t("readyToApply")}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/55">
                  {t("applyDescription")}
                </p>
                <div className="relative mt-6 space-y-3">
                  <Link
                    to="/contact"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                    style={{ background: "linear-gradient(90deg,#d4a017,#eab308)" }}
                  >
                    <PhoneCall size={15} /> {t("contactUs")}
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 text-sm font-bold text-white transition-colors hover:bg-white/10"
                  >
                    {t("becomeMember")} <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </aside>

          {/* Main accordion */}
          <div className="lg:col-span-8">
            <ScrollReveal className="mb-8">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg,#e6e0d6,transparent)" }} />
                <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#d4a017" }}>{t("fullDetails")}</h2>
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg,transparent,#e6e0d6)" }} />
              </div>
              <p className="mt-3 text-sm text-[#5d6f68]">{t("fullDetailsDescription")}</p>
            </ScrollReveal>

            <div className="space-y-4">
              {sections.map((section, i) => {
                const isOpen = openSection === i;
                const SecIcon = section.icon;
                return (
                  <ScrollReveal key={section.title} delay={i * 0.07}>
                    <motion.div
                      className="overflow-hidden rounded-3xl border bg-white"
                      style={{ borderColor: isOpen ? "#d4a017" : "#e6e0d6", boxShadow: isOpen ? "0 8px 32px rgba(14,36,29,0.1)" : "0 2px 8px rgba(14,36,29,0.04)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* gold top accent when open */}
                      {isOpen && (
                        <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg,#d4a017,#eab308,#d4a017)" }} />
                      )}

                      <button
                        type="button"
                        onClick={() => toggle(i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
                        style={{ background: isOpen ? "rgba(14,36,29,0.03)" : "transparent" }}
                      >
                        <span className="flex items-center gap-4">
                          <motion.span
                            animate={{ background: isOpen ? "#0e241d" : "#f7f5f0" }}
                            transition={{ duration: 0.25 }}
                            className="flex h-10 w-10 items-center justify-center rounded-2xl"
                            style={{ background: isOpen ? "#0e241d" : "#f7f5f0", border: `1px solid ${isOpen ? "#d4a017" : "#e6e0d6"}` }}
                          >
                            <SecIcon className="h-4 w-4" style={{ color: isOpen ? "#eab308" : "#0e241d" }} />
                          </motion.span>
                          <span className="text-sm font-bold text-[#0e241d]">{section.title}</span>
                        </span>
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.28 }}>
                          <ChevronDown className="h-4 w-4" style={{ color: isOpen ? "#d4a017" : "#9ab0a8" }} />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-[#e6e0d6] px-6 pb-6 pt-5">
                              {section.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
