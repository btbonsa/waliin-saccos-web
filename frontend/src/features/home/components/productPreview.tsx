import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SERVICES } from "../../../data/services";
import Container from "../../../components/ui/container";
import SectionHeader from "../../../components/ui/section-header";
import ScrollReveal from "../../../components/ui/ScrollReveal";

type Service = (typeof SERVICES)[number];

interface ProductCardProps {
  service: Service;
  className?: string;
}

function ProductCard({ service, className = "" }: ProductCardProps) {
  const [isActive, setIsActive] = useState(false);
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.id}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setTimeout(() => setIsActive(false), 1400)}
      className={`
        group relative flex flex-col overflow-hidden rounded-3xl
        bg-forest-deep shadow-lg ring-1 ring-black/5
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:shadow-2xl hover:ring-black/10
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2
        ${isActive ? "scale-[1.025] shadow-2xl" : "scale-100"}
        ${className}
      `}
    >
      {/* Background image */}
      {service.image ? (
        <img
          src={service.image}
          alt=""
          className={`
            absolute inset-0 h-full w-full object-cover
            transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isActive ? "scale-110" : "scale-100"}
          `}
        />
      ) : (
        <div className="absolute inset-0 bg-forest-deep" />
      )}

      {/* Gradient overlay */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10
          transition-opacity duration-500
          ${isActive ? "opacity-95" : "opacity-75"}
        `}
      />

      {/* Top badge */}
      <div className="absolute left-4 top-4 z-10 flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-yellow-400 shadow-sm">
          <Icon className="h-4.5 w-4.5 text-forest-deep" strokeWidth={2.25} />
        </div>
        <span className="rounded-full bg-black/50 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/90 backdrop-blur-md">
          {service.subtitle}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
        <h3 className="text-[15px] font-bold leading-snug tracking-tight text-white sm:text-base">
          {service.title}
        </h3>

        <div
          className={`
            overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isActive ? "mt-2.5 max-h-36 opacity-100" : "mt-0 max-h-0 opacity-0"}
          `}
        >
          <p className="text-[13px] leading-relaxed text-white/80">
            {service.description}
          </p>
          <span className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400">
            Learn more
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProductPreview() {
  const [featured, secondary, tertiary] = SERVICES.slice(0, 3);

  return (
    <section className="bg-gray-50/80 py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Products"
            title="Savings and loans for real life"
            description="Engage in different saving types and take a loan based on your choice among the products designed for members of Waliin SACCO Ltd."
          />
        </ScrollReveal>

        {/* Desktop */}
        <div className="mt-14 hidden flex-col items-center gap-5 sm:flex">
          <ScrollReveal className="w-full max-w-2xl">
            <ProductCard service={featured} className="h-[480px] w-full" />
          </ScrollReveal>

          <div className="flex w-full max-w-2xl gap-5">
            <ScrollReveal delay={0.08} className="flex-1">
              <ProductCard service={secondary} className="h-[320px] w-full" />
            </ScrollReveal>
            <ScrollReveal delay={0.14} className="flex-1">
              <ProductCard service={tertiary} className="h-[320px] w-full" />
            </ScrollReveal>
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-12 flex flex-col gap-4 sm:hidden">
          {[featured, secondary, tertiary].map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.06}>
              <ProductCard service={service} className="h-72 w-full" />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.18}>
          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="
                inline-flex h-12 items-center gap-2 rounded-full
                bg-yellow-500 px-8 text-sm font-bold text-white
                shadow-md shadow-yellow-500/25
                transition-all duration-300
                hover:brightness-105 hover:shadow-lg hover:shadow-yellow-500/30
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2
              "
            >
              See all products
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}