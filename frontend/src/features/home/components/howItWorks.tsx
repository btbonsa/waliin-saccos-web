import { UserPlus, PiggyBank, Landmark,  } from "lucide-react";
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
];

export default function HowItWorks() {
  return (
    <section className="bg-yellow-50 h-full py-20 sm:py-14 ">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Membership"
            title="How Waliin SACCO works"
            description="Simple cooperative banking: save, borrow when you need to, and grow together."
          />
        </ScrollReveal>
        <div className="mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-3 h-full">
          {steps.map((step,) => (
            <ScrollReveal key={step.title}>
              <div className="group h-full rounded-2xl shadow-lg bg-white p-7 transition-all duration-500 hover:-translate-y-3 ease-in-out h-60">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-500 font-bold group-hover:bg-yellow-500 transition-all duration-600 group-hover:text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold text-black text-2xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
