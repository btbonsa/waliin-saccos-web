import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { getServices } from "../../../data/services";
import Container from "../../../components/ui/container";
import ScrollReveal from "../../../components/ui/ScrollReveal";
import { useLang } from "../../../context/LanguageContext";

export default function ProductPreview() {
  const { lang, t } = useLang();
  const products = getServices(lang).slice(0, 3);
  return (
    <section className="bg-[#f7f5f0] py-20 sm:py-28">
      <Container>
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#d4a017] mb-2">
                {t("productsLabel")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0e241d] leading-tight">
                {t("productsTitle")}
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[#e6e0d6] px-6 text-sm font-bold text-[#0e241d] hover:bg-white transition-colors shrink-0"
            >
              {t("seeAllProducts")} <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {products.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative overflow-hidden rounded-2xl"
                  style={{ height: 420 }}
                >
                  {/* Clickable image area */}
                  <Link to={`/services/${service.id}`} className="absolute inset-0 z-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                    />

                    {/* Base overlay — always visible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e241d]/90 via-[#0e241d]/40 to-transparent" />

                    {/* Hover overlay — darkens slightly */}
                    <div className="absolute inset-0 bg-[#0e241d]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Gold top accent line */}
                    <div className="absolute top-0 inset-x-0 h-[3px] bg-[#d4a017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  </Link>

                  {/* Icon badge */}
                  <div className="absolute top-5 left-5 z-10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4a017] shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                    {/* Subtitle */}
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#d4af5a] mb-1">
                      {service.subtitle}
                    </p>

                    {/* Title — always visible */}
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {service.title}
                    </h3>

                    {/* Description — slides up on hover */}
                    <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <p className="mt-2 text-sm leading-relaxed text-white/70 line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    {/* CTA row */}
                    <div className="mt-4 flex items-center gap-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      <Link
                        to="/contact"
                        className="inline-flex h-8 items-center rounded-full border border-white/30 px-4 text-xs font-bold text-white hover:bg-white/10 transition-colors"
                      >
                        {t("apply")}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
