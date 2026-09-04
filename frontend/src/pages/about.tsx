import { Target, Eye, CheckCircle2 } from "lucide-react";
import PageHero from "../components/ui/page-hero";
import Container from "../components/ui/container";
import SectionHeader from "../components/ui/section-header";
import FeatureCard from "../components/ui/feature-card";
import ScrollReveal from "../components/ui/ScrollReveal";
import logo from "../assets/logo.jpg";

const leadership = [
  { name: "Hailu Delesa", role: "Chairman", initials: "HD" },
];

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="Our story"
        title="About Waliin SACCO Ltd"
        description="A member-owned cooperative committed to inclusive financial growth in Holeta Town and across Ethiopia."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
      />

      <section id="mission" className="bg-[#fffcf8] py-20">
        <Container>
          <ScrollReveal>
            <SectionHeader eyebrow="Purpose" title="Mission and vision" />
          </ScrollReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Eye,
                title: "Our mission",
                description:
                  "To meet the fundamental needs of members by providing convenient, accessible, and efficient financial services — built on a skilled workforce, modern technology, and continuous public awareness.",
              },
              {
                icon: Target,
                title: "Our vision",
                description:
                  "By the year 2030 E.C, our members will be middle-income entrepreneurs, freed from poverty.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1} direction={i === 0 ? "left" : "right"}>
                <FeatureCard {...card} className="h-72" />
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
              title="Ethical Conduct of Waliin"
              description="The principles that guide every decision, every member, and every service we provide."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1} direction="up">
            <div className="mt-12 rounded-3xl border border-[#e6e0d6] bg-[#fffcf8] overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-[#d4a017] to-[#d4af5a]" />
              <div className="p-8 sm:p-12">
                <p className="text-xs font-bold uppercase tracking-widest text-[#d4a017]">Our ethics</p>
                <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-[#000] leading-snug">
                  A cooperative built on trust,<br className="hidden sm:block" /> transparency, and shared responsibility.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5d6f68]">
                  Waliin SACCO Ltd holds every member, leader, and employee to a clear ethical standard. These values are not aspirational — they are operational.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "Honesty", desc: "We communicate truthfully with members, partners, and regulators — no hidden fees, no misleading terms." },
                    { title: "Transparency", desc: "Financial records, loan decisions, and dividend distributions are open and accessible to every member." },
                    { title: "Accountability", desc: "Leaders and staff are answerable to the membership. Annual audits and member assemblies enforce this." },
                    { title: "Participation", desc: "Every member has an equal vote. Active participation in cooperative decisions is encouraged and protected." },
                    { title: "Social Responsibility", desc: "We invest in the economic wellbeing of Holeta and surrounding communities through inclusive credit and financial literacy." },
                    { title: "Consideration for Others", desc: "We design products and policies with empathy — recognising that members have diverse needs and circumstances." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 rounded-2xl bg-[#f5f3ef] p-5 hover:bg-[#ead9a8]/30 transition-colors">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d4a017]" />
                      <div>
                        <p className="text-sm font-bold text-[#000]">{item.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-[#5d6f68]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section id="leadership" className="bg-[#fffcf8] py-20">
        <Container>
          <ScrollReveal>
            <SectionHeader
              title="Our leadership"
              description="Professionals stewarding Waliin SACCO Ltd on behalf of members."
            />
          </ScrollReveal>
          <div className="mt-14 flex justify-center">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.08}>
                <div className="rounded-2xl border border-[#e6e0d6] bg-white p-8 text-center w-56 shadow-sm">
                  <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-2 border-[#d4a017]">
                    <img src={logo} alt={person.name} className="h-full w-full object-cover" />
                  </div>
                  <p className="mt-4 font-bold text-base">{person.name}</p>
                  <p className="mt-1 text-sm text-[#5d6f68]">{person.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
