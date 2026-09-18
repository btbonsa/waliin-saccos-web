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
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f7f5f0] border border-[#e6e0d6]">
          <AlertCircle className="h-7 w-7 text-[#5d6f68]" strokeWidth={1.75} />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-[#0e241d]">{t("serviceNotFound")}</h2>
          <p className="text-sm text-[#5d6f68]">
            {t("serviceNotFoundDescription")}
          </p>
        </div>
        <Link
          to="/services"
          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#0e241d] hover:underline underline-offset-4"
        >
          <ArrowLeft size={15} /> {t("backToServices")}
        </Link>
      </div>
    );
  }

  const Icon = service.icon;
  const toggle = (i: number) => setOpenSection(openSection === i ? -1 : i);

  const sections = [
    ...(service.subTypes
      ? [
          {
            title: t("typesOfSavings"),
            icon: Layers,
            content: (
              <div className="space-y-3">
                {service.subTypes.map((sub) => (
                  <div key={sub.name} className="rounded-xl border border-[#e6e0d6] bg-white p-5">
                    <p className="text-sm font-semibold text-[#0e241d]">{sub.name}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#5d6f68]">{sub.desc}</p>
                  </div>
                ))}
              </div>
            ),
          },
        ]
      : []),
    {
      title: t("loanTiers"),
      icon: HandCoins,
      content: (
        <div className="space-y-3">
          {service.tiers.map((tier) => (
            <div
              key={tier.label}
              className="flex flex-col gap-3 rounded-xl border border-[#e6e0d6] bg-white p-5 sm:flex-row sm:items-center sm:gap-5"
            >
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
            <div key={item.label} className="rounded-xl border border-[#e6e0d6] bg-white p-5 text-center">
              <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-[#5d6f68]">
                {item.label}
              </p>
              <p className="text-base font-bold text-[#0e241d]">{item.value}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#f7f5f0]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ height: 480 }}>
        {/* Image with Ken Burns */}
        {service.image ? (
          <motion.img
            src={service.image}
            alt={service.title}
            initial={{ scale: 1 }}
            animate={{ scale: 1.07 }}
            transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[#0e241d]" />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e241d]/95 via-[#0e241d]/60 to-[#0e241d]/30" />

        {/* Gold top accent */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-[#d4a017]" />

        <Container className="relative flex h-full flex-col justify-between py-8">
          {/* Back button */}
          <button
            type="button"
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors w-fit"
          >
            <ArrowLeft size={15} /> {t("backToServices")}
          </button>

          {/* Bottom content */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-3 text-xs font-bold uppercase tracking-widest text-[#d4af5a]"
              >
                {service.subtitle}
              </motion.p>

              {/* Icon + Title */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 }}
                className="flex items-center gap-4"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#d4a017] shadow-lg">
                  <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {service.title}
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 }}
                className="mt-3 max-w-xl text-sm leading-relaxed text-white/60"
              >
                {service.description}
              </motion.p>
            </div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-3 shrink-0"
            >
              {[
                { label: t("interest"), value: service.interestRate },
                { label: t("tenure"), value: service.tenure },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-3 text-center min-w-[90px]"
                >
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">{s.label}</p>
                  <p className="mt-0.5 text-sm font-bold text-white">{s.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Content ── */}
      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">

          {/* Sidebar */}
          <aside className="space-y-5 lg:col-span-4">
            <ScrollReveal direction="left">
              <div className="rounded-2xl border border-[#e6e0d6] bg-white p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-[#5d6f68] mb-4">
                  {t("aboutThisProduct")}
                </p>
                <p className="text-sm leading-relaxed text-[#0e241d]/80">{service.overview}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.08}>
              <div className="rounded-2xl bg-[#0e241d] p-7 text-white">
                <h3 className="text-lg font-bold">{t("readyToApply")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {t("applyDescription")}
                </p>
                <div className="mt-6 space-y-3">
                  <Link
                    to="/contact"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#d4a017] text-sm font-bold text-white hover:bg-[#d4af5a] transition-colors"
                  >
                    <PhoneCall size={15} /> {t("contactUs")}
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 text-sm font-bold text-white hover:bg-white/10 transition-colors"
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
              <h2 className="text-xl font-bold text-[#0e241d]">{t("fullDetails")}</h2>
              <p className="mt-1 text-sm text-[#5d6f68]">
                {t("fullDetailsDescription")}
              </p>
            </ScrollReveal>

            <div className="space-y-3">
              {sections.map((section, i) => {
                const isOpen = openSection === i;
                const SecIcon = section.icon;
                return (
                  <div
                    key={section.title}
                    className="overflow-hidden rounded-2xl border border-[#e6e0d6] bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-[#f7f5f0] transition-colors"
                    >
                      <span className="flex items-center gap-3.5">
                        <span className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${isOpen ? "bg-[#d4a017]" : "bg-[#f7f5f0]"}`}>
                          <SecIcon className={`h-4 w-4 ${isOpen ? "text-white" : "text-[#0e241d]"}`} />
                        </span>
                        <span className="text-sm font-semibold text-[#0e241d]">{section.title}</span>
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-[#5d6f68] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[#e6e0d6] px-6 pb-6 pt-5">
                            {section.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
