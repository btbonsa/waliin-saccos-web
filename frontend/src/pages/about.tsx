import { Target, Eye } from "lucide-react";
import PageHero from "../components/ui/page-hero";
import Container from "../components/ui/container";
import SectionHeader from "../components/ui/section-header";
import FeatureCard from "../components/ui/feature-card";
import ScrollReveal from "../components/ui/ScrollReveal";
import hailuImage from "../assets/hailu.png";
const leadership = [
  { name: "Hailu Delesa", role: "Chairman", initials: "HD" },
];

const coreValues = [
  { value: "Equality", icon: "⚖️", desc: "All members have the same rights and responsibilities within the organization." },
  { value: "Solidarity", icon: "🤝", desc: "Members stand united and support one another through shared common goals." },
  { value: "Self-help", icon: "💪", desc: "Members rely on their own efforts and capabilities to improve their lives." },
  { value: "Self-responsibility", icon: "🎯", desc: "Individuals take personal accountability for the group's success and well-being." },
  { value: "Democracy", icon: "🗳️", desc: "Members have an equal voice in running the cooperative." },
];

const ethicalValues = [
  { value: "Honesty", icon: "🤝" },
  { value: "Transparency", icon: "🔍" },
  { value: "Accountability", icon: "⚖️" },
  { value: "Participation", icon: "🗳️" },
  { value: "Social Responsibility", icon: "🌱" },
  { value: "Consideration for Others", icon: "💛" },
];

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="Our story"
        title="About Walin SACCO Ltd"
        description="A member-owned cooperative committed to inclusive financial growth in Holeta Town and across Ethiopia."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
      />

      <section id="mission" className="bg-white py-20">
        <Container>
          <ScrollReveal>
            <SectionHeader eyebrow="Purpose" title="Mission and Vision" />
          </ScrollReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 h-full">
            {[
              {
                icon: Target,
                title: "Our Vision",
                description: "By the year 2030 E.C, the members will be middle-income, entrepreneurs, and be freed from poverty.",
              },
              {
                icon: Eye,
                title: "Our Mission",
                description: "To meet the fundamental needs of members by providing convenient, accessible, and efficient financial services, while building a sustainable and inclusive financial institution through a skilled and ethically grounded workforce, the use of modern technology, and continuous public awareness creation.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1} direction={i === 0 ? "left" : "right"}>
                <FeatureCard {...card} className="h-80" />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="What we stand for"
              title="Core & Ethical Values of Walin"
              description="The principles that guide every decision, every member, and every service we provide."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="up">
            <div className="mt-12 rounded-3xl border border-line bg-white shadow-sm overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400" />
              <div className="p-8 sm:p-12">

                {/* Core Values */}
                <div>
                  <h4 className="mt-1 text-xl font-bold text-ink">Our Core Values</h4>
                  <p className="mt-1 mb-5 text-sm text-muted">The principles that guide every decision we make.</p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {coreValues.map((v) => (
                      <div key={v.value} className="flex flex-col gap-2 rounded-2xl border border-yellow-200 bg-yellow-50 px-5 py-4 hover:bg-yellow-100 transition-colors">
                        <span className="text-2xl">{v.icon}</span>
                        <p className="text-sm font-bold text-yellow-800">{v.value}</p>
                        <p className="text-xs leading-relaxed text-muted">{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ethical Values */}
                <div className="mt-10">
                  <h4 className="text-xl font-bold text-ink mb-5">Ethical Values</h4>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {ethicalValues.map((v) => (
                      <div key={v.value} className="flex flex-col items-center gap-2 rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-5 text-center hover:bg-yellow-100 transition-colors">
                        <span className="text-2xl">{v.icon}</span>
                        <span className="text-xs font-bold text-yellow-800">{v.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

          

              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section id="leadership" className="bg-white py-20">
        <Container>
          <ScrollReveal>
            <SectionHeader
              title="Our leadership"
              description="Professionals stewarding Waliin SACCO Ltd on behalf of members."
            />
          </ScrollReveal>
          <div className="flex justify-center items-center py-20 w-full">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.08}>
                <div className="rounded-2xl shadow-lg bg-white p-6 sm:p-8 text-center w-80">
                  <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-2 border-yellow-400">
                    <img src={hailuImage} alt={person.name} className="h-full w-full object-cover" />
                  </div>
                  <p className="mt-4 font-bold text-base sm:text-lg">{person.name}</p>
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
