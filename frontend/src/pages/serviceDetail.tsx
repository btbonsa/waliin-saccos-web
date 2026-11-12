import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgePercent,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  HandCoins,
  Layers,
  PiggyBank,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { getLocalizedService } from "../data/services";
import Container from "../components/ui/container";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Button } from "../components/ui/button";
import SEO from "../components/seo";
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
        <SEO
          title="Service Not Found"
          description="The savings or loan product you are looking for does not exist on the Waliin SACCO Ltd website."
          path={`/services/${id ?? ""}`}
          noindex
        />
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-paper">
          <ShieldCheck className="h-7 w-7 text-forest" strokeWidth={1.75} />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-forest-deep">{t("serviceNotFound")}</h2>
          <p className="text-sm text-forest/60">{t("serviceNotFoundDescription")}</p>
        </div>
        <Button asChild variant="default" className="mt-2">
          <Link to="/services">
            <ArrowLeft size={15} /> {t("backToServices")}
          </Link>
        </Button>
      </div>
    );
  }

  const Icon = service.icon;
  const toggle = (i: number) => setOpenSection(openSection === i ? -1 : i);

  const keyFacts = [
    { label: t("interestRate"), value: service.interestRate, icon: BadgePercent },
    { label: t("tenure"), value: service.tenure, icon: CalendarClock },
    { label: t("requiredSavings"), value: `${service.savingsPercent} ${t("continuous")}`, icon: PiggyBank },
  ];

  const sections = [
    ...(service.subTypes
      ? [{
          title: t("typesOfSavings"),
          icon: Layers,
          content: (
            <div className="grid gap-3 sm:grid-cols-2">
              {service.subTypes.map((sub, i) => (
                <motion.div
                  key={sub.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-gold/40 hover:bg-white"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-deep/5 text-forest transition-colors group-hover:bg-gold/15 group-hover:text-gold">
                      <Sparkles size={16} strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-forest-deep">{sub.name}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-forest/60">{sub.desc}</p>
                    </div>
                  </div>
                </motion.div>
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
          {service.tiers.map((tier, i) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex flex-col gap-4 rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-forest/20 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-deep text-sm font-bold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="grid min-w-0 flex-1 gap-3 sm:grid-cols-2 sm:gap-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-forest/50">{tier.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-forest/70">{tier.condition}</p>
                </div>
                <div className="sm:border-l sm:border-line sm:pl-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-forest/50">{t("loanInformation")}</p>
                  <p className="mt-1 flex items-start gap-2 text-sm font-semibold text-forest-deep">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-gold" />
                    {tier.limit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: t("loanInformation"),
      icon: BadgePercent,
      content: (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {keyFacts.map((item, i) => {
            const FactIcon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="rounded-2xl border border-line bg-paper p-5 text-center transition-colors hover:border-gold/40"
              >
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-forest-deep/5 text-forest">
                  <FactIcon size={18} strokeWidth={1.75} />
                </span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-forest/50">{item.label}</p>
                <p className="mt-1 text-base font-bold text-forest-deep">{item.value}</p>
              </motion.div>
            );
          })}
        </div>
      ),
    },
  ];

  return (
    <div className="bg-cream">
      <SEO
        title={`${service.title} — ${service.subtitle}`}
        description={`${service.description} Interest ${service.interestRate}, tenure ${service.tenure}. Waliin SACCO Ltd, Holeta, Ethiopia.`}
        path={`/services/${service.id}`}
        image={service.image}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ height: 540 }}>
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
          <div className="absolute inset-0 bg-forest-deep" />
        )}

        {/* gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/75 to-forest-deep/20" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_100%,rgba(212,160,23,0.14)_0%,transparent_70%)]" />

        <Container className="relative flex h-full flex-col justify-between py-8">
          {/* Top row: back + breadcrumb */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <motion.button
              type="button"
              onClick={() => navigate("/services")}
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white"
            >
              <ArrowLeft size={14} /> {t("backToServices")}
            </motion.button>

            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              aria-label="Breadcrumb"
              className="hidden items-center gap-1.5 text-xs font-medium text-white/50 sm:flex"
            >
              <Link to="/" className="transition-colors hover:text-white">{t("home")}</Link>
              <ChevronRight size={12} />
              <Link to="/services" className="transition-colors hover:text-white">{t("services")}</Link>
              <ChevronRight size={12} />
              <span className="text-gold">{service.title}</span>
            </motion.nav>
          </div>

          {/* Bottom content */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">{service.subtitle}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="flex items-center gap-5"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md">
                  <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                </div>
                <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base"
              >
                {service.description}
              </motion.p>
            </div>

            {/* Glass stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
              className="flex shrink-0 gap-3"
            >
              {[
                { label: t("interest"), value: service.interestRate },
                { label: t("tenure"), value: service.tenure },
                { label: t("requiredSavings"), value: service.savingsPercent },
              ].map((s) => (
                <div
                  key={s.label}
                  className="min-w-[104px] rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 text-center backdrop-blur-md"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50">{s.label}</p>
                  <p className="mt-1.5 text-sm font-bold text-white">{s.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Content ── */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">

          {/* Main column */}
          <div className="order-2 lg:order-1 lg:col-span-8">
            <ScrollReveal className="mb-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{t("fullDetails")}</h2>
              </div>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-forest/60">{t("fullDetailsDescription")}</p>
            </ScrollReveal>

            <div className="space-y-4">
              {sections.map((section, i) => {
                const isOpen = openSection === i;
                const SecIcon = section.icon;
                return (
                  <ScrollReveal key={section.title} delay={i * 0.06}>
                    <motion.div
                      className="overflow-hidden rounded-2xl border bg-white transition-shadow duration-300"
                      animate={{
                        borderColor: isOpen ? "rgba(212,160,23,0.5)" : "#e6e0d6",
                        boxShadow: isOpen
                          ? "0 12px 40px -12px rgba(14,36,29,0.18)"
                          : "0 1px 3px rgba(14,36,29,0.05)",
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-paper/60"
                      >
                        <span className="flex items-center gap-4">
                          <span
                            className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300"
                            style={{
                              background: isOpen ? "#0e241d" : "#f7f5f0",
                              border: `1px solid ${isOpen ? "#d4a017" : "#e6e0d6"}`,
                            }}
                          >
                            <SecIcon className="h-5 w-5 transition-colors duration-300" style={{ color: isOpen ? "#eab308" : "#0e241d" }} />
                          </span>
                          <span className="text-[15px] font-bold text-forest-deep">{section.title}</span>
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-forest/50 transition-colors"
                          style={isOpen ? { borderColor: "#d4a017", color: "#d4a017" } : undefined}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-line/70 px-6 pb-6 pt-5">
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

          {/* Sidebar */}
          <aside className="order-1 space-y-5 lg:order-2 lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <ScrollReveal direction="left">
              <div className="overflow-hidden rounded-2xl border border-line bg-white">
                <div className="border-b border-line px-6 py-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest/50">
                    {t("aboutThisProduct")}
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-[1.9] text-forest/75">{service.overview}</p>

                  <div className="mt-6 space-y-3 border-t border-line pt-5">
                    {keyFacts.map((item) => {
                      const FactIcon = item.icon;
                      return (
                        <div key={item.label} className="flex items-center justify-between gap-3">
                          <span className="flex items-center gap-2.5 text-xs font-medium text-forest/55">
                            <FactIcon size={15} className="text-gold" />
                            {item.label}
                          </span>
                          <span className="text-sm font-bold text-forest-deep">{item.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl bg-forest-deep p-7 text-white">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(212,160,23,0.12)_0%,transparent_70%)]" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold-bright to-gold" />

                <h3 className="relative text-lg font-bold tracking-tight">{t("readyToApply")}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/55">
                  {t("applyDescription")}
                </p>
                <div className="relative mt-6 space-y-3">
                  <Button asChild className="h-11 w-full justify-center gap-2 bg-gold text-forest-deep hover:brightness-105">
                    <Link to="/contact">
                      <PhoneCall size={15} /> {t("contactUs")}
                    </Link>
                  </Button>
                  <Button asChild variant="light" className="h-11 w-full justify-center gap-2">
                    <Link to="/contact">
                      {t("becomeMember")} <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </Container>
      </section>
    </div>
  );
}
