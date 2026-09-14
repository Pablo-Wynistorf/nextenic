import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/**
 * Colour mode controller.
 *
 * Dark is the base theme: tokens.css declares dark values on :root and the light
 * theme is opted into with a `.light` class on <html>. Three states are stored,
 * "system", "dark" and "light", so a visitor who has never touched the toggle
 * follows their OS and one who has touched it keeps their choice.
 *
 * The matching inline script in index.html applies the resolved class before
 * first paint; this module must produce the same result or the page will flash.
 *
 * This is a context, not a bare hook. It used to be a plain useTheme() hook with
 * its own useState, which worked only because exactly one component called it.
 * The moment a second consumer appeared, the hero needing to know whether to draw
 * its shader for a light or a dark canvas, the two copies of the state stopped
 * agreeing: toggling from the header re-rendered the header and nothing else.
 */

export const STORAGE_KEY = "nextenic:theme";
const MODES = ["system", "dark", "light"];

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return MODES.includes(value) ? value : "system";
  } catch {
    /* Private mode, or storage disabled. Fall back to following the OS. */
    return "system";
  }
}

function systemPrefersLight() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: light)").matches === true
  );
}

export function resolveTheme(mode) {
  if (mode === "light") return "light";
  if (mode === "dark") return "dark";
  return systemPrefersLight() ? "light" : "dark";
}

function apply(resolved) {
  const root = document.documentElement;
  root.classList.toggle("light", resolved === "light");
  root.style.colorScheme = resolved;
  const meta = document.querySelector('meta[name="theme-color"]');
  /* Keep the mobile browser chrome in step with the canvas colour. */
  if (meta) meta.setAttribute("content", resolved === "light" ? "#fbfaf8" : "#08090b");
}

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(readStored);
  const [resolved, setResolved] = useState(() => resolveTheme(readStored()));

  /* Apply, persist, and keep the resolved value in sync with the mode. */
  useEffect(() => {
    const next = resolveTheme(mode);
    setResolved(next);
    apply(next);
    try {
      if (mode === "system") localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* Persistence is a nicety, not a requirement. */
    }
  }, [mode]);

  /* While on "system", follow live OS changes. */
  useEffect(() => {
    if (mode !== "system" || !window.matchMedia) return;
    const mql = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      const next = resolveTheme("system");
      setResolved(next);
      apply(next);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [mode]);

  /* Toggle flips to the opposite of what is currently on screen and pins it.
     Cycling through three states on one button would be a guessing game. */
  const toggle = useCallback(() => {
    setMode((current) => (resolveTheme(current) === "light" ? "dark" : "light"));
  }, []);

  const useSystem = useCallback(() => setMode("system"), []);

  const value = useMemo(
    () => ({ mode, resolved, setMode, toggle, useSystem }),
    [mode, resolved, toggle, useSystem],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside <ThemeProvider>");
  return context;
}
