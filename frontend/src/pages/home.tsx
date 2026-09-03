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

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Secure and transparent",
    description: "Member-led oversight, regular audits, and clear savings and loan terms Through digitalized financial system.",
  },
  {
    icon: Users,
    title: "Member-owned",
    description: "Every member controls, holds an equal vote and shares in the cooperative surplus.",
  },
  {
    icon: HeartHandshake,
    title: "Credit that fits life",
    description: "Personal, social, business, housing, vehicle, professional and salary based loan products at fair rates.",
  },
];

const partnerBenefits = [
  "Financial literacy for members",
  "Support for small traders",
  "Youth and family savings",
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="bg-white py-20 sm:py-24">
        <Container className="text-left">
          <ScrollReveal>
            <SectionHeader
              title="Built around member success"
              description="The members have started to borrow a Loan and engaged in in different business"
            />
          </ScrollReveal>
          <div className="mt-14 grid gap-6 grid-cols-1 md:grid-cols-3 lg:gap-8 bg-white p-4 sm:p-6 rounded-3xl">
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

      <section className="bg-gray-100 py-20 sm:py-24">
        <Container className="grid items-center gap-12 grid-cols-1 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left" className="space-y-6">
            <SectionHeader className="text-left"
              align="left"
              title="Work with a community cooperative"
              description="We welcome foundations, other financial cooperative, union, subgrant with different charities and cooperative banks/institutions in Holeta town and beyond"
            />
            <ul className="space-y-3">
              {partnerBenefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-base sm:text-lg">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-yellow-500 px-6 text-sm sm:text-base font-bold text-white hover:bg-yellow-500 hover:text-white hover:brightness-105 transition-all"
            >
              Talk to us
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-4xl shadow shadow-lg bg-white p-8">
              <h3 className="mt-2 text-xl sm:text-2xl text-ink">Shareholders and institutions</h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                Our members form a network of cooperative owners,  and regional partners/Private wealthier and  traders focused on sustainable saving and credit financial access for all members with maintaining Member transparency, Equality, and clear auditing system.              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Member transparency", value: "100%" },
                  { label: "Annual dividends", value: "Paid" },
                  { label: "Member voting", value: "Equal" },
                  { label: "Audit cycle", value: "Yearly" },
                ].map((item) => (
                  <div key={item.label} className="rounded-4xl bg-green-100/60 p-4">
                    <p className="text-base sm:text-lg font-bold text-forest">{item.value}</p>
                    <p className="mt-0.5 text-xs sm:text-sm text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <FaqSection />

      <section className="bg-yellow-500 py-20 brounded-4xl sm:py-24 ">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white sm:text-4xl brightness-105">Ready to start saving with Waliin?</h2>
          <p className="mt-4 text-white">
            Join members already building a more secure future through Waliin SACCO Ltd.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 sm:px-7 text-sm sm:text-base font-bold text-yellow-500 hover:bg-white/90 transition-all brightness-105"
            >
              Visit the office
            </Link>
            <Link
              to="/services"
              className="inline-flex h-12 items-center rounded-full border border-white/20 px-6 sm:px-7 text-sm sm:text-base font-bold text-white hover:bg-white/10"
            >
              Browse products
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
