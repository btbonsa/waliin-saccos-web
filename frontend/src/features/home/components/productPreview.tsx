import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SERVICES } from "../../../data/services";
import Container from "../../../components/ui/container";
import SectionHeader from "../../../components/ui/section-header";
import ScrollReveal from "../../../components/ui/ScrollReveal";

function ProductCard({
  service,
  className = "",
  imgClass = "",
}: {
  service: (typeof SERVICES)[0];
  className?: string;
  imgClass?: string;
}) {
  const [active, setActive] = useState(false);
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.id}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setTimeout(() => setActive(false), 1200)}
      className={`group relative flex flex-col overflow-hidden rounded-3xl shadow-lg transition-all duration-500 ease-out ${
        active ? "scale-[1.03] shadow-2xl" : "scale-100"
      } ${className}`}
    >
      {/* image */}
      {service.image ? (
        <img
          src={service.image}
          alt={service.title}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${
            active ? "scale-110" : "scale-100"
          } ${imgClass}`}
        />
      ) : (
        <div className="absolute inset-0 bg-forest-deep" />
      )}

      {/* gradient overlay — darker on active */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${
          active ? "opacity-95" : "opacity-70"
        }`}
      />

      {/* top badge */}
      <div className="absolute left-4 top-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-yellow-400/90 backdrop-blur-sm">
          <Icon className="h-4 w-4 text-forest-deep" strokeWidth={2} />
        </div>
        <span className="rounded-full bg-black/40 px-2.5 py-0.5 text-xs font-bold text-white/80 backdrop-blur-sm">
          {service.subtitle}
        </span>
      </div>

      {/* bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-base font-bold text-white leading-snug">{service.title}</h3>

        {/* description — hidden until active */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            active ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-xs leading-relaxed text-white/80">{service.description}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-yellow-400">
            Learn more <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProductPreview() {
  const [center, left, right] = SERVICES.slice(0, 3);

  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Products"
            title="Savings and loans for real life"
            description="Engage in different saving types and take a loan based on your choice among the products designed for members of Waliin SACCO Ltd."
          />
        </ScrollReveal>

        {/* Desktop layout */}
        <div className="mt-14 hidden sm:flex flex-col items-center gap-5">
          {/* center card — full width, tallest */}
          <ScrollReveal className="w-full max-w-2xl">
            <ProductCard service={center} className="h-[480px] w-full" />
          </ScrollReveal>

          {/* two side cards below, side by side */}
          <div className="flex w-full max-w-2xl gap-5">
            <ScrollReveal delay={0.08} className="flex-1">
              <ProductCard service={left} className="h-[320px] w-full" />
            </ScrollReveal>
            <ScrollReveal delay={0.14} className="flex-1">
              <ProductCard service={right} className="h-[320px] w-full" />
            </ScrollReveal>
          </div>
        </div>

        {/* Mobile layout — stacked */}
        <div className="mt-14 flex flex-col gap-5 sm:hidden">
          {[center, left, right].map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.07}>
              <ProductCard service={service} className="h-72 w-full" />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-yellow-500 px-7 text-sm font-bold text-white hover:brightness-105 transition-all"
            >
              See all products
              <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
