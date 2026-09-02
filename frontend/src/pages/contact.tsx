import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "../features/contact/components/contactForm";
import PageHero from "../components/ui/page-hero";
import Container from "../components/ui/container";
import ScrollReveal from "../components/ui/ScrollReveal";

const contactInfo = [
  { icon: MapPin, label: "Office Address", value: "Holeta 44 Gamoo Jalala Cafe harmonay Gubba, lak.Biroo 204 , Ethiopia, ሜክሲኮ ሠንጋተራ ነጋዴዎች ማህበር ህንፃ 8ኛ ፎቅ የቢሮ ቁጥር 8B-007" },
  { icon: Phone, label: "Phone", value: " +251 911 915 610" },
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

      <section className="bg-white py-20 sm:py-24 flex" >
        <Container className="grid gap-10 lg:grid-cols-5 lg:gap-20 xl:ml-58">
          <div className="space-y-4 lg:col-span-2 ">
            <ScrollReveal direction="left" className="mb-6">
              <p className="text-sm font-bold text-gold">Contact</p>

            </ScrollReveal>
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.label} delay={i * 0.06} direction="left">
                <div className="flex items-start gap-4 sm:gap-10 rounded-2xl">
                  <div className="rounded-full bg-gray-100 p-3 shrink-0">
                    <info.icon className="h-8 w-8 text-yellow-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-2xl font-bold text-muted">{info.label}</p>
                    <p className="mt-1 text-xl max-w-sm break-words">{info.value}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="right" className="lg:col-span-3 max-w-lg shadow shadow-md rounded rounded-4xl bg-blue-100/30 xl:ml-20 h-xl">
            <div className="rounded-2xl p-8 sm:p-10">
              <h2 className="mt-2 text-4xl font-bold ">Send us a Message</h2>
              <p className="mt-2 mb-8 text-sm text-muted">We aim to respond to all inquiries within 24 business hours.</p>
              <ContactForm />
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}