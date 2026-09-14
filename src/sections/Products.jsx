import Eyebrow from "@/components/Eyebrow";
import ProductSection from "@/components/ProductSection";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/products";
import { useI18n } from "@/lib/i18n";

/**
 * Products.
 *
 * A short framing statement, then one full section per product. The second
 * product's layout is mirrored so the page does not present the same two-column
 * silhouette twice in a row.
 */
export default function Products() {
  const { t } = useI18n();

  return (
    <div id="products" className="scroll-mt-24">
      <div className="shell py-section-sm">
        <div className="grid gap-x-10 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow as="h2">{t("productsSection.eyebrow")}</Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.06}>
              <p className="max-w-prose font-display text-h3 font-medium leading-[1.18] tracking-[-0.02em]">
                {t("productsSection.lead")}
              </p>
              <p className="mt-6 max-w-prose text-body text-secondary">
                {t("productsSection.body")}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {products.map((product, i) => (
        <ProductSection
          key={product.id}
          product={product}
          index={i + 1}
          reverse={i % 2 === 1}
        />
      ))}
    </div>
  );
}
