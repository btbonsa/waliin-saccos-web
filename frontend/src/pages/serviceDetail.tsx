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
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { getService } from "../data/services";
import Container from "../components/ui/container";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = getService(id);
  const [openSection, setOpenSection] = useState(0);

  if (!service) {
    return (
      <div className="flex min-h-[72vh] flex-col items-center justify-center gap-5 px-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-paper border border-line">
          <AlertCircle className="h-7 w-7 text-muted" strokeWidth={1.75} />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-ink">
            Service not found
          </h2>
          <p className="text-sm text-muted">
            The product you’re looking for doesn’t exist or has been removed.
          </p>
        </div>
        <Link
          to="/services"
          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:underline underline-offset-4"
        >
          <ArrowLeft size={15} />
          Back to all services
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
            title: "Types of savings",
            icon: Layers,
            content: (
              <div className="space-y-3">
                {service.subTypes.map((sub) => (
                  <div
                    key={sub.name}
                    className="rounded-xl border border-line bg-white p-5 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-ink">{sub.name}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {sub.desc}
                    </p>
                  </div>
                ))}
              </div>
            ),
          },
        ]
      : []),
    {
      title: "Loan tiers",
      icon: HandCoins,
      content: (
        <div className="space-y-3">
          {service.tiers.map((tier) => (
            <div
              key={tier.label}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-5 sm:flex-row sm:items-center sm:gap-5"
            >
              <span className="inline-flex h-8 shrink-0 items-center rounded-full bg-forest px-3.5 text-xs font-semibold tracking-wide text-white">
                {tier.label}
              </span>
              <div className="min-w-0">
                <p className="text-sm text-muted">{tier.condition}</p>
                <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-forest">
                  <CheckCircle2 size={14} className="shrink-0" />
                  {tier.limit}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Loan information",
      icon: Clock,
      content: (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { label: "Interest rate", value: service.interestRate },
            { label: "Tenure", value: service.tenure },
            {
              label: "Required savings",
              value: `${service.savingsPercent} continuous`,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-line bg-white p-5 text-center shadow-sm"
            >
              <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-muted">
                {item.label}
              </p>
              <p className="text-base font-semibold text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="relative overflow-hidden bg-yellow-500 py-14 sm:py-16">
        <Container>
          <button
            type="button"
            onClick={() => navigate("/services")}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to services
          </button>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-900 shadow-lg">
              <Icon className="h-8 w-8 text-white" strokeWidth={1.75} />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium tracking-wide text-gold-soft">
                {service.subtitle}
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {service.title}
              </h1>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Sidebar */}
          <aside className="space-y-6 lg:col-span-4">
            <ScrollReveal direction="left">
              <div className="rounded-2xl border border-line bg-white p-7 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  About this product
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/90">
                  {service.overview}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.08}>
              <div className="rounded-2xl bg-yellow-500 p-7 text-white shadow-md">
                <h3 className="text-lg font-semibold tracking-tight">
                  Ready to apply?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Visit our office or contact us to start your application.
                </p>

                <div className="mt-6 space-y-3">
                  <Link
                    to="/contact"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-semibold text-forest-deep transition-colors hover:bg-white/95"
                  >
                    <PhoneCall size={16} />
                    Contact us
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/25 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Become a member
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-8">
            <ScrollReveal className="mb-8">
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                Full details
              </h2>
              <p className="mt-1.5 text-sm text-muted">
                Expand each section for terms, tiers, and savings rules.
              </p>
            </ScrollReveal>

            <div className="space-y-3">
              {sections.map((section, i) => {
                const isOpen = openSection === i;
                const SecIcon = section.icon;

                return (
                  <div
                    key={section.title}
                    className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-paper/60"
                    >
                      <span className="flex items-center gap-3.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cream">
                          <SecIcon className="h-4 w-4 text-forest" />
                        </span>
                        <span className="text-sm font-semibold text-ink">
                          {section.title}
                        </span>
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-line px-6 pb-6 pt-5">
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