import LegalPage, {
  LegalLink,
  LegalSection,
  Placeholder,
} from "@/components/LegalPage";
import { contactEmail, contactMailto } from "@/lib/contact";
import { products } from "@/lib/products";
import { useI18n } from "@/lib/i18n";

/**
 * Impressum.
 *
 * Company details are real and supplied by the client: Staufferstrasse 30,
 * 3006 Bern, managing director Pablo Wynistorf. The UID and VAT number are
 * genuinely not yet assigned, so the page says so rather than showing a
 * CHE-xxx placeholder that looks like an oversight.
 *
 * What remains marked with <Placeholder> is the liability and jurisdiction
 * boilerplate, which is a lawyer's text, not ours to invent.
 */
export default function Impressum() {
  const { t } = useI18n();
  const l = (key) => t(`legal.impressum.${key}`);

  return (
    <LegalPage title={l("title")} subtitle={l("subtitle")}>
      <LegalSection heading={l("company")}>
        <p>
          Nextenic GmbH
          <br />
          Staufferstrasse 30
          <br />
          3006 Bern
          <br />
          Switzerland
        </p>
      </LegalSection>

      <LegalSection heading={l("contact")}>
        <p>
          <LegalLink href={contactMailto()}>{contactEmail()}</LegalLink>
        </p>
      </LegalSection>

      <LegalSection heading={l("register")}>
        <p>{l("registeredOffice")}</p>
        <p>{l("registerPending")}</p>
      </LegalSection>

      <LegalSection heading={l("management")}>
        <p>{l("managingDirector")}</p>
      </LegalSection>

      <LegalSection heading={l("responsible")}>
        <p>{l("responsibleBody")}</p>
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

      <LegalSection heading={l("disclaimer")}>
        <p>
          <Placeholder>{l("disclaimerNote")}</Placeholder>
        </p>
        <p>{l("swissPostNote")}</p>
      </LegalSection>
    </LegalPage>
  );
}
