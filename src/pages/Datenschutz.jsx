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
 * Consolidated from the company's own published policies rather than drafted
 * here. The rights list carries the same GDPR/FADP article pairings MailRift
 * cites at https://mailrift.io/privacy, and the EU Art. 27 representative is
 * described as pending because that is its actual state on MailRift's imprint.
 *
 * The statements about this website — no cookies, no analytics, no contact form,
 * preferences kept in localStorage — are verifiable from this repository.
 *
 * What remains marked as TO FILL is narrow and genuinely undecided: the retention
 * period for enquiry correspondence, and whether to keep Google Fonts or
 * self-host them.
 */
export default function Datenschutz() {
  const { t } = useI18n();
  const l = (key) => t(`legal.datenschutz.${key}`);
  const rightsItems = l("rightsItems");

  return (
    <LegalPage title={l("title")} subtitle={l("subtitle")} note={l("scopeNote")}>
      <LegalSection heading={l("controller")}>
        <p>{l("controllerBody")}</p>
        <p>
          <LegalLink href={contactMailto()}>{contactEmail()}</LegalLink>
          <br />
          <LegalLink to="/impressum">{l("seeImpressum")}</LegalLink>
        </p>
      </LegalSection>

      <LegalSection heading={l("representative")}>
        <p>{l("representativeBody")}</p>
      </LegalSection>

      <LegalSection heading={l("thisSite")}>
        <p>{l("thisSiteBody")}</p>
      </LegalSection>

      <LegalSection heading={l("analytics")}>
        <p>{l("analyticsBody")}</p>
        <p>{l("analyticsTransfer")}</p>
        <p>
          <Placeholder>{l("analyticsConsentNote")}</Placeholder>
        </p>
      </LegalSection>

      <LegalSection heading={l("hosting")}>
        <p>{l("hostingBody")}</p>
      </LegalSection>

      <LegalSection heading={l("fonts")}>
        <p>{l("fontsBody")}</p>
        <p>
          <Placeholder>{l("fontsNote")}</Placeholder>
        </p>
      </LegalSection>

      <LegalSection heading={l("email")}>
        <p>{l("emailBody")}</p>
        <p>
          <Placeholder>{l("emailNote")}</Placeholder>
        </p>
      </LegalSection>

      <LegalSection heading={l("contactForm")}>
        <p>
          <Placeholder>{l("contactFormNote")}</Placeholder>
        </p>
      </LegalSection>

      <LegalSection heading={l("rights")}>
        <p>{l("rightsBody")}</p>
        <ul className="list-disc space-y-2 pl-5">
          {(Array.isArray(rightsItems) ? rightsItems : []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{l("rightsContact")}</p>
      </LegalSection>

      <LegalSection heading={l("complaint")}>
        <p>{l("complaintBody")}</p>
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

      <LegalSection heading={l("changes")}>
        <p>{l("changesBody")}</p>
      </LegalSection>
    </LegalPage>
  );
}
