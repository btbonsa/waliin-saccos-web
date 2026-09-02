import { ShieldCheck, Users, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "../features/home/components/heroSection";
import Stats from "../features/home/components/stats";
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
    description: "Member-led oversight, regular audits, and clear savings and loan terms.",
  },
  {
    icon: Users,
    title: "Member-owned",
    description: "Every member holds an equal vote and shares in the cooperative surplus.",
  },
  {
    icon: HeartHandshake,
    title: "Credit that fits life",
    description: "Personal, business, housing, vehicle, and salary products at fair rates.",
  },
];

const partnerBenefits = [
  "Financial literacy for members",
  "Support for small traders",
  "Youth and family savings",
  "Inclusive local credit",
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Stats />

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Why Waliin"
              title="Built around member success"
              description="Cooperative finance with the discipline of a savings institution and the heart of a community."
            />
          </ScrollReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <FeatureCard {...item} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <HowItWorks />
      <ProductPreview />

      <section className="bg-cream py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left" className="space-y-6">
            <SectionHeader
              align="left"
              eyebrow="Partnerships"
              title="Work with a community cooperative"
              description="We welcome foundations, CSR programs, and institutions committed to inclusive economic development in Holeta and beyond."
            />
            <ul className="space-y-3">
              {partnerBenefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm font-bold text-ink">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-forest" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-forest px-6 text-sm font-bold text-white hover:bg-forest-deep"
            >
              Talk to us
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-3xl border border-line bg-paper p-8">
              <p className="text-sm font-bold text-gold">Governance</p>
              <h3 className="mt-2 text-2xl font-bold text-ink">Shareholders and institutions</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Our members form a network of cooperative owners and regional partners focused on sustainable wealth in Ethiopia.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Member transparency", value: "100%" },
                  { label: "Annual dividends", value: "Paid" },
                  { label: "Member voting", value: "Equal" },
                  { label: "Audit cycle", value: "Yearly" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-line bg-cream p-4">
                    <p className="text-lg font-bold text-forest">{item.value}</p>
                    <p className="mt-0.5 text-xs text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <FaqSection />

      <section className="bg-forest-deep py-20">
        <Container className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to start saving with Waliin?</h2>
          <p className="mt-4 text-white/65">
            Join members already building a more secure future through Waliin SACCO Ltd.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-7 text-sm font-bold text-forest-deep"
            >
              Visit the office <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex h-12 items-center rounded-full border border-white/20 px-7 text-sm font-bold text-white hover:bg-white/10"
            >
              Browse products
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
