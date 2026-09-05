import {
  ShieldCheck,
  Users,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "../features/home/components/heroSection";
import HowItWorks from "../features/home/components/howItWorks";
import ProductPreview from "../features/home/components/productPreview";
import FaqSection from "../features/home/components/faqSection";
import FeatureCard from "../components/ui/feature-card";
import SectionHeader from "../components/ui/section-header";
import Container from "../components/ui/container";
import ScrollReveal from "../components/ui/ScrollReveal";
import { useLang } from "../context/LanguageContext";

export default function Home() {
  const { t } = useLang();

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: t("secureAndTransparent"),
      description: t("secureDescription"),
    },
    {
      icon: Users,
      title: t("memberOwned"),
      description: t("memberOwnedDescription"),
    },
    {
      icon: HeartHandshake,
      title: t("creditThatFitsLife"),
      description: t("creditDescription"),
    },
  ];

  const partnerBenefits = [
    t("financialLiteracy"),
    t("supportSmallTraders"),
    t("youthAndFamily"),
  ];

  return (
    <div>
      <HeroSection />

      {/* Why choose us */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeader
              title={t("builtAround")}
              description={t("membersSuccessDescription")}
            />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-3 lg:mt-14 lg:gap-8">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.12}>
                <div className="group h-full transition-transform duration-300 hover:-translate-y-1.5">
                  <FeatureCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    className="h-full min-h-[240px] border border-transparent shadow-sm transition-all duration-300 group-hover:border-yellow-200/80 group-hover:shadow-lg sm:min-h-[260px]"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <HowItWorks />
      <ProductPreview />

      {/* Community & Cooperative */}
      <section className="bg-[#f5f3ef] py-16 sm:py-20 lg:py-24">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <ScrollReveal direction="left" className="space-y-6">
            <SectionHeader
              align="left"
              className="text-left"
              title={t("communityCooperative")}
              description={t("communityCooperativeDescription")}
            />

            <ul className="space-y-3">
              {partnerBenefits.map((benefit, i) => (
                <ScrollReveal key={benefit} delay={0.15 + i * 0.08}>
                  <li className="group flex items-start gap-3 text-sm text-ink transition-colors duration-200 hover:text-ink/90 sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500 transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5" />
                    <span>{benefit}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>

            <ScrollReveal delay={0.4}>
              <Link
                to="/contact"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#d4a017] px-6 text-sm font-bold text-white transition-all duration-300 hover:bg-[#c49215] hover:shadow-md hover:shadow-[#d4a017]/25 focus:outline-none focus:ring-2 focus:ring-[#d4a017]/40 focus:ring-offset-2 active:scale-[0.98]"
              >
                {t("talkToUs")}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </ScrollReveal>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="group relative overflow-hidden rounded-2xl border border-[#e6e0d6] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:rounded-3xl sm:p-8">
              {/* subtle top accent that appears on hover */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-yellow-400 to-amber-500 transition-transform duration-500 group-hover:scale-x-100" />

              <h3 className="text-lg font-bold text-ink sm:text-xl">
                {t("shareholdersInstitutions")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5d6f68] sm:text-base">
                {t("shareholdersDescription")}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <FaqSection />

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0e241d] py-16 sm:py-20 lg:py-24">
        {/* soft decorative glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#d4a017]/10 blur-3xl" />

        <Container className="relative max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {t("readyToStart")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/60 sm:text-base">
              {t("readyDescription")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/contact"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#d4a017] px-7 text-sm font-bold text-white transition-all duration-300 hover:bg-[#c49215] hover:shadow-lg hover:shadow-[#d4a017]/30 focus:outline-none focus:ring-2 focus:ring-[#d4a017]/40 focus:ring-offset-2 focus:ring-offset-[#0e241d] active:scale-[0.98] sm:w-auto"
              >
                {t("visitOffice")}
                <ArrowRight
                  size={16}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </Link>

              <Link
                to="/services"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 px-7 text-sm font-bold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#0e241d] active:scale-[0.98] sm:w-auto"
              >
                {t("browseProducts")}
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}