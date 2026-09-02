import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../../data/services";
import Container from "../../../components/ui/container";
import SectionHeader from "../../../components/ui/section-header";
import ScrollReveal from "../../../components/ui/ScrollReveal";

export default function ProductPreview() {
  const featured = SERVICES.slice(0, 6);

  return (
    <section className="bg-paper py-20 sm:py-24">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Products"
            title="Savings and loans for real life"
            description="From household savings to housing, trade, and bajaj finance — each product is designed for members of Waliin SACCO Ltd."
          />
        </ScrollReveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.06}>
              <Link
                to={`/services/${service.id}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-cream/50 p-6 transition-shadow hover:shadow-[0_12px_40px_rgba(18,36,30,0.06)]"
              >
                <service.icon className="mb-4 h-6 w-6 text-forest" strokeWidth={1.75} />
                <p className="text-xs font-bold text-gold">{service.subtitle}</p>
                <h3 className="mt-1 mb-2 text-lg font-bold text-ink">{service.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-forest">
                  Learn more
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex h-11 items-center rounded-full bg-forest px-6 text-sm font-bold text-white hover:bg-forest-deep">
            See all products
          </Link>
        </div>
      </Container>
    </section>
  );
}
