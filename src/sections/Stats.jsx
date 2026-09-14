import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";

/**
 * Numbers strip.
 *
 * Every figure here is a fact that can be checked against the two product sites,
 * which is the whole reason the section is allowed to exist:
 *
 *   2     products we build and operate
 *   4     languages our products are offered in
 *   4.90  CHF, MailRift's entry price per domain per month
 *   1     carrier integration — Swiss Post, via its official API
 *
 * No customer counts, no uptime percentage, no "10,000+ labels printed". Neither
 * product publishes anything of the sort, so inventing one here would be the
 * fastest way to make the whole page untrustworthy.
 *
 * CountUp animates the counts into place as they scroll in, and lands on the
 * final figure immediately under reduced motion. The price is deliberately not
 * animated: CountUp derives its decimal places from the value, so 4.90 would
 * render as "4.9", and a price quoted wrongly to save an animation is a bad
 * trade.
 */
export default function Stats() {
  const { t } = useI18n();

  const items = [
    { id: "products", count: 2, label: t("stats.products") },
    { id: "languages", count: 4, label: t("stats.languages") },
    { id: "price", value: "4.90", label: t("stats.fromPrice") },
    { id: "carriers", count: 1, label: t("stats.carriers") },
  ];

  return (
    <section aria-label={t("stats.heading")} className="border-t border-line">
      <div className="shell py-section-sm">
        <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.id} index={i}>
              <div className="border-t border-line-strong pt-5">
                <dt className="font-display text-h2 font-semibold tabular-nums tracking-[-0.03em] text-primary">
                  {item.count !== undefined ? (
                    <CountUp to={item.count} from={0} duration={1.4} delay={i * 0.08} />
                  ) : (
                    item.value
                  )}
                </dt>
                <dd className="mt-3 max-w-[24ch] text-body-sm text-secondary">
                  {item.label}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
