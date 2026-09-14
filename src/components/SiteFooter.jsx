import { Link } from "react-router-dom";
import Wordmark from "@/components/Wordmark";
import { products } from "@/lib/products";
import { contactMailto } from "@/lib/contact";
import { useI18n } from "@/lib/i18n";

/**
 * Footer.
 *
 * Carries the two legal links a Swiss site is expected to have, the product links
 * again for anyone who scrolled past them, and nothing else. No newsletter box,
 * no social icons for accounts that do not exist.
 *
 * Impressum and Datenschutz keep their German names in every language: those are
 * the terms Swiss visitors look for, and the pages are conventionally titled that
 * way regardless of the surrounding language.
 */
export default function SiteFooter() {
  const { t } = useI18n();
  const shopify = products.find((p) => p.links.shopify)?.links.shopify;

  return (
    <footer className="border-t border-line bg-canvas-sunken">
      <div className="shell py-16">
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark />
            <p className="mt-5 max-w-measure text-body-sm text-secondary">
              {t("footer.tagline")}
            </p>
          </div>

          <nav aria-label={t("footer.products")} className="lg:col-span-3 lg:col-start-7">
            <h2 className="font-mono text-micro uppercase text-tertiary">
              {t("footer.products")}
            </h2>
            <ul className="mt-5 space-y-3">
              {products.map((product) => (
                <li key={product.id}>
                  <a
                    href={product.links.primary.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-body-sm text-secondary transition-colors hover:text-primary"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={shopify?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-body-sm text-secondary transition-colors hover:text-primary"
                >
                  {t("productsSection.linkLabels.shopify")}
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label={t("footer.legal")} className="lg:col-span-2 lg:col-start-11">
            <h2 className="font-mono text-micro uppercase text-tertiary">
              {t("footer.legal")}
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/impressum"
                  className="text-body-sm text-secondary transition-colors hover:text-primary"
                >
                  {t("footer.impressum")}
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="text-body-sm text-secondary transition-colors hover:text-primary"
                >
                  {t("footer.datenschutz")}
                </Link>
              </li>
              <li>
                <a
                  href={contactMailto()}
                  className="text-body-sm text-secondary transition-colors hover:text-primary"
                >
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-micro uppercase text-tertiary">
            {t("footer.rights", { year: new Date().getFullYear() })}
          </p>
          <p className="max-w-prose text-caption text-tertiary">
            {t("footer.trademark")}
          </p>
        </div>
      </div>
    </footer>
  );
}
