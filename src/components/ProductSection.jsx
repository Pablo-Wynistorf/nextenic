import ActionLink from "@/components/ActionLink";
import Eyebrow from "@/components/Eyebrow";
import FeatureGroups from "@/components/FeatureGroups";
import GlareHover from "@/components/GlareHover";
import Reveal from "@/components/Reveal";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import ScrollFloat from "@/components/ScrollFloat";
import SpecTable from "@/components/SpecTable";
import { useI18n } from "@/lib/i18n";
import { asset, cn, ordinal } from "@/lib/utils";

/**
 * One product, presented the way the product's own marketing page would present
 * it: identity and specs in a narrow left column, screenshots large on the
 * right, then the differentiator, then features, then who it is for.
 *
 * The left column sticks while the screenshots scroll on large screens, so the
 * product's name and price stay in view for the whole section. Below lg it
 * unsticks and stacks.
 *
 * `reverse` mirrors the two-column arrangement for the second product, so the
 * page does not repeat the same silhouette twice.
 *
 * All prose comes from the active locale under products.<id>; only structure,
 * links and assets come from src/lib/products.js.
 */
export default function ProductSection({ product, index, reverse = false }) {
  const { t } = useI18n();
  const { id, name, accent, logo, featureIcons, screenshots, phoneScreenshot, links } =
    product;

  const scope = `products.${id}`;
  const facts = t(`${scope}.facts`);
  const featureTitles = t(`${scope}.featureGroups`);
  const disclaimer = t(`${scope}.disclaimer`);
  const trial = t(`${scope}.trial`);
  const hasDisclaimer = typeof disclaimer === "string" && !disclaimer.startsWith(scope);
  const hasTrial = typeof trial === "string" && !trial.startsWith(scope);

  /* Pair the icon names held in products.js with the translated group copy. */
  const groups = (Array.isArray(featureTitles) ? featureTitles : []).map(
    (group, i) => ({ ...group, icon: featureIcons[i] }),
  );

  const shots = screenshots.map((shot) => ({
    ...shot,
    caption: t(`${scope}.screenshots.${shot.id}.caption`),
    alt: t(`${scope}.screenshots.${shot.id}.alt`),
  }));

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 border-t border-line py-section-sm"
    >
      <div className="shell">
        <div className="grid items-start gap-x-10 gap-y-12 lg:grid-cols-12">
          {/* --- Identity column ------------------------------------------- */}
          <div
            className={cn(
              "lg:col-span-5 lg:sticky lg:top-28",
              reverse ? "lg:order-2 lg:col-start-8" : "lg:order-1",
            )}
          >
            <Reveal>
              <Eyebrow>{t("productsSection.ordinal", { n: ordinal(index) })}</Eyebrow>

              <div className="mt-7 flex items-center gap-4">
                {/* GlareHover sweeps a highlight across the mark on hover. */}
                <GlareHover
                  width="3rem"
                  height="3rem"
                  borderRadius="0.625rem"
                  glareColor="#ffffff"
                  glareOpacity={0.35}
                  glareSize={220}
                  transitionDuration={700}
                  className="shrink-0 rounded-md border border-line"
                >
                  <img
                    src={asset(logo.src)}
                    width={logo.width}
                    height={logo.height}
                    alt={t(`${scope}.logoAlt`)}
                    loading="lazy"
                    decoding="async"
                    className="size-12 rounded-md"
                  />
                </GlareHover>
                <div>
                  <ScrollFloat
                    tag="h3"
                    id={`${id}-heading`}
                    containerClassName="text-h3 font-semibold tracking-[-0.02em] font-display"
                    stagger={0.018}
                    animationDuration={0.8}
                  >
                    {name}
                  </ScrollFloat>
                  <p className="text-body-sm text-secondary">{t(`${scope}.tagline`)}</p>
                </div>
              </div>

              <p className="mt-7 max-w-measure text-body-lg text-secondary">
                {t(`${scope}.summary`)}
              </p>

              {Array.isArray(facts) && <SpecTable items={facts} className="mt-9" />}

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ActionLink href={links.primary.href} variant="primary">
                  {links.primary.label}
                </ActionLink>
                {links.shopify && (
                  <ActionLink href={links.shopify.href} variant="secondary">
                    {t(`productsSection.linkLabels.${links.shopify.key}`)}
                  </ActionLink>
                )}
                {links.secondary?.map((link) => (
                  <ActionLink
                    key={link.href}
                    href={link.href}
                    variant="ghost"
                    className="px-1"
                  >
                    {t(`productsSection.linkLabels.${link.key}`)}
                  </ActionLink>
                ))}
              </div>

              {links.alternate && (
                <p className="mt-5 font-mono text-micro uppercase text-tertiary">
                  {t("productsSection.alsoAt")}{" "}
                  <a
                    href={links.alternate.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary underline decoration-line-strong underline-offset-4 transition-colors hover:text-primary hover:decoration-accent"
                  >
                    {links.alternate.label}
                  </a>
                </p>
              )}
            </Reveal>
          </div>

          {/* --- Screenshots ---------------------------------------------- */}
          <div
            className={cn(
              "lg:col-span-7",
              reverse ? "lg:order-1 lg:col-start-1" : "lg:order-2",
            )}
          >
            <Reveal delay={0.08}>
              <ScreenshotGallery
                screenshots={shots}
                domainLabel={links.primary.label}
                priority={index === 1}
              />
            </Reveal>

            {/* The phone shot only exists for MailRift. */}
            {phoneScreenshot && (
              <Reveal delay={0.12} className="mt-8">
                <div className="flex flex-col gap-6 rounded-lg border border-line bg-canvas-raised p-6 sm:flex-row sm:items-center">
                  <img
                    src={asset(phoneScreenshot.src)}
                    width={phoneScreenshot.width}
                    height={phoneScreenshot.height}
                    alt={t(`${scope}.mobile.alt`)}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 640px) 150px, 60vw"
                    className="h-auto w-32 shrink-0 rounded-md border border-line-strong sm:w-[9.5rem]"
                  />
                  <div>
                    <h4 className="text-h4 font-medium">
                      {t(`${scope}.mobile.title`)}
                    </h4>
                    <p className="mt-2 max-w-measure text-body-sm text-secondary">
                      {t(`${scope}.mobile.body`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>

        {/* --- The differentiator --------------------------------------- */}
        <Reveal className="mt-section-sm">
          <div className="border-l-2 pl-6 sm:pl-8" style={{ borderColor: accent }}>
            <p className="font-mono text-micro uppercase text-tertiary">
              {t(`${scope}.angle.label`)}
            </p>
            <p className="mt-4 max-w-prose font-display text-h3 font-medium leading-[1.15] tracking-[-0.02em] text-primary">
              {t(`${scope}.angle.body`)}
            </p>
          </div>
        </Reveal>

        {/* --- Features -------------------------------------------------- */}
        <div className="mt-section-sm">
          <FeatureGroups groups={groups} accent={accent} />
        </div>

        {/* --- Audience and caveats ------------------------------------- */}
        <Reveal className="mt-section-sm">
          <div className="grid gap-x-10 gap-y-8 border-t border-line pt-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>{t("productsSection.whoItIsFor")}</Eyebrow>
              <p className="mt-5 text-body-lg text-primary">
                {t(`${scope}.audience.lead`)}
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-6">
              <p className="text-body text-secondary">{t(`${scope}.audience.body`)}</p>
              {hasTrial && <p className="mt-5 text-body-sm text-tertiary">{trial}</p>}
              {/* Reproduced from the product's own site. */}
              {hasDisclaimer && (
                <p className="mt-5 border-t border-line pt-5 text-caption text-tertiary">
                  {disclaimer}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
