import { cn } from "@/lib/utils";

/**
 * Key/value facts as a definition list.
 *
 * A spec table rather than a row of feature cards. Cards inflate five short
 * facts into five boxes of mostly padding; a table lets the eye scan the keys
 * down one edge, which is how anyone actually compares two products.
 */
export default function SpecTable({ items, className }) {
  return (
    <dl className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item) => (
        <div
          key={item.key}
          className="grid grid-cols-[minmax(6.5rem,0.6fr)_1.4fr] gap-4 py-3"
        >
          <dt className="font-mono text-micro uppercase text-tertiary">
            {item.key}
          </dt>
          <dd className="text-body-sm text-primary">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
