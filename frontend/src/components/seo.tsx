import { useEffect } from "react";
import { useLang } from "../context/LanguageContext";

const SITE_NAME = "Waliin SACCO Ltd";
const BASE_URL = "https://waliin-saccos-web.vercel.app";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeMeta(attr: "name" | "property", key: string) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();
}

interface SEOProps {
  /** Full page title, e.g. "About Us | Waliin SACCO Ltd" */
  title: string;
  /** Meta description (aim for 140–160 chars) */
  description: string;
  /** Route path without origin, e.g. "/about" or "/services/qusanna-fi-liqii" */
  path?: string;
  /** Optional per-page OG image URL/path */
  image?: string;
  /** Set true for pages that should not be indexed (404, etc.) */
  noindex?: boolean;
}

export default function SEO({ title, description, path = "/", image, noindex = false }: SEOProps) {
  const { lang } = useLang();

  useEffect(() => {
    const url = `${BASE_URL}${path === "/" ? "/" : path}`;
    const ogImage = image ? (image.startsWith("http") ? image : `${BASE_URL}${image}`) : DEFAULT_OG_IMAGE;
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    // Keep <html lang> in sync with the active UI language
    document.documentElement.lang = lang === "am" ? "am" : lang === "om" ? "om" : "en";

    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    // Canonical
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Open Graph
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", lang === "am" ? "am_ET" : lang === "om" ? "om_ET" : "en_ET");
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", ogImage);
    if (!image) {
      setMeta("property", "og:image:width", "1200");
      setMeta("property", "og:image:height", "630");
    } else {
      removeMeta("property", "og:image:width");
      removeMeta("property", "og:image:height");
    }

    // Twitter / X
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    return () => {
      if (noindex) removeMeta("name", "robots");
    };
  }, [title, description, path, image, noindex, lang]);

  return null;
}
