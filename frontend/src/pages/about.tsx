import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Target, Eye } from "lucide-react";
import PageHero from "../components/ui/page-hero";
import Container from "../components/ui/container";
import SectionHeader from "../components/ui/section-header";
import FeatureCard from "../components/ui/feature-card";
import ScrollReveal from "../components/ui/ScrollReveal";
import hailuImage from "../assets/hailu.png";
import { useLang } from "../context/LanguageContext";

const leadership = [
  { name: "Hailu Delesa", role: "Chairman", image: hailuImage },
];

const coreValues = [
  {
    value: "Equality",
    icon: "⚖️",
    desc: "All members have the same rights and responsibilities within the organization.",
  },
  {
    value: "Solidarity",
    icon: "🤝",
    desc: "Members stand united and support one another through shared common goals.",
  },
  {
    value: "Self-help",
    icon: "💪",
    desc: "Members rely on their own efforts and capabilities to improve their lives.",
  },
  {
    value: "Self-responsibility",
    icon: "🎯",
    desc: "Individuals take personal accountability for the group's success and well-being.",
  },
  {
    value: "Democracy",
    icon: "🗳️",
    desc: "Members have an equal voice in running the cooperative.",
  },
];

const ethicalValues = [
  { value: "Honesty", icon: "🤝" },
  { value: "Transparency", icon: "🔍" },
  { value: "Accountability", icon: "⚖️" },
  { value: "Participation", icon: "🗳️" },
  { value: "Social Responsibility", icon: "🌱" },
  { value: "Consideration for Others", icon: "💛" },
];

const missionVision = [
  {
    icon: Target,
    title: "Our Vision",
    description:
      "By the year 2030 E.C, the members will be middle-income, entrepreneurs, and be freed from poverty.",
  },
  {
    icon: Eye,
    title: "Our Mission",
    description:
      "To meet the fundamental needs of members by providing convenient, accessible, and efficient financial services, while building a sustainable and inclusive financial institution through a skilled and ethically grounded workforce, the use of modern technology, and continuous public awareness creation.",
  },
];

export default function About() {
  const { t } = useLang();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [hash]);

  return (
    <div>
      <PageHero
        eyebrow={t("ourStory")}
        title={t("aboutTitle")}
        description={t("aboutDescription")}
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
      />

      {/* Mission & Vision */}
      <section id="mission" className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeader eyebrow={t("purpose")} title={t("missionAndVisionTitle")} />
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:mt-14">
            {missionVision.map((card, i) => (
              <ScrollReveal
                key={card.title}
                delay={i * 0.1}
                direction={i === 0 ? "left" : "right"}
              >
                <FeatureCard {...card} className="h-full min-h-[280px] sm:min-h-[320px]" />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Core & Ethical Values */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow={t("whatWeStandFor")}
              title={t("coreEthicalValuesTitle")}
              description={t("coreValuesDescription")}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="up">
            <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-sm sm:mt-12 sm:rounded-3xl">
              {/* Accent bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400" />

              <div className="p-6 sm:p-8 lg:p-12">
                {/* Core Values */}
                <div>
                  <h3 className="text-lg font-bold text-ink sm:text-xl">
                    {t("ourCoreValues")}
                  </h3>
                  <p className="mt-1 text-md text-black">
                    {t("coreValuesDescription")}
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {coreValues.map((v) => (
                      <div
                        key={v.value}
                        className="flex flex-col gap-2 rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-4 transition-colors hover:bg-yellow-100 sm:px-5"
                      >
                        <span className="text-2xl" aria-hidden="true">
                          {v.icon}
                        </span>
                        <p className="text-sm font-bold text-yellow-800">
                          {v.value}
                        </p>
                        <p className="text-xs leading-relaxed text-black">
                          {v.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ethical Values */}
                <div className="mt-10 sm:mt-12">
                  <h3 className="text-lg font-bold text-ink sm:text-xl">
                    {t("ethicalValues")}
                  </h3>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                    {ethicalValues.map((v) => (
                      <div
                        key={v.value}
                        className="flex flex-col items-center gap-2 rounded-2xl border border-yellow-200 bg-yellow-50 px-3 py-4 text-center transition-colors hover:bg-yellow-100 sm:px-4 sm:py-5"
                      >
                        <span className="text-2xl" aria-hidden="true">
                          {v.icon}
                        </span>
                        <span className="text-xs font-bold leading-snug text-yellow-800">
                          {v.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeader
              title={t("leadershipTitle")}
              description={t("leadershipDescription")}
            />
          </ScrollReveal>

          <div className="mt-10 flex justify-center sm:mt-12">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.08}>
                <div className="w-full max-w-xs rounded-2xl bg-white p-6 text-center shadow-lg sm:p-8">
                  <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-2 border-yellow-400 sm:h-24 sm:w-24">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-base font-bold text-ink sm:text-lg">
                    {person.name}
                  </p>
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