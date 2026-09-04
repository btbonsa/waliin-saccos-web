import { ShieldCheck, Users, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
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
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeader
              title={t("builtAround")}
              description={t("membersSuccessDescription")}
            />
          </ScrollReveal>
          <div className="mt-14 grid gap-6 grid-cols-1 md:grid-cols-3 lg:gap-8">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  className="h-60"
                />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <HowItWorks />
      <ProductPreview />

      <section className="bg-[#f5f3ef] py-20 sm:py-24">
        <Container className="grid items-center gap-12 grid-cols-1 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left" className="space-y-6">
            <SectionHeader
              align="left"
              className="text-left"
              title={t("communityCooperative")}
              description={t("communityCooperativeDescription")}
            />
            <ul className="space-y-3">
              {partnerBenefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm sm:text-base">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#d4a017] px-6 text-sm font-bold text-white hover:bg-[#d4af5a] transition-colors"
            >
              {t("talkToUs")}
              <ArrowRight size={15} />
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-3xl bg-white shadow-sm border border-[#e6e0d6] p-8">
              <h3 className="text-xl font-bold text-[#000]">{t("shareholdersInstitutions")}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5d6f68]">
                {t("shareholdersDescription")}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <FaqSection />

      <section className="bg-[#0e241d] py-20 sm:py-24">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">{t("readyToStart")}</h2>
          <p className="mt-4 text-sm sm:text-base text-white/60">
            {t("readyDescription")}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#d4a017] px-7 text-sm font-bold text-white hover:bg-[#d4af5a] transition-colors"
            >
              {t("visitOffice")}
            </Link>
            <Link
              to="/services"
              className="inline-flex h-12 items-center rounded-full border border-white/20 px-7 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              {t("browseProducts")}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
