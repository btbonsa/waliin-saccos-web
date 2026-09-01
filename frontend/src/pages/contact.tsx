import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "../features/contact/components/contactForm";
import ScrollReveal from "../components/ui/ScrollReveal";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "44, Holeta, Ethiopia" },
  { icon: Phone, label: "Phone", value: "0911 915 610" },
  { icon: Mail, label: "Email", value: "hailudelesa16@gmail.com" },
  { icon: Clock, label: "Working Hours", value: "Mon – Fri, 8:00 AM – 5:00 PM" },
];

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-gray-50/50">
      {/* Hero */}
      <section className="w-full bg-emerald-950 py-20 px-4 text-center relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amber-500/8 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/8 blur-3xl" />
        </div>
        <div className="relative space-y-4">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="inline-block text-xs font-bold tracking-[0.2em] text-amber-400/90 uppercase">
            Reach Out
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-emerald-100/70 text-base sm:text-lg max-w-xl mx-auto">
            Have a question or want to become a member? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <ScrollReveal direction="left" className="mb-8">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase">Contact Info</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mt-2">We're Here to Help</h2>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Reach out through any of the channels below and our team will get back to you promptly.
              </p>
            </ScrollReveal>

            {contactInfo.map((info, i) => (
              <ScrollReveal key={i} delay={i * 0.08} direction="left">
                <div className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-gray-200 transition-all duration-200">
                  <div className="p-2.5 bg-emerald-50 rounded-xl shrink-0">
                    <info.icon className="h-5 w-5 text-emerald-800" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{info.label}</p>
                    <p className="text-sm font-semibold text-gray-900 mt-1">{info.value}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Form */}
          <ScrollReveal direction="right" delay={0.1} className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-10 shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase">Message Us</span>
                <h2 className="text-2xl font-extrabold text-gray-900 mt-2">Send Us a Message</h2>
                <p className="text-sm text-gray-500 mt-2">Fill in the form and we'll respond within 24 hours.</p>
              </div>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
