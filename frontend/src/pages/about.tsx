import { Target, Eye, Shield, Users, TrendingUp, Heart } from "lucide-react";
import PageHero from "../components/ui/page-hero";
import Container from "../components/ui/container";
import SectionHeader from "../components/ui/section-header";
import FeatureCard from "../components/ui/feature-card";
import ScrollReveal from "../components/ui/ScrollReveal";

const values = [
  { icon: Shield, title: "Integrity", description: "We operate with full transparency and accountability to every member." },
  { icon: Users, title: "Community", description: "Member-owned and member-driven — every voice shapes our direction." },
  { icon: TrendingUp, title: "Growth", description: "We invest in financial literacy and sustainable economic empowerment." },
  { icon: Heart, title: "Inclusion", description: "Accessible financial services for all, regardless of background." },
];

const leadership = [
  { name: "Hailu Delesa", role: "Chairman", initials: "HD" },
  { name: "Tigist Bekele", role: "General Manager", initials: "TB" },
  { name: "Abebe Girma", role: "Finance Director", initials: "AG" },
  { name: "Mekdes Alemu", role: "Operations Manager", initials: "MA" },
];

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="Our story"
        title="About Waliin SACCO Ltd"
        description="A member-owned cooperative committed to inclusive financial growth in Holeta and across Ethiopia."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
      />

      <section id="mission" className="bg-paper py-20">
        <Container>
          <ScrollReveal>
            <SectionHeader eyebrow="Purpose" title="Mission and vision" />
          </ScrollReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Our mission",
                description:
                  "To empower members through accessible, transparent, and sustainable cooperative financial services — fostering economic independence and community resilience.",
              },
              {
                icon: Eye,
                title: "Our vision",
                description:
                  "To be the most trusted savings and credit cooperative in our region — where every member thrives through shared prosperity and financial dignity.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1} direction={i === 0 ? "left" : "right"}>
                <FeatureCard {...card} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="What we stand for"
              title="Our core values"
              description="The principles that guide every decision we make."
            />
          </ScrollReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <FeatureCard {...v} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="leadership" className="bg-paper py-20">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="The team"
              title="Our leadership"
              description="Professionals stewarding Waliin SACCO Ltd on behalf of members."
            />
          </ScrollReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.08}>
                <div className="rounded-2xl border border-line bg-cream/40 p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest text-lg font-bold text-gold-soft">
                    {person.initials}
                  </div>
                  <p className="mt-4 font-bold text-ink">{person.name}</p>
                  <p className="mt-1 text-sm text-muted">{person.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
