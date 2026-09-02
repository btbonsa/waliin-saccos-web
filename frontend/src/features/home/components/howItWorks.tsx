import { UserPlus, PiggyBank, Landmark, BadgePercent } from "lucide-react";
import Container from "../../../components/ui/container";
import SectionHeader from "../../../components/ui/section-header";
import ScrollReveal from "../../../components/ui/ScrollReveal";

const steps = [
  {
    icon: UserPlus,
    title: "Join as a member",
    desc: "Visit our Holeta office with your ID and open a membership account.",
  },
  {
    icon: PiggyBank,
    title: "Save consistently",
    desc: "Start with ETB 500 monthly mandatory savings, plus voluntary deposits anytime.",
  },
  {
    icon: Landmark,
    title: "Access fair credit",
    desc: "Qualify for personal, business, housing, and livelihood loans based on your savings.",
  },
  {
    icon: BadgePercent,
    title: "Share the surplus",
    desc: "As an owner, you vote equally and share in annual cooperative dividends.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Membership"
            title="How Waliin SACCO works"
            description="Simple cooperative banking: save, borrow when you need to, and grow together."
          />
        </ScrollReveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-paper p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-forest">
                  <step.icon className="h-5 w-5" />
                </div>
                <p className="mb-1 text-xs font-bold text-gold">0{i + 1}</p>
                <h3 className="mb-2 font-bold text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
