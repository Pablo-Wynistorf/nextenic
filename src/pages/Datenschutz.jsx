import LegalPage, {
  LegalLink,
  LegalSection,
  Placeholder,
} from "@/components/LegalPage";
import { contactEmail, contactMailto } from "@/lib/contact";
import { useI18n } from "@/lib/i18n";

/**
 * Datenschutz.
 *
 * Headings follow the shape of a Swiss FADP / EU GDPR privacy statement so the
 * legal text can be dropped straight in. The statements that are already true of
 * this website — no cookies, no analytics, no contact form, preferences kept in
 * localStorage — are stated plainly, because they are verifiable from the source.
 * Everything requiring a legal basis is marked TO FILL.
 */
export default function Datenschutz() {
  const { t } = useI18n();
  const l = (key) => t(`legal.datenschutz.${key}`);

  return (
    <LegalPage title={l("title")} subtitle={l("subtitle")}>
      <LegalSection heading={l("controller")}>
        <p>{l("controllerBody")}</p>
        <p>
          <LegalLink href={contactMailto()}>{contactEmail()}</LegalLink>
          <br />
          <LegalLink to="/impressum">{l("seeImpressum")}</LegalLink>
        </p>
        <p>
          <Placeholder>{l("representative")}</Placeholder>
        </p>
      </LegalSection>

      <LegalSection heading={l("thisSite")}>
        <p>{l("thisSiteBody")}</p>
        <p>{l("fontsBody")}</p>
        <p>
          <Placeholder>{l("fontsNote")}</Placeholder>
        </p>
        <p>
          <Placeholder>{l("hostingNote")}</Placeholder>
        </p>
      </LegalSection>

      <LegalSection heading={l("email")}>
        <p>
          <Placeholder>{l("emailNote")}</Placeholder>
        </p>
      </LegalSection>

      <LegalSection heading={l("ourProducts")}>
        <p>{l("ourProductsBody")}</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <LegalLink href="https://mailrift.io/privacy">
              {l("mailriftPolicy")}
            </LegalLink>
          </li>
          <li>
            <LegalLink href="https://swiss-shipping-labels.ch/privacy">
              {l("sslPolicy")}
            </LegalLink>
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading={l("rights")}>
        <p>
          <Placeholder>{l("rightsNote")}</Placeholder>
        </p>
      </LegalSection>

      <LegalSection heading={l("changes")}>
        <p>
          <Placeholder>{l("changesNote")}</Placeholder>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
