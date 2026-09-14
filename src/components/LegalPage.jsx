import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { useI18n } from "@/lib/i18n";

/**
 * Shared layout for the two legal pages.
 *
 * Kept plainly typeset and narrow: these pages exist to be read and to be
 * findable, not to be designed. No scroll animation here either — text a visitor
 * came to read should not need to be scrolled into existence.
 *
 * Sets the document title, since the site is client-rendered and the tab label
 * would otherwise stay on the home title.
 */
export default function LegalPage({ title, subtitle, note, children }) {
  const { t } = useI18n();

  useEffect(() => {
    const previous = document.title;
    document.title = `${title} · Nextenic GmbH`;
    return () => {
      document.title = previous;
    };
  }, [title]);

  return (
    <main id="main" className="pb-section pt-36 sm:pt-44">
      <div className="shell">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-body-sm text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-4 transition-transform duration-300 ease-out-expo group-hover:-translate-x-0.5"
          />
          {t("legal.back")}
        </Link>

        <div className="mt-12 grid gap-x-10 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>{subtitle}</Eyebrow>
            <h1 className="mt-6 text-h2 font-semibold text-primary">{title}</h1>
            {note && (
              <p className="mt-6 max-w-measure text-caption text-tertiary">
                {note}
              </p>
            )}
          </div>

          <div className="max-w-prose lg:col-span-7 lg:col-start-6">{children}</div>
        </div>
      </div>
    </main>
  );
}

/** Section heading + body, so both legal pages share one rhythm. */
export function LegalSection({ heading, children }) {
  return (
    <section className="border-t border-line py-8 first:border-t-0 first:pt-0">
      {/* Heading is optional: the closing review note is a section without one. */}
      {heading && <h2 className="text-h4 font-medium tracking-[-0.01em]">{heading}</h2>}
      <div className={heading ? "mt-4 space-y-4 text-body-sm text-secondary" : "space-y-4 text-body-sm text-secondary"}>
        {children}
      </div>
    </section>
  );
}

/**
 * Marks text the company still has to supply.
 *
 * Visually obvious on purpose — a legal page that ships with invented details is
 * a liability, and one that ships with invisible gaps is worse. Search the
 * locale files for "TO FILL" to find every one of them.
 */
export function Placeholder({ children }) {
  return (
    <mark className="rounded-xs bg-accent/12 px-1.5 py-0.5 font-mono text-caption text-accent">
      {children}
    </mark>
  );
}

/** Shared link styling for the legal pages. */
export function LegalLink({ href, to, children }) {
  const className =
    "text-primary underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent";
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
