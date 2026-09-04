import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "../features/contact/components/contactForm";
import PageHero from "../components/ui/page-hero";
import Container from "../components/ui/container";
import ScrollReveal from "../components/ui/ScrollReveal";

const contactInfo = [
  { icon: MapPin, label: "Office Address", value: "Holeta 44 Gamoo Jalala Cafe Harmonay Gubba, Biroo 204, Ethiopia" },
  { icon: Phone, label: "Phone", value: "+251 911 915 610" },
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

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-5 lg:gap-20">
          <div className="space-y-6 lg:col-span-2">
            <ScrollReveal direction="left">
              <p className="text-lg font-bold uppercase tracking-widest text-[#d4a017]">Contact</p>
            </ScrollReveal>
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.label} delay={i * 0.06} direction="left">
                <div className="flex items-start gap-4 rounded-2xl">
                  <div className="rounded-full bg-[#f5f3ef] p-3 shrink-0">
                    <info.icon className="h-5 w-5 text-[#d4a017]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-md font-bold text-[#5d6f68]">{info.label}</p>
                    <p className="mt-1 text-md break-words text-[#000]">{info.value}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="rounded-3xl shadow-lg bg-white p-10 sm:p-12 w-140">
              <h2 className="text-2xl sm:text-3xl font-bold text-ink">Send us a message</h2>
              <p className="mt-2 mb-8 text-sm text-muted">We aim to respond to all inquiries within 24 business hours.</p>
              <ContactForm />
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
