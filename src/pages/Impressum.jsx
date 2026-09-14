import LegalPage, { LegalLink, LegalSection } from "@/components/LegalPage";
import { contactEmail, contactMailto } from "@/lib/contact";
import { products } from "@/lib/products";
import { useI18n } from "@/lib/i18n";

/**
 * Impressum.
 *
 * Consolidated from the legal text the company already publishes on its own two
 * products, rather than drafted here:
 *
 *   Operator, address, applicable law and the Swiss Post disclaimer come from
 *   https://swiss-shipping-labels.ch/impressum — which publishes the
 *   applicable-law clause in all four of our languages.
 *
 *   Legal form, liability for content, liability for links, copyright and the
 *   hosting statement come from https://mailrift.io/imprint.
 *
 * Two items are pending rather than missing, and the page says which: the EU
 * Art. 27 representative (MailRift's own imprint marks it "[TO BE APPOINTED]")
 * and the commercial register entry.
 *
 * NOTE ON THE LEGAL FORM: both product imprints state a sole proprietorship not
 * entered in the commercial register, with no UID or VAT number. That is what is
 * reproduced below. It does not sit with the "GmbH" suffix used elsewhere on this
 * site — a GmbH only exists once registered — so this needs resolving before
 * launch.
 */
export default function Impressum() {
  const { t } = useI18n();
  const l = (key) => t(`legal.impressum.${key}`);
  const legalFormItems = l("legalFormItems");

  return (
    <LegalPage title={l("title")} subtitle={l("subtitle")} note={l("uwgNote")}>
      <LegalSection heading={l("operator")}>
        <p>{l("operatorIntro")}</p>
        <p>
          Pablo Wynistorf
          <br />
          Nextenic
          <br />
          Staufferstrasse 30
          <br />
          3006 Bern
          <br />
          Switzerland
        </p>
      </LegalSection>

      <LegalSection heading={l("legalForm")}>
        <ul className="list-disc space-y-2 pl-5">
          {(Array.isArray(legalFormItems) ? legalFormItems : []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection heading={l("contact")}>
        <p>
          <LegalLink href={contactMailto()}>{contactEmail()}</LegalLink>
        </p>
      </LegalSection>

      <LegalSection heading={l("responsible")}>
        <p>{l("responsibleBody")}</p>
      </LegalSection>

      <LegalSection heading={l("dataProtection")}>
        <p>{l("dataProtectionBody")}</p>
      </LegalSection>

      <LegalSection heading={l("euRep")}>
        <p>{l("euRepBody")}</p>
        <p>{l("euRepPending")}</p>
      </LegalSection>

      <LegalSection heading={l("law")}>
        <p>{l("lawText")}</p>
      </LegalSection>

      <LegalSection heading={l("liabilityContent")}>
        <p>{l("liabilityContentBody")}</p>
      </LegalSection>

      <LegalSection heading={l("liabilityLinks")}>
        <p>{l("liabilityLinksBody")}</p>
      </LegalSection>

      <LegalSection heading={l("copyright")}>
        <p>{l("copyrightBody")}</p>
      </LegalSection>

      <LegalSection heading={l("ourProducts")}>
        <p>
          {products.map((product, i) => (
            <span key={product.id}>
              {i > 0 && ", "}
              {product.name} (
              <LegalLink href={product.links.primary.href}>
                {product.links.primary.label}
              </LegalLink>
              )
            </span>
          ))}
          .
        </p>
        <p>{l("ourProductsBody")}</p>
      </LegalSection>

      <LegalSection heading={l("hosting")}>
        <p>{l("hostingBody")}</p>
        <p>{l("swissPostNote")}</p>
      </LegalSection>
    </LegalPage>
  );
}
