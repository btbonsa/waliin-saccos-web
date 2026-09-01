import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  HandCoins, UserRoundSearch, Building2, Home,
  BadgeEuro, Briefcase, ArrowLeft, CheckCircle2,
  ChevronDown, Clock, AlertCircle, PhoneCall, Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaCaravan, FaTruckFront } from "react-icons/fa6";
import type { IconType } from "react-icons";
import ScrollReveal from "../components/ui/ScrollReveal";

interface Tier {
  label: string;
  condition: string;
  limit: string;
}

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  icon: LucideIcon | IconType;
  color: string;
  bg: string;
  interestRate: string;
  tenure: string;
  savingsPercent: string;
  tiers: Tier[];
  subTypes?: { name: string; desc: string }[];
}

const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "qusanna-fi-liqii",
    title: "Qusanna fi Liqii",
    subtitle: "Savings & Loan",
    overview:
      "Miseensi qusennaa adda adda qusachuu dhan Liqii kan liqeefatan ni ta'a. Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa dhibentaa 7 kan kafaluu yoo tau'u ijooleedhaaf moo dhibentaa 10.5 kafalaa.",
    icon: HandCoins,
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    interestRate: "7% – 10.5%",
    tenure: "Ji'a 3 – 4+",
    savingsPercent: "25%",
    subTypes: [
      {
        name: "Qusannoo Dirqamaa",
        desc: "Miseensaa qusannoo dirqamaa qarshii 500.00 (dhibba shan) ji'a ji'an wallit fufee niqusataa. Qusanna baasii kan goodhamuu yoomu miseens dhabaticha galakisan ta'a.",
      },
      {
        name: "Qusannoo Feedhii",
        desc: "Misseensi Qusannoo feedhii murtee mataa isaatin ama barbadee waldaa biratt qusachuu ni danda'a. Yeroo kamiyuu baasii gochuun nidandamaa.",
      },
      {
        name: "Qusannoo Daa'immanii",
        desc: "Ijoolleen karaa warra isaanii ykn guddiftoota isaaniitiin maallaqa qusachu nidanda'u. Qusannaan daa'immanii caalqabaa qarshii 500 (dhibba shan) dha.",
      },
      {
        name: "Qusannoo Fayyadamaa",
        desc: "Miseensi ama liqii liqeeffatu keesaa qusanna itti fufiiinsaan %25 ji'a 3 hanga 4 ti fi isaa ol qusannadhan turee liqii fayyadamaa ni argata.",
      },
    ],
    tiers: [
      {
        label: "Tier 1",
        condition: "Qusanna %25 ji'a 3–4 itti fufiiinsaan",
        limit: "Hanga 200,000.00 (kuma dhibba lama)",
      },
    ],
  },
  {
    id: "qusanna-hawaasummaa",
    title: "Qusanna Hawaasummaa",
    subtitle: "Social Saving",
    overview:
      "Miseensi ama liqii liqeeffatu keesaa qusanna itti fufiiinsaan %25 qusachuudhan liqii hawaasummaa ni argata. Daangaan liqii sadarkaa qusannaa irratti hundaa'a.",
    icon: UserRoundSearch,
    color: "text-blue-700",
    bg: "bg-blue-50",
    interestRate: "Dhibentaa 7%",
    tenure: "Ji'a 4 – 6+",
    savingsPercent: "25%",
    tiers: [
      {
        label: "Sadarkaa 1",
        condition: "Qusanna %25 ji'a 4 fi isaa ol",
        limit: "200,000 ol hanga 400,000.00 (kuma dhibba afur)",
      },
      {
        label: "Sadarkaa 2",
        condition: "Qusanna %25 ji'a 5 fi isaa ol",
        limit: "400,000 ol hanga 800,000.00 (kuma dhibba sadeet)",
      },
      {
        label: "Sadarkaa 3",
        condition: "Qusanna %25 ji'a 6 fi isaa ol",
        limit: "800,000 ol hanga 1,000,000.00 (miliyoona tokko)",
      },
    ],
  },
  {
    id: "qusannoo-daldalaa",
    title: "Qusannoo Daldalaa",
    subtitle: "Business Savings & Loan",
    overview:
      "Miseensa ama liqii liqeeffatu keesaa qusanna itti fufiiinsaan %30 qusannadhan turee liqii daldalaa ni argata. Daangaan liqii sadarkaa qusannaa irratti hundaa'a.",
    icon: Building2,
    color: "text-amber-700",
    bg: "bg-amber-50",
    interestRate: "Dhibentaa 9%",
    tenure: "Ji'a 5 – 6+",
    savingsPercent: "30%",
    tiers: [
      {
        label: "Sadarkaa 1",
        condition: "Qusanna %30 ji'a 5 fi isaa ol",
        limit: "1,000,000 ol hanga 1,200,000.00",
      },
      {
        label: "Sadarkaa 2",
        condition: "Qusanna %30 ji'a 6 fi isaa ol",
        limit: "1,200,000 ol hanga 1,500,000.00",
      },
      {
        label: "Sadarkaa 3",
        condition: "Qusanna %30 ji'a 6+ itti fufiiinsaan",
        limit: "1,500,000 ol hanga 2,000,000.00",
      },
    ],
  },
  {
    id: "qusannoo-manaa",
    title: "Qusannoo Manaa",
    subtitle: "Housing Savings & Loan",
    overview:
      "Miseensi manaa haaromsuuf, ijaruuf, ykn bitiif ama liqeefatuu keesaa qusanna itti fufiiinsaan %30 ji'a 6 fi isaa ol qusannadhan turee liqii manaa ni argata.",
    icon: Home,
    color: "text-rose-700",
    bg: "bg-rose-50",
    interestRate: "Dhibentaa 8.5%",
    tenure: "Ji'a 6+",
    savingsPercent: "30%",
    tiers: [
      {
        label: "Sadarkaa 1 — Haaromsuu",
        condition: "Qusanna %30 ji'a 6 fi isaa ol (haaromsuu)",
        limit: "Hanga 1,000,000.00",
      },
      {
        label: "Sadarkaa 2 — Ijaaru / Haaromsuu / Bituu",
        condition: "Qusanna %30 ji'a 6 fi isaa ol",
        limit: "Hanga 1,500,000.00",
      },
      {
        label: "Sadarkaa 3 — Bituu / Ijaaru / Haaromsuu",
        condition: "Qusanna %30 ji'a 6 fi isaa ol",
        limit: "Hanga 2,000,000.00",
      },
    ],
  },
  {
    id: "qusannoo-konkolaataa",
    title: "Qusannoo Konkolaataa",
    subtitle: "Vehicle Loan",
    overview:
      "Miseensi ama liqeefatuu keesaa qusanna itti fufiiinsaan %30 ji'a 6 fi isaa ol qusate liqii bittaa konkolaataa ni argata.",
    icon: FaTruckFront,
    color: "text-indigo-700",
    bg: "bg-indigo-50",
    interestRate: "Dhibentaa 10%",
    tenure: "Ji'a 6+",
    savingsPercent: "30%",
    tiers: [
      {
        label: "Konkolaataa Bituu",
        condition: "Qusanna %30 ji'a 6 fi isaa ol itti fufiiinsaan",
        limit: "Daangaan isaa 2,000,000.00",
      },
    ],
  },
  {
    id: "qusannoo-baajaajii",
    title: "Qusannoo Baajaajii",
    subtitle: "Bajaj / Tuk-Tuk Loan",
    overview:
      "Baajaajii garaa garaa (milaa sadii kan qaban) bituf qusana %30 ji'a 4 hanga ji'a 6 fi isaa ol qusate liqii baajaajii ni argata.",
    icon: FaCaravan,
    color: "text-orange-700",
    bg: "bg-orange-50",
    interestRate: "Dhibentaa 9.5%",
    tenure: "Ji'a 4 – 6+",
    savingsPercent: "30%",
    tiers: [
      {
        label: "Baajaajii Bituu",
        condition: "Qusanna %30 ji'a 4 hanga ji'a 6 fi isaa ol",
        limit: "Daangaan liqii hangaa 1,000,000.00",
      },
    ],
  },
  {
    id: "qusannoo-liqii-mindaa",
    title: "Qusannoo Liqii Mindaa",
    subtitle: "Salary Advance Loan",
    overview:
      "Hojjettoon dhaabbata garaa garaa irraa miseensa ta'aniif wan attatamaa isaan qunameef liqii hatattamaa mindaa qulqulluu ji'a afurii argachuu ni danda'u.",
    icon: BadgeEuro,
    color: "text-teal-700",
    bg: "bg-teal-50",
    interestRate: "Dhibentaa 7.5%",
    tenure: "Ji'a 2 – 4+",
    savingsPercent: "25%",
    tiers: [
      {
        label: "Liqii Hatattamaa",
        condition: "Qusanna %25 ji'a lama keesati waliti fufiiinsaan (hojjettoo dhaabbataaf)",
        limit: "Mindaa qulqulluu ji'a afurii",
      },
      {
        label: "Liqii Idilee",
        condition: "Qusanna %25 ji'a 4 fi isaa ol itti fufiiinsaan",
        limit: "Daangaan liqii hangaa 300,000.00 (kuma dhibba sadii)",
      },
    ],
  },
  {
    id: "qusannaa-oogeesootaa",
    title: "Qusannaa Oogeesootaa",
    subtitle: "Professional Savings & Loan",
    overview:
      "Miseensooni hojii kanaan duraa irratti qacaaramani waggoota shanii fi isaa ol tajaajilan yoo ta'e muuxannoo seecteericharaa argattanin dhaabata / biizineesii mataa isaan jalqabuu fi babal'isuuf liqii ni argatu.",
    icon: Briefcase,
    color: "text-purple-700",
    bg: "bg-purple-50",
    interestRate: "Dhibentaa 8%",
    tenure: "Ji'a 5+",
    savingsPercent: "25%",
    tiers: [
      {
        label: "Ogeeyyii Muuxannoo Qaban",
        condition: "Waggoota 5+ tajaajilanii fi qusanna %25 ji'a 5 fi isaa ol",
        limit: "Hanga 1,500,000.00 (miliyoona tokko fi kuma dhibba shan)",
      },
    ],
  },
];

function AccordionItem({
  title,
  icon: Icon,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50/80 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-50 shrink-0">
            <Icon className="h-4 w-4 text-emerald-700" />
          </div>
          <span className="font-bold text-gray-900 text-sm">{title}</span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-4 border-t border-gray-50">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = SERVICE_DETAILS.find((s) => s.id === id);
  const [openSection, setOpenSection] = useState<number>(0);

  const toggle = (i: number) => setOpenSection(openSection === i ? -1 : i);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
        <AlertCircle className="h-12 w-12 text-gray-300" />
        <h2 className="text-xl font-bold text-gray-700">Service not found</h2>
        <Link to="/services" className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 underline underline-offset-4">
          Back to Services
        </Link>
      </div>
    );
  }

  const IconComponent = service.icon;

  const sections = [
    ...(service.subTypes
      ? [
          {
            title: "Gosa Qusannaa (Types of Savings)",
            icon: Layers,
            content: (
              <div className="space-y-4">
                {service.subTypes.map((sub, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-xl bg-gray-50 border border-gray-100 p-4 space-y-1.5"
                  >
                    <p className="text-sm font-bold text-emerald-900">{sub.name}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{sub.desc}</p>
                  </motion.div>
                ))}
              </div>
            ),
          },
        ]
      : []),
    {
      title: "Sadarkaa Liqii (Loan Tiers)",
      icon: HandCoins,
      content: (
        <div className="space-y-3">
          {service.tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
            >
              <span className="inline-flex items-center justify-center h-7 px-3 rounded-full bg-emerald-950 text-white text-xs font-bold shrink-0">
                {tier.label}
              </span>
              <div className="flex-1 space-y-1">
                <p className="text-xs text-gray-500 leading-relaxed">{tier.condition}</p>
                <p className="text-sm font-bold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  {tier.limit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: "Odeeffannoo Liqii (Loan Info)",
      icon: Clock,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Dhibentaa (Interest Rate)", value: service.interestRate },
            { label: "Yeroo Liqii (Tenure)", value: service.tenure },
            { label: "Qusannaa Barbaachisu (%)", value: service.savingsPercent + " itti fufiiinsaan" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-center"
            >
              <p className="text-xs text-emerald-700 font-semibold mb-1">{item.label}</p>
              <p className="text-base font-extrabold text-emerald-950">{item.value}</p>
            </motion.div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50/50">
      {/* Hero */}
      <section className="w-full bg-emerald-950 py-16 px-4 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amber-500/8 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/8 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300/70 hover:text-white transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={16} />
            Back to Services
          </motion.button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`p-4 rounded-2xl ${service.bg} shrink-0`}
            >
              <IconComponent className={`h-8 w-8 ${service.color}`} style={{ strokeWidth: 1.75 }} />
            </motion.div>
            <div>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="inline-block text-xs font-bold tracking-[0.2em] text-amber-400/80 uppercase mb-1"
              >
                {service.subtitle}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
              >
                {service.title}
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-5">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl border border-gray-100 p-7 space-y-4 shadow-sm">
                <h2 className="text-base font-extrabold text-gray-900">Waa'ee Tajaajila Kanaa</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{service.overview}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <div className="bg-emerald-950 rounded-2xl p-7 space-y-4">
                <h3 className="text-base font-extrabold text-white">Iyyannoo Galchuu?</h3>
                <p className="text-sm text-emerald-200/70 leading-relaxed">
                  Biiroo keenya daawwadhu ykn nu quunnamtii iyyannoo jalqabuuf.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 h-11 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-emerald-950 text-sm font-bold hover:brightness-105 transition-all duration-200 shadow-lg shadow-amber-500/20"
                >
                  <PhoneCall size={15} />
                  Nu Quunnamaa
                </Link>
                <Link
                  to="/login"
                  className="inline-flex w-full items-center justify-center h-11 rounded-xl border border-white/15 text-white text-sm font-semibold hover:bg-white/8 transition-all duration-200"
                >
                  Miseensa Tahuuf
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-2 space-y-3">
            <ScrollReveal direction="right" className="mb-6">
              <h2 className="text-xl font-extrabold text-gray-900">Odeeffannoo Guutuu</h2>
              <p className="text-sm text-gray-500 mt-1">Kutaa tokko tokkoon cuqaasii bal'inaan ilaalaa.</p>
            </ScrollReveal>

            {sections.map((section, i) => (
              <ScrollReveal key={i} delay={i * 0.08} direction="right">
                <AccordionItem
                  title={section.title}
                  icon={section.icon}
                  isOpen={openSection === i}
                  onToggle={() => toggle(i)}
                >
                  {section.content}
                </AccordionItem>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
