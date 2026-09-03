import {
  HandCoins,
  UserRoundSearch,
  Building2,
  Home,
  BadgeEuro,
  Briefcase,
  Truck,
  Bike,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import savingsImg from "../assets/savingandLoan.png";

const UNSPLASH = {
  social:       "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=70",
  business:     "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=70",
  housing:      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=70",
  vehicle:      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=70",
  bajaj:        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=70",
  salary:       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=70",
  professional: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=70",
};

export interface LoanTier {
  label: string;
  condition: string;
  limit: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  icon: LucideIcon;
  interestRate: string;
  tenure: string;
  savingsPercent: string;
  tiers: LoanTier[];
  subTypes?: { name: string; desc: string }[];
  image?: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "qusanna-fi-liqii",
    title: "Qusanna fi Liqii",
    subtitle: "Savings & Loan",
    image: savingsImg,
    description:
      "Save regularly and qualify for member loans. Mandatory and voluntary savings earn 7% for adults and 10.5% for children.",
    overview:
      "Miseensi qusennaa adda adda qusachuu dhan Liqii kan liqeefatan ni ta'a. Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa dhibentaa 7 kan kafaluu yoo tau'u ijooleedhaaf moo dhibentaa 10.5 kafalaa.",
    icon: HandCoins,
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
    image: UNSPLASH.social,
    description:
      "Community-focused savings that unlock social loans based on your consistent 25% savings record.",
    overview:
      "Miseensi ama liqii liqeeffatu keesaa qusanna itti fufiiinsaan %25 qusachuudhan liqii hawaasummaa ni argata. Daangaan liqii sadarkaa qusannaa irratti hundaa'a.",
    icon: UserRoundSearch,
    interestRate: "Dhibentaa 7%",
    tenure: "Ji'a 4 – 6+",
    savingsPercent: "25%",
    tiers: [
      { label: "Sadarkaa 1", condition: "Qusanna %25 ji'a 4 fi isaa ol", limit: "200,000 ol hanga 400,000.00" },
      { label: "Sadarkaa 2", condition: "Qusanna %25 ji'a 5 fi isaa ol", limit: "400,000 ol hanga 800,000.00" },
      { label: "Sadarkaa 3", condition: "Qusanna %25 ji'a 6 fi isaa ol", limit: "800,000 ol hanga 1,000,000.00" },
    ],
  },
  {
    id: "qusannoo-daldalaa",
    title: "Qusannoo Daldalaa",
    subtitle: "Business Savings & Loan",
    image: UNSPLASH.business,
    description:
      "Grow your trade with business savings and loans tied to 30% continuous savings.",
    overview:
      "Miseensa ama liqii liqeeffatu keesaa qusanna itti fufiiinsaan %30 qusannadhan turee liqii daldalaa ni argata. Daangaan liqii sadarkaa qusannaa irratti hundaa'a.",
    icon: Building2,
    interestRate: "Dhibentaa 9%",
    tenure: "Ji'a 5 – 6+",
    savingsPercent: "30%",
    tiers: [
      { label: "Sadarkaa 1", condition: "Qusanna %30 ji'a 5 fi isaa ol", limit: "1,000,000 ol hanga 1,200,000.00" },
      { label: "Sadarkaa 2", condition: "Qusanna %30 ji'a 6 fi isaa ol", limit: "1,200,000 ol hanga 1,500,000.00" },
      { label: "Sadarkaa 3", condition: "Qusanna %30 ji'a 6+ itti fufiiinsaan", limit: "1,500,000 ol hanga 2,000,000.00" },
    ],
  },
  {
    id: "qusannoo-manaa",
    title: "Qusannoo Manaa",
    subtitle: "Housing Savings & Loan",
    image: UNSPLASH.housing,
    description:
      "Save toward renovating, building, or buying a home with housing credit up to ETB 2 million.",
    overview:
      "Miseensi manaa haaromsuuf, ijaruuf, ykn bitiif ama liqeefatuu keesaa qusanna itti fufiiinsaan %30 ji'a 6 fi isaa ol qusannadhan turee liqii manaa ni argata.",
    icon: Home,
    interestRate: "Dhibentaa 8.5%",
    tenure: "Ji'a 6+",
    savingsPercent: "30%",
    tiers: [
      { label: "Sadarkaa 1 — Haaromsuu", condition: "Qusanna %30 ji'a 6 fi isaa ol (haaromsuu)", limit: "Hanga 1,000,000.00" },
      { label: "Sadarkaa 2 — Ijaaru / Haaromsuu / Bituu", condition: "Qusanna %30 ji'a 6 fi isaa ol", limit: "Hanga 1,500,000.00" },
      { label: "Sadarkaa 3 — Bituu / Ijaaru / Haaromsuu", condition: "Qusanna %30 ji'a 6 fi isaa ol", limit: "Hanga 2,000,000.00" },
    ],
  },
  {
    id: "qusannoo-konkolaataa",
    title: "Qusannoo Konkolaataa",
    subtitle: "Vehicle Loan",
    image: UNSPLASH.vehicle,
    description:
      "Purchase a vehicle after six months of 30% continuous savings, with limits up to ETB 2 million.",
    overview:
      "Miseensi ama liqeefatuu keesaa qusanna itti fufiiinsaan %30 ji'a 6 fi isaa ol qusate liqii bittaa konkolaataa ni argata.",
    icon: Truck,
    interestRate: "Dhibentaa 10%",
    tenure: "Ji'a 6+",
    savingsPercent: "30%",
    tiers: [
      { label: "Konkolaataa Bituu", condition: "Qusanna %30 ji'a 6 fi isaa ol itti fufiiinsaan", limit: "Daangaan isaa 2,000,000.00" },
    ],
  },
  {
    id: "qusannoo-baajaajii",
    title: "Qusannoo Baajaajii",
    subtitle: "Bajaj / Tuk-Tuk Loan",
    image: UNSPLASH.bajaj,
    description:
      "Finance a three-wheeler for livelihood after 4–6 months of 30% savings, up to ETB 1 million.",
    overview:
      "Baajaajii garaa garaa (milaa sadii kan qaban) bituf qusana %30 ji'a 4 hanga ji'a 6 fi isaa ol qusate liqii baajaajii ni argata.",
    icon: Bike,
    interestRate: "Dhibentaa 9.5%",
    tenure: "Ji'a 4 – 6+",
    savingsPercent: "30%",
    tiers: [
      { label: "Baajaajii Bituu", condition: "Qusanna %30 ji'a 4 hanga ji'a 6 fi isaa ol", limit: "Daangaan liqii hangaa 1,000,000.00" },
    ],
  },
  {
    id: "qusannoo-liqii-mindaa",
    title: "Qusannoo Liqii Mindaa",
    subtitle: "Salary Advance Loan",
    image: UNSPLASH.salary,
    description:
      "Salary-backed credit for employed members, including emergency advances of up to four months’ net pay.",
    overview:
      "Hojjettoon dhaabbata garaa garaa irraa miseensa ta'aniif wan attatamaa isaan qunameef liqii hatattamaa mindaa qulqulluu ji'a afurii argachuu ni danda'u.",
    icon: BadgeEuro,
    interestRate: "Dhibentaa 7.5%",
    tenure: "Ji'a 2 – 4+",
    savingsPercent: "25%",
    tiers: [
      { label: "Liqii Hatattamaa", condition: "Qusanna %25 ji'a lama keesati waliti fufiiinsaan (hojjettoo dhaabbataaf)", limit: "Mindaa qulqulluu ji'a afurii" },
      { label: "Liqii Idilee", condition: "Qusanna %25 ji'a 4 fi isaa ol itti fufiiinsaan", limit: "Daangaan liqii hangaa 300,000.00" },
    ],
  },
  {
    id: "qusannaa-oogeesootaa",
    title: "Qusannaa Oogeesootaa",
    subtitle: "Professional Savings & Loan",
    image: UNSPLASH.professional,
    description:
      "Credit for experienced professionals starting or expanding a practice after five or more years of service.",
    overview:
      "Miseensooni hojii kanaan duraa irratti qacaaramani waggoota shanii fi isaa ol tajaajilan yoo ta'e muuxannoo seecteericharaa argattanin dhaabata / biizineesii mataa isaan jalqabuu fi babal'isuuf liqii ni argatu.",
    icon: Briefcase,
    interestRate: "Dhibentaa 8%",
    tenure: "Ji'a 5+",
    savingsPercent: "25%",
    tiers: [
      { label: "Ogeeyyii Muuxannoo Qaban", condition: "Waggoota 5+ tajaajilanii fi qusanna %25 ji'a 5 fi isaa ol", limit: "Hanga 1,500,000.00" },
    ],
  },
];

export function getService(id: string | undefined) {
  return SERVICES.find((s) => s.id === id);
}
