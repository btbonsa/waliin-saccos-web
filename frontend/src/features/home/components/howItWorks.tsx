import { UserPlus, PiggyBank, Landmark } from "lucide-react";
import Container from "../../../components/ui/container";
import SectionHeader from "../../../components/ui/section-header";
import ScrollReveal from "../../../components/ui/ScrollReveal";
import { useLang } from "../../../context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLang();

  const steps = [
    {
      icon: UserPlus,
      title: t("joinAsMember"),
      desc: t("joinAsMemberDesc"),
    },
    {
      icon: PiggyBank,
      title: t("saveConsistently"),
      desc: t("saveConsistentlyDesc"),
    },
    {
      icon: Landmark,
      title: t("accessFairCredit"),
      desc: t("accessFairCreditDesc"),
    },
  ];

  return (
    <section className="flex bg-green-950 py-20 sm:py-24 border-y border-[#e6e0d6] h-full">
      <Container>
        <ScrollReveal>
          <SectionHeader
            className="text-left text-white"
            title="How Walin SACCO works"
            moreDescription="A simple cooperative that enables you to save, borrow, and improve your financial access."
          />
        </ScrollReveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.08} >
              <div className="group rounded-2xl bg-white shadow shadow-gray-300 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-bold text-[#000] text-base sm:text-lg">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#5d6f68]">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
