import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import ContactForm from "../features/contact/components/contactForm";
import Container from "../components/ui/container";
import ScrollReveal from "../components/ui/ScrollReveal";
import banner from "../assets/banner.png";
import { useLang } from "../context/LanguageContext";
import type { TranslationKey } from "../context/LanguageContext";

const INFO: { icon: React.ElementType; label: TranslationKey; value: string }[] = [
  { icon: MapPin, label: "officeAddressLabel", value: "Holeta 44 Around Vision Fund micro finance, Ethiopia" },
  { icon: Phone, label: "phoneLabel", value: "+251 911 915 610/+251 911 02 59 46" },
  { icon: Mail, label: "emailLabel", value: "hailudelesa16@gmail.com" },
  { icon: Clock, label: "workingHoursLabel", value: "Mon – sat, 8:00 AM – 5:00 PM" },
];

export default function Contact() {
  const { t } = useLang();
  return (
    <div className="bg-white">

      <section className="relative overflow-hidden" style={{ height: 420 }}>
        <motion.img
          src={banner}
          alt=""
          initial={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e241d]/95 via-[#0e241d]/60 to-[#0e241d]/30" />
        <div className="absolute top-0 inset-x-0 h-[3px] bg-[#d4a017]" />

        <Container className="relative flex h-full flex-col justify-end pb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-xs font-bold uppercase tracking-widest text-[#d4af5a]"
          >
            {t("contactEyebrow")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 }}
            className="text-3xl sm:text-5xl font-bold text-white leading-tight max-w-2xl"
          >
            {t("contactTitle")}<br className="hidden sm:block" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="mt-3 max-w-lg text-sm leading-relaxed text-white/60"
          >
            {t("contactDescription")}
          </motion.p>
        </Container>
      </section>

      {/* ── Main content ── */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-5 lg:gap-16">

          {/* Left — info */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal direction="left">
              <p className="text-xs font-bold uppercase tracking-widest text-[#d4a017]">{t("contactInfoLabel")}</p>
              <h2 className="mt-2 text-2xl font-bold text-[#0e241d]">{t("contactGetInTouch")}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#5d6f68]">
                {t("contactDescription")}
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {INFO.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.07} direction="left">
                  <div className="flex items-start gap-4 rounded-2xl border border-[#e6e0d6] bg-white p-5 group hover:border-[#d4a017]/40 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f7f5f0] group-hover:bg-[#d4a017] transition-colors">
                      <item.icon className="h-5 w-5 text-[#d4a017] group-hover:text-white transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#5d6f68]">{t(item.label)}</p>
                      <p className="mt-1 text-sm font-semibold text-[#0e241d] break-words">{item.value}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA card */}
            <ScrollReveal direction="left" delay={0.3}>
              <div className="rounded-2xl bg-[#0e241d] p-6 text-white">
                <p className="text-sm font-bold">{t("wantToBecomeMember")}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/60">
                  {t("joinWaliin")}
                </p>
                <a
                  href="#contact-form"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#d4af5a] hover:text-[#d4a017] transition-colors"
                >
                  {t("applyNow")} <ArrowRight size={13} />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — form */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <div id="contact-form" className="rounded-2xl border border-[#e6e0d6] bg-white p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-[#0e241d]">{t("sendUsMessage")}</h2>
              <p className="mt-1 mb-8 text-sm text-[#5d6f68]">
                {t("contactResponseNote")}
              </p>
              <ContactForm />
            </div>
          </ScrollReveal>

        </Container>
      </section>

      {/* ── Map strip ── */}
      <section className="border-t border-[#e6e0d6]">
        <iframe
          title="Waliin SACCO location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3939.978626105592!2d38.48894107461388!3d9.065711288414072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDMnNTYuNSJOIDM4wrAyOScyOS41IkU!5e0!3m2!1sen!2set!4v1792258599103!5m2!1sen!2set"
          width="100%"
          height="340"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}

