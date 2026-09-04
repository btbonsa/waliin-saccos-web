import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../data/services";
import banner1 from "../assets/banner1.png";
import PageHero from "../components/ui/page-hero";
import Container from "../components/ui/container";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="What we offer"
        title="Savings and loans"
        description="Waliin SACCO Ltd serves members with clear terms, consistent savings, and credit that matches real household and business needs."
        image={banner1}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {SERVICES.map((service, i) => (
              <ScrollReveal
                key={service.id}
                delay={(i % 3) * 0.07}
                className="w-full max-w-[340px] sm:max-w-[320px] lg:max-w-[340px]"
              >
                <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-yellow-500/40 hover:shadow-xl">
                  {/* Top accent line */}
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-yellow-500 transition-transform duration-300 group-hover:scale-x-100" />

                  {/* Icon */}
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-white group-hover:shadow-md">
                    <service.icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {service.subtitle}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <Link
                      to={`/services/${service.id}`}
                      className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-yellow-500 px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-yellow-600 hover:shadow-md group-hover:gap-3"
                    >
                      View details
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}