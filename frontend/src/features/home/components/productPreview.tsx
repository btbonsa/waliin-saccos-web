import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../../data/services";
import Container from "../../../components/ui/container";
import SectionHeader from "../../../components/ui/section-header";
import ScrollReveal from "../../../components/ui/ScrollReveal";

export default function ProductPreview() {
  const featured = SERVICES.slice(0, 6);

  return (
    <section className="bg-white py-20 sm:py-24">
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
                className="group flex flex-col rounded-4xl shadow shadow-lg bg-white p-5 sm:p-6 transition-shadow hover:shadow-[0_12px_40px_rgba(18,36,30,0.06)]"
              >
                <service.icon className="mb-4 h-11 w-11 p-2 text-green-900 bg-green-200 rounded-full grou" strokeWidth={1.75}  />
                <p className="text-md font-bold text-gray-500">{service.subtitle}</p>
                <h3 className="mt-1 mb-2 text-lg sm:text-xl font-bold text-black">{service.title}</h3>
                <p className="mb-5 flex-1 text-md leading-relaxed text-muted">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-green-900 transition-transform hover:translate-x-0.5 border border-gray-300 bg-gray-100/10 border-[1px] shadow rounded-full w-max px-3 py-2">
                  Learn more
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex h-11 items-center rounded-full bg-yellow-500 px-6 text-lg text-white hover:bg-yellow-500 hover:text-white hover:brightness-105 transition-all">
            See all products
          </Link>
        </div>
      </Container>
    </section>
  );
}
