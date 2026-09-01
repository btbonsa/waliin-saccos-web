import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HandCoins, UserRoundSearch, Building2, Home, BadgeEuro, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaCaravan, FaTruckFront } from "react-icons/fa6";
import type { IconType } from "react-icons";
import banner1 from "../assets/banner1.png";
import ScrollReveal from "../components/ui/ScrollReveal";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: LucideIcon | IconType;
}

const SERVICES_DATA: ServiceItem[] = [
  { id: "qusanna-fi-liqii", title: "Qusanna fi Liqii", description: "Miseensi qusenna adda adda qusachuudhan Liqii kan liqeefatan ni ta'a. Miseensonni Waliin qusatanif waldichii qusanna feshii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.", link: "/services#liqi", icon: HandCoins },
  { id: "qusanna-hawaasummaa", title: "Qusanna Hawaasummaa", description: "Miseensi qusenna adda adda qusachuudhan Liqii kan liqeefatan ni ta'a. Miseensonni Waliin qusatanif waldichii qusanna feshii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.", link: "/services#liqi", icon: UserRoundSearch },
  { id: "qusannoo-daldalaa", title: "Qusannoo Daldalaa", description: "Miseensi qusennaa adda adda qusachuu dhan Liqii kan liqeefatan ni ta'a. Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.", link: "/services#liqi", icon: Building2 },
  { id: "qusannoo-manaa", title: "Qusannoo Manaa", description: "Miseensi qusennaa adda adda qusachuu dhan Liqii kan liqeefatan ni ta'a. Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.", link: "/services#manaa", icon: Home },
  { id: "qusannoo-konkolaataa", title: "Qusannoo Konkolaataa", description: "Miseensi qusennaa adda adda qusachuu dhan Liqii kan liqeefatan ni ta'a. Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.", link: "/services#liqi", icon: FaTruckFront },
  { id: "qusannoo-baajaajii", title: "Qusannoo Baajaajii", description: "Miseensi qusennaa adda adda qusachuu dhan Liqii kan liqeefatan ni ta'a. Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.", link: "/services#liqi", icon: FaCaravan },
  { id: "qusannoo-liqii-mindaa", title: "Qusannoo Liqii Mindaa", description: "Miseensi qusennaa adda adda qusachuu dhan Liqii kan liqeefatan ni ta'a. Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.", link: "/services#liqi", icon: BadgeEuro },
  { id: "qusannaa-oogeesootaa", title: "Qusannaa Oogeesootaa", description: "Miseensi qusennaa adda adda qusachuu dhan Liqii kan liqeefatan ni ta'a. Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.", link: "/services#liqi", icon: Briefcase },
];

const COLS = 3;
const rows: ServiceItem[][] = [];
for (let i = 0; i < SERVICES_DATA.length; i += COLS) {
  rows.push(SERVICES_DATA.slice(i, i + COLS));
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const IconComponent = service.icon;
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group flex flex-col justify-between w-full bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-xl hover:shadow-gray-100/80 hover:border-gray-200 transition-all duration-300"
    >
      <div className="space-y-4">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-emerald-50 text-emerald-800 group-hover:bg-emerald-100 transition-colors duration-200">
          <IconComponent className="w-6 h-6" style={{ strokeWidth: 1.75 }} />
        </div>
        <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
        <p className="text-sm leading-relaxed text-gray-500 text-justify">{service.description}</p>
      </div>
      <div className="mt-6">
        <Link
          to={`/services/${service.id}`}
          className="inline-flex w-full items-center justify-center h-11 rounded-xl bg-emerald-950 text-white text-sm font-semibold hover:bg-emerald-800 transition-colors duration-200 shadow-sm"
        >
          Explore More
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50/50">
      {/* Hero */}
      <section className="relative h-72 sm:h-88 w-full overflow-hidden bg-emerald-950 flex items-center justify-center">
        <motion.div className="absolute inset-0" initial={{ scale: 1 }} animate={{ scale: 1.06 }} transition={{ duration: 12, ease: "easeOut" }}>
          <img className="h-full w-full object-cover" style={{ filter: "brightness(0.3) saturate(0.7)" }} src={banner1} alt="Services banner" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/50 to-transparent" />
        <div className="relative z-10 max-w-3xl px-4 text-center space-y-4">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="inline-block text-xs font-bold tracking-[0.2em] text-amber-400/90 uppercase">
            What We Offer
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Qussannaa fi Liqii
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-emerald-100/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Waliin SACCOS is committed to serving members with integrity and transparency across all financial services.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={`grid gap-6 ${
                row.length === 3
                  ? "grid-cols-1 md:grid-cols-3"
                  : row.length === 2
                  ? "grid-cols-1 md:grid-cols-2 md:max-w-2xl md:mx-auto"
                  : "grid-cols-1 max-w-sm mx-auto"
              }`}
            >
              {row.map((service, colIdx) => (
                <ScrollReveal key={service.id} delay={colIdx * 0.1} direction="up">
                  <ServiceCard service={service} />
                </ScrollReveal>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
