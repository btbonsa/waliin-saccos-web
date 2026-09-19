import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { getServices } from "../data/services";
import banner1 from "../assets/banner1.png";
import PageHero from "../components/ui/page-hero";
import Container from "../components/ui/container";
import ScrollReveal from "../components/ui/ScrollReveal";
import { useLang } from "../context/LanguageContext";

export default function ServicesPage() {
  const { lang, t } = useLang();
  const services = getServices(lang);
  return (
    <div className="bg-[#f7f5f0]">
      <PageHero
        eyebrow={t("whatWeOffer")}
        title={t("servicesTitle")}
        description={t("servicesDescription")}
        image={banner1}
      />

      <section className="py-16 sm:py-24">
        <Container>
          {/* Section label */}
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-[#d4a017]">
                {t("whatWeOffer")}
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0e241d]">
                {t("savingsLoanProducts")}
              </h2>
              <p className="mt-2 text-sm text-[#5d6f68] max-w-xl mx-auto">
                {t("servicesIntro")}
              </p>
            </div>
          </ScrollReveal>

          {/* Cards grid — slightly larger cards + more breathing room */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.id} delay={(i % 4) * 0.07}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 280, damping: 20 }}
                    className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300"
                    style={{ height: 360 }} // was 300 → larger cards
                  >
                    {/* Background image */}
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#0e241d]" />
                    )}

                    {/* Gradient overlay — deepens a bit more on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e241d]/95 via-[#0e241d]/55 to-[#0e241d]/15 transition-opacity duration-300 group-hover:opacity-95" />

                    {/* Top accent bar */}
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d4a017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                    {/* Icon */}
                    <div className="absolute top-6 left-6 z-10">
                      <motion.div
                        whileHover={{ scale: 1.12, rotate: 4 }}
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4a017]/90 backdrop-blur-sm shadow-md group-hover:scale-110 transition-transform duration-300"
                      >
                        <Icon
                          className="h-6 w-6 text-white"
                          strokeWidth={1.75}
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#d4af5a] mb-1.5">
                        {service.subtitle}
                      </p>

                      <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#f5e6b8] transition-colors duration-300">
                        {service.title}
                      </h3>
                      {/* CTA row */}
                      <div className="mt-5 flex items-center justify-between">
                        <Link
                          to={`/services/${service.id}`}
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#d4af5a] hover:text-white transition-colors"
                        >
                          {t("learnMore")}
                          <motion.span
                            className="inline-block"
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ArrowRight size={14} />
                          </motion.span>
                        </Link>

                        <Link
                          to="/login"
                          className="inline-flex h-8 items-center rounded-full bg-[#d4a017] px-4 text-xs font-bold text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#d4af5a] hover:scale-105 active:scale-95"
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

          {/* Bottom CTA */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 flex flex-col items-center gap-3 text-center">
              <p className="text-sm text-[#5d6f68]">
                {t("unsureProduct")}
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-yellow-500 px-8 text-sm font-bold text-white hover:bg-[#16382e] transition-colors"
                >
                  {t("talkToUs")}
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}