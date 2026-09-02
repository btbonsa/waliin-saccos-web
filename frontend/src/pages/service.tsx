import { Link } from "react-router-dom";
import { SERVICES } from "../data/services";
import banner1 from "../assets/banner1.png";
import PageHero from "../components/ui/page-hero";
import Container from "../components/ui/container";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="What we offer"
        title="Savings and loans"
        description="Waliin SACCO Ltd serves members with clear terms, consistent savings, and credit that matches real household and business needs."
        image={banner1}
      />

      <section className="bg-cream py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.id} delay={(i % 3) * 0.08}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-paper p-7">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-forest">
                    <service.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <p className="text-xs font-bold text-gold">{service.subtitle}</p>
                  <h3 className="mt-1 text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-3 mb-6 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-forest text-sm font-bold text-white hover:bg-forest-deep"
                  >
                    View details
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
