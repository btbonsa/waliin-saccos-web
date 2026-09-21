import { UserPlus, PiggyBank, Landmark } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Container from "../../../components/ui/container";
import SectionHeader from "../../../components/ui/section-header";
import ScrollReveal from "../../../components/ui/ScrollReveal";
import { useLang } from "../../../context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLang();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    { icon: UserPlus,  title: t("joinAsMember"),      desc: t("joinAsMemberDesc") },
    { icon: PiggyBank, title: t("saveConsistently"),  desc: t("saveConsistentlyDesc") },
    { icon: Landmark,  title: t("accessFairCredit"),  desc: t("accessFairCreditDesc") },
  ];

  return (
    <section className="flex bg-green-950 py-20 sm:py-24 border-y border-[#e6e0d6]">
      <Container>
        <ScrollReveal>
          <SectionHeader
            className="text-left text-white"
            title={t("howItWorksTitle")}
            moreDescription={t("howItWorksDescription")}
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <ScrollReveal key={step.title} delay={i * 0.12}>
                <motion.div
                  onHoverStart={() => setActiveStep(i)}
                  onHoverEnd={() => setActiveStep(null)}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative rounded-2xl p-6 sm:p-7 cursor-default overflow-hidden transition-colors duration-300 ${
                    isActive ? "bg-white shadow-xl" : "bg-white/10 shadow-none"
                  }`}
                >
                  {/* Step number watermark */}
                  <span className={`absolute right-5 top-4 text-6xl font-black select-none transition-opacity duration-300 ${
                    isActive ? "opacity-5 text-[#0e241d]" : "opacity-10 text-white"
                  }`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <motion.div
                    animate={isActive ? { scale: 1.1, rotate: -8 } : { scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 ${
                      isActive ? "bg-yellow-500 text-white" : "bg-yellow-400/20 text-yellow-400"
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                  </motion.div>

                  <h3 className={`mb-2 font-bold text-base sm:text-lg transition-colors duration-300 ${
                    isActive ? "text-[#000]" : "text-white"
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isActive ? "text-[#5d6f68]" : "text-white/60"
                  }`}>
                    {step.desc}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-yellow-400"
                  />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Connector line between steps (desktop) */}
        <div className="mt-8 hidden lg:flex items-center justify-center gap-0 px-8">
          {steps.map((_, i) => (
            <div key={i} className="flex items-center flex-1">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.4, duration: 0.5 }}
                className="h-px flex-1 origin-left bg-white/20"
              />
              {i < steps.length - 1 && (
                <div className="mx-2 h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
