import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import HeroSection from '../features/home/components/heroSection';
import Stats from '../features/home/components/stats';
import { Button } from '../components/ui/button';

function Home() {
  const whyChooseUs = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-amber-500" />,
      title: "Secure & Transparent",
      desc: "Guaranteed cooperative financial oversight with regular member-led audits and annual dividends.",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-500" />,
      title: "Member-Owned Community",
      desc: "Every member holds equal voting authority and directly shapes our lending priorities.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-amber-500" />,
      title: "Flexible Credit Options",
      desc: "Tailored business development, agricultural, and personal credit lines with competitive interest rates.",
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-12 bg-gray-50/50">
      {/* Hero & Stats Section */}
      <HeroSection />
      <Stats />

      {/* Partner With Us Section */}
      <section className="w-full py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Text & Action Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-emerald-950">
                Partner With Us
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  We welcome partnerships with foundations, development organizations,
                  corporate social responsibility programs, philanthropists, and
                  institutions committed to inclusive economic development.
                </p>

                <p>
                  Together, we can expand access to financial literacy, empower emerging
                  entrepreneurs, support young people transitioning from alternative
                  care, and build stronger communities through sustainable financial
                  inclusion.
                </p>

                <p className="font-medium text-emerald-900">
                  Every partnership helps create opportunities that endure long after a
                  project ends.
                </p>
              </div>

              <div className="pt-2">
                <Button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/10 transition-all duration-200 hover:scale-105 inline-flex items-center gap-2">
                  <span>Get in touch</span>
                  <ArrowRight size={18} />
                </Button>
              </div>
            </motion.div>

            {/* Shareholders & Visual Focus Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center rounded-3xl border border-emerald-900/10 bg-emerald-950/5 p-6 sm:p-8 space-y-6"
            >
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-800">
                Shareholders & Institutions
              </span>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Community-Driven Equity
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our shareholders represent a strong network of dedicated cooperative members and regional economic partners driving sustainable wealth distribution across Ethiopia.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-gray-100 text-xs font-semibold text-emerald-800">
                  <span>100% Member Transparency</span>
                  <span className="text-amber-600">Annual Dividends &rarr;</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose Waliin SACCOS Section */}
      <section className="w-full border-y border-gray-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-emerald-950">
              Why Choose Waliin SACCOS?
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Empower your future with transparent cooperative banking built around member success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="bg-gray-50/70 p-6 sm:p-8 rounded-2xl border border-gray-200/80 hover:border-amber-400/50 hover:shadow-md transition duration-200 space-y-4"
              >
                <div className="p-3 bg-amber-500/10 w-fit rounded-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;