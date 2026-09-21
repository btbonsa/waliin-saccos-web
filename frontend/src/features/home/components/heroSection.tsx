import { Link } from "react-router-dom";
import banner from "../../../assets/banner.png";
import Container from "../../../components/ui/container";
import { useLang } from "../../../context/LanguageContext";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden min-h-screen">
      <img
        src={banner}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e241d]/60 via-[#0e241d]/70 to-[#0e241d]/90" />

      <Container className="relative flex flex-col justify-center min-h-screen py-24">
        <div className="max-w-2xl space-y-6">

          {/* Eyebrow */}
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#d4af5a]">
            {t("est2026")}
          </span>

          {/* Headline with cycling word */}
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Waliin Madda{" "}
            <span className="text-[#d4af5a]">Guddina!</span>
          </h1>

          {/* Tagline */}
          <p className="text-base text-white/65 sm:text-lg leading-relaxed">
            {t("tagline")}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <div>
              <Link
                to="/login"
                className="inline-flex h-12 items-center rounded-full bg-[#d4a017] px-7 text-sm font-bold text-white tracking-wide hover:bg-[#d4af5a] transition-colors"
              >
                {t("becomeMember")}
              </Link>
            </div>
            <div>
              <Link
                to="/services"
                className="inline-flex h-12 items-center rounded-full border border-white/25 px-7 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                {t("viewProducts")}
              </Link>
            </div>
          </div>
        </div>

        {/* Floating stats badge */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden flex-col gap-3 lg:flex">
          {[
            { value: "250+", label: "Members" },
            { value: "5M+",  label: "ETB Saved" },
            { value: "7%",   label: "Interest" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-center backdrop-blur-md"
            >
              <p className="text-xl font-bold text-[#d4af5a]">{s.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-white/60">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1">
          <span className="text-[10px] tracking-widest uppercase text-white/40">{t("scroll")}</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
