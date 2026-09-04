import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Lang = "en" | "am" | "om";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LangCtx>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(
    () => (localStorage.getItem("waliin_lang") as Lang) ?? "en"
  );

  const setLang = (l: Lang) => {
    localStorage.setItem("waliin_lang", l);
    setLangState(l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
