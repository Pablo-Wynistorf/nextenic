import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import en from "@/locales/en";
import de from "@/locales/de";
import fr from "@/locales/fr";
import it from "@/locales/it";

/**
 * Translation layer.
 *
 * Hand-rolled rather than react-i18next: this site needs key lookup and a
 * language switch, and nothing else — no interpolation beyond a couple of
 * counts, no pluralisation rules, no lazy namespaces, no ICU messages. The
 * library would add roughly 40 kB gzipped to do less than this file does.
 *
 * The four languages match Swiss Shipping Labels' own language list (English,
 * German, French, Italian), which is also three of Switzerland's four national
 * languages plus English.
 *
 * All dictionaries are bundled together. They total a few kB of text, so
 * splitting them per language would cost a round trip to save less than the
 * request header overhead.
 */

export const LANGUAGES = [
  { code: "en", label: "English", short: "EN", htmlLang: "en" },
  { code: "de", label: "Deutsch", short: "DE", htmlLang: "de-CH" },
  { code: "fr", label: "Français", short: "FR", htmlLang: "fr-CH" },
  { code: "it", label: "Italiano", short: "IT", htmlLang: "it-CH" },
];

const DICTIONARIES = { en, de, fr, it };
const STORAGE_KEY = "nextenic:lang";
const DEFAULT = "en";

const isSupported = (code) => Object.hasOwn(DICTIONARIES, code);

/**
 * Resolution order: ?lang= in the URL, then a stored choice, then the browser's
 * accept-languages, then English.
 *
 * The query parameter wins so a link can pin a language — the same ?lang=
 * convention the Swiss Shipping Labels site already uses.
 */
export function detectLanguage() {
  if (typeof window === "undefined") return DEFAULT;

  const fromQuery = new URLSearchParams(window.location.search)
    .get("lang")
    ?.toLowerCase();
  if (fromQuery && isSupported(fromQuery)) return fromQuery;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && isSupported(stored)) return stored;
  } catch {
    /* Storage unavailable. Fall through to the browser's preference. */
  }

  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag?.slice(0, 2).toLowerCase();
    if (base && isSupported(base)) return base;
  }

  return DEFAULT;
}

/** Walks a dot-separated path through a nested object. */
function lookup(dictionary, path) {
  return path
    .split(".")
    .reduce((node, key) => (node == null ? undefined : node[key]), dictionary);
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage);

  /* Keep <html lang> correct: it drives screen-reader pronunciation, browser
     translation prompts and hyphenation. */
  useEffect(() => {
    const entry = LANGUAGES.find((item) => item.code === lang);
    document.documentElement.lang = entry?.htmlLang ?? lang;
  }, [lang]);

  const setLang = useCallback((code) => {
    if (!isSupported(code)) return;
    setLangState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* Persistence is a nicety. */
    }
    /* Reflect the choice in the URL without adding a history entry, so the
       address bar stays shareable but Back still leaves the site. */
    const url = new URL(window.location.href);
    if (code === DEFAULT) url.searchParams.delete("lang");
    else url.searchParams.set("lang", code);
    window.history.replaceState({}, "", url);
  }, []);

  const value = useMemo(() => {
    const dictionary = DICTIONARIES[lang] ?? DICTIONARIES[DEFAULT];

    /**
     * Looks up a key. Falls back to English for anything missing, then to the
     * key itself, so a gap in a translation degrades to readable English rather
     * than a blank space.
     */
    const t = (path, vars) => {
      let result = lookup(dictionary, path);
      if (result === undefined) result = lookup(DICTIONARIES[DEFAULT], path);
      if (result === undefined) {
        if (import.meta.env.DEV) {
          console.warn(`[i18n] missing key: ${path}`);
        }
        return path;
      }
      if (typeof result === "string" && vars) {
        return result.replace(/\{(\w+)\}/g, (_, name) =>
          name in vars ? String(vars[name]) : `{${name}}`,
        );
      }
      return result;
    };

    return { lang, setLang, t, languages: LANGUAGES };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside <I18nProvider>");
  return context;
}
