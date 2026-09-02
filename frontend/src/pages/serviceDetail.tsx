import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft, CheckCircle2, ChevronDown, Clock, AlertCircle, PhoneCall, Layers, HandCoins,
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
      <div className="flex min-h-[72vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <AlertCircle className="h-12 w-12 text-line" />
        <h2 className="text-xl font-bold text-ink">Service not found</h2>
        <Link to="/services" className="text-lg font-bold text-forest underline underline-offset-4">
          Back to services
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
                  <div key={sub.name} className="rounded-xl border border-line bg-white p-4">
                    <p className="text-sm font-bold text-ink">{sub.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{sub.desc}</p>
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
            <div key={tier.label} className="flex flex-col gap-3 rounded-4xl bg-white p-4 sm:flex-row sm:items-center">
              <span className="inline-flex h-7 shrink-0 items-center rounded-full bg-forest px-3 text-xs font-bold text-white">
                {tier.label}
              </span>
              <div>
                <p className="text-xs text-muted">{tier.condition}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-forest">
                  <CheckCircle2 size={13} />
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
            { label: "Required savings", value: `${service.savingsPercent} continuous` },
          ].map((item) => (
            <div key={item.label} className="rounded-xl shadow bg-white p-4 text-center">
              <p className="mb-1 text-xs font-bold text-muted">{item.label}</p>
              <p className="font-bold text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div>
      <section className="bg-yellow-500 py-16">
        <Container>
          <button
            type="button"
            onClick={() => navigate("/services")}
            className="mb-8 inline-flex items-center gap-2 text-lg font-bold text-white/80 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to services
          </button>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="rounded-3xl bg-green-900 p-3">
              <Icon className="h-8 w-8 text-white" strokeWidth={1.75} />
            </div>
            
            <div>
              <p className="text-sm font-bold text-gold-soft">{service.subtitle}</p>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{service.title}</h1>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-5">
            <ScrollReveal direction="left">
              <div className="rounded-2xl shadow bg-white p-7">
                <h2 className="text-base font-bold text-ink">About this product</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.overview}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.08}>
              <div className="rounded-2xl bg-yellow-500 p-7 text-white">

                <h3 className="font-bold">Ready to apply?</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  Visit our office or contact us to start your application.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-yellow-500 text-sm font-bold text-forest-deep"
                >
                  <PhoneCall size={15} />
                  Contact us
                </Link>
                <Link
                  to="/login"
                  className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-full border border-white/15 text-lg font-bold text-white hover:bg-white/10"
                >
                  Become a member
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2">
            <ScrollReveal className="mb-6">
              <h2 className="text-xl font-bold text-ink">Full details</h2>
              <p className="mt-1 text-sm text-muted">Open each section for terms, tiers, and savings rules.</p>
            </ScrollReveal>
            <div className="space-y-3">
              {sections.map((section, i) => {
                const isOpen = openSection === i;
                const SecIcon = section.icon;
                return (
                  <div key={section.title} className="overflow-hidden rounded-2xl border border-line bg-paper">
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left"
                    >
                      <span className="flex items-center gap-3">
                        <span className="rounded-xl bg-cream p-2">
                          <SecIcon className="h-4 w-4 text-forest" />
                        </span>
                        <span className="text-sm font-bold text-ink">{section.title}</span>
                      </span>
                      <ChevronDown className={`h-4 w-4 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-line px-6 pb-6 pt-4">{section.content}</div>
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
