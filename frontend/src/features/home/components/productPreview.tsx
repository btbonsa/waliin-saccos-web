import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { SERVICES } from "../../../data/services";
import Container from "../../../components/ui/container";
import SectionHeader from "../../../components/ui/section-header";
import ScrollReveal from "../../../components/ui/ScrollReveal";

export default function ProductPreview() {
  const featured = SERVICES.slice(0, 3);

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

        <div className="mt-14 hidden sm:flex gap-5 items-end">
          {featured.map((service, i) => {
            const Icon = service.icon;
            const isCenter = i === 1;
            return (
              <ScrollReveal key={service.id} delay={i * 0.07} className={isCenter ? "flex-[1.35]" : "flex-1"}>
                <Link
                  to={`/services/${service.id}`}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl shadow-md transition-transform duration-500 ease-out hover:-translate-y-4 ${
                    isCenter ? "h-[560px]" : "h-[460px]"
                  }`}
                >
                  {/* background image with zoom on hover */}
                  {service.image ? (
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-forest-deep" />
                  )}

                  {/* dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                  {/* top-left icon badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400/90 backdrop-blur-sm"
                    >
                      <Icon className="h-4 w-4 text-forest-deep" strokeWidth={2} />
                    </motion.div>
                    <span className="rounded-full bg-black/40 px-2.5 py-0.5 text-xs font-bold text-white/80 backdrop-blur-sm">
                      {service.subtitle}
                    </span>
                  </div>

                  {/* bottom content — slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-base font-bold text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/70 line-clamp-2 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                      {service.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn more
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* mobile: stacked single column */}
        <div className="mt-14 flex flex-col gap-5 sm:hidden">
          {featured.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.id} delay={i * 0.07}>
                <Link
                  to={`/services/${service.id}`}
                  className="group relative flex h-80 flex-col overflow-hidden rounded-2xl shadow-md transition-transform duration-500 hover:-translate-y-2"
                >
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-forest-deep" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400/90">
                      <Icon className="h-4 w-4 text-forest-deep" strokeWidth={2} />
                    </div>
                    <span className="rounded-full bg-black/40 px-2.5 py-0.5 text-xs font-bold text-white/80">{service.subtitle}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-base font-bold text-white">{service.title}</h3>
                    <p className="mt-1 text-xs text-white/70 line-clamp-2">{service.description}</p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
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
