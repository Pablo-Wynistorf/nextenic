import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import ScrollFloat from "@/components/ScrollFloat";
import { products } from "@/lib/products";
import { contactEmail, contactMailto } from "@/lib/contact";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Contact.
 *
 * A mailto link, not a form. The site is static on GitHub Pages, so any form
 * would need a third-party endpoint that receives the message before we do — and
 * a form that silently fails is worse than an address that always works. The
 * address is also copyable for anyone whose browser has no mail handler.
 *
 * Product support deliberately points elsewhere: a MailRift billing question
 * should not wait in the company inbox.
 */
export default function Contact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(0);
  /* Resolved on the client, so it matches the domain the visitor is on. */
  const [email, setEmail] = useState(contactEmail);

  useEffect(() => {
    setEmail(contactEmail());
    return () => clearTimeout(timerRef.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      /* Clipboard blocked. The mailto link next to this still works. */
    }
  };

  const shopify = products.find((p) => p.links.shopify)?.links.shopify;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-line py-section"
    >
      <div className="shell">
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{t("contact.eyebrow")}</Eyebrow>
            </Reveal>
            <ScrollFloat
              tag="h2"
              id="contact-heading"
              containerClassName="mt-7 font-display text-h2 font-semibold text-primary"
              stagger={0.02}
              animationDuration={0.8}
            >
              {t("contact.heading")}
            </ScrollFloat>

            <Reveal delay={0.06}>
              <p className="mt-6 max-w-prose text-body-lg text-secondary">
                {t("contact.lead")}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={contactMailto()}
                  className={cn(
                    "group inline-flex items-baseline gap-3 font-display",
                    "text-h3 font-medium tracking-[-0.02em] text-primary",
                  )}
                >
                  <span className="border-b-2 border-line-strong pb-1 transition-colors duration-300 group-hover:border-accent">
                    {email}
                  </span>
                </a>

                <button
                  type="button"
                  onClick={copy}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border border-line-strong",
                    "px-3.5 py-2 text-caption text-secondary",
                    "transition-colors duration-200 hover:border-primary hover:text-primary",
                  )}
                >
                  {copied ? (
                    <Check aria-hidden="true" className="size-3.5 text-accent" />
                  ) : (
                    <Copy aria-hidden="true" className="size-3.5" />
                  )}
                  {copied ? t("contact.copied") : t("contact.copyAddress")}
                </button>
                {/* Announced without moving focus. */}
                <span aria-live="polite" className="sr-only">
                  {copied ? t("contact.copiedAnnouncement", { email }) : ""}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Product support routes, so company mail stays company mail. */}
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.08}>
              <h3 className="font-mono text-micro uppercase text-tertiary">
                {t("contact.supportHeading")}
              </h3>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                <li className="py-4">
                  <p className="text-body-sm font-medium text-primary">MailRift</p>
                  <a
                    href="mailto:support@mailrift.io"
                    className="mt-1 inline-block text-body-sm text-secondary underline decoration-line-strong underline-offset-4 transition-colors hover:text-primary hover:decoration-accent"
                  >
                    support@mailrift.io
                  </a>
                </li>
                <li className="py-4">
                  <p className="text-body-sm font-medium text-primary">
                    Swiss Shipping Labels
                  </p>
                  <a
                    href={shopify?.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-body-sm text-secondary underline decoration-line-strong underline-offset-4 transition-colors hover:text-primary hover:decoration-accent"
                  >
                    {t("contact.supportViaShopify")}
                  </a>
                </li>
              </ul>
              <p className="mt-6 text-caption text-tertiary">{t("contact.note")}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
