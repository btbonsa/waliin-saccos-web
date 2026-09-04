import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Container from "../../../components/ui/container";
import SectionHeader from "../../../components/ui/section-header";
import ScrollReveal from "../../../components/ui/ScrollReveal";
import { useLang } from "../../../context/LanguageContext";

export default function FaqSection() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      q: t("faqWhoCanJoin"),
      a: t("faqWhoCanJoinAnswer"),
    },
    {
      q: t("faqLoanQualify"),
      a: t("faqLoanQualifyAnswer"),
    },
    {
      q: t("faqSavingsInterest"),
      a: t("faqSavingsInterestAnswer"),
    },
    {
      q: t("faqMemberOwned"),
      a: t("faqMemberOwnedAnswer"),
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column */}
          <ScrollReveal direction="left" className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                align="left"
                className="text-left"
                title={t("clearAnswers")}
                description={t("clearAnswersDescription")}
              />
            </div>
          </ScrollReveal>

          {/* Right column — FAQ accordion */}
          <ScrollReveal direction="right" className="lg:col-span-7">
            <div className="space-y-3">
              {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-yellow-500/40 bg-white shadow-md"
                        : "border-line bg-paper/50 hover:border-line hover:bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <span
                        className={`text-sm font-semibold leading-snug sm:text-base ${
                          isOpen ? "text-ink" : "text-ink/90"
                        }`}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "bg-yellow-500 text-white"
                            : "bg-white text-muted border border-line"
                        }`}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-line/60 px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
                            <p className="text-sm leading-relaxed text-muted">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}