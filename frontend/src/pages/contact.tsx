import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "../features/contact/components/contactForm";
import PageHero from "../components/ui/page-hero";
import Container from "../components/ui/container";
import ScrollReveal from "../components/ui/ScrollReveal";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "44, Holeta, Ethiopia" },
  { icon: Phone, label: "Phone", value: "0911 915 610" },
  { icon: Mail, label: "Email", value: "hailudelesa16@gmail.com" },
  { icon: Clock, label: "Working hours", value: "Mon – Fri, 8:00 AM – 5:00 PM" },
];

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Reach out"
        title="A cooperative that has your back"
        description="Questions about membership, savings, or loans? Visit us in Holeta or send a message."
      />

      <section className="bg-cream py-20">
        <Container className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="space-y-4 lg:col-span-2">
            <ScrollReveal direction="left" className="mb-6">
              <p className="text-sm font-bold text-gold">Contact</p>
              <h2 className="mt-2 text-2xl font-bold text-ink">We are here to help</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Reach us through any of the channels below. Our team typically replies within one working day.
              </p>
            </ScrollReveal>
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.label} delay={i * 0.06} direction="left">
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-5">
                  <div className="rounded-xl bg-cream p-2.5">
                    <info.icon className="h-5 w-5 text-forest" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted">{info.label}</p>
                    <p className="mt-1 text-sm font-bold text-ink">{info.value}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="rounded-2xl border border-line bg-paper p-8 sm:p-10">
              <p className="text-sm font-bold text-gold">Message</p>
              <h2 className="mt-2 text-2xl font-bold text-ink">Send us a note</h2>
              <p className="mt-2 mb-8 text-sm text-muted">Tell us how we can help. We will respond within 24 hours.</p>
              <ContactForm />
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
