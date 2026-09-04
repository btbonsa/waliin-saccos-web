import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Lang = "en" | "am" | "om";

export const translations = {
  en: {
    home: "Home",
    services: "Services",
    news: "News",
    contact: "Contact",
    about: "About",
    overview: "Overview",
    missionVision: "Mission & Vision",
    leadership: "Leadership",
    signIn: "Sign in",
    becomeMember: "Become a member",
    language: "Language",
    explore: "Explore",
    visitUs: "Visit us",
    membership: "Membership",
    howToJoin: "How to join",
    savingsAndLoans: "Savings & loans",
    allRightsReserved: "All rights reserved.",
    backToTop: "Back to top",
  },
  am: {
    home: "መነሻ",
    services: "አገልግሎቶች",
    news: "ዜና",
    contact: "አድራሻ",
    about: "ስለ እኛ",
    overview: "አጠቃለያ",
    missionVision: "ተልዕካ እና ራዕይ",
    leadership: "አመራር",
    signIn: "ግባ",
    becomeMember: "አባል ይሁኑ",
    language: "ቋንቋ",
    explore: "ያግኙ",
    visitUs: "የምን እንጎበኟል",
    membership: "አባልነት",
    howToJoin: "እንዴት እንደሚገባ",
    savingsAndLoans: "ቁጠባ እና እዳ",
    allRightsReserved: "ሁሉም መብቶች የተጠበቁ ናቸው።",
    backToTop: "ወደ ላይ",
  },
  om: {
    home: "Garaa",
    services: "Tajaajila",
    news: "Oduu",
    contact: "Qunnamtii",
    about: "Waa'ee keenya",
    overview: "Waliigalaa",
    missionVision: "Ergaa fi Mul'ata",
    leadership: "Hoggansa",
    signIn: "Seeni",
    becomeMember: "Misoomaa ta'i",
    language: "Afaan",
    explore: "Qoradhu",
    visitUs: "Nu daawwadhu",
    membership: " miseensummaa",
    howToJoin: "Akkamitti itti hammatamuu dandeessa",
    savingsAndLoans: "Qusannaa fi liqaa",
    allRightsReserved: "Mirga hunda eegameera.",
    backToTop: "Ol deebi'i",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  t: (key) => translations.en[key] ?? key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("walin_lang") : null;
    return (saved as Lang) ?? "en";
  });

  const setLang = (l: Lang) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("walin_lang", l);
    }
    setLangState(l);
  };

  const t = (key: TranslationKey) => translations[lang][key] ?? translations.en[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
