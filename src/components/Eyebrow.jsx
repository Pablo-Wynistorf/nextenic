import { cn } from "@/lib/utils";

/**
 * Small monospaced label with a leading rule.
 *
 * The rule is what stops these from looking like the usual centred pill badge:
 * it anchors the label to the left edge of the text column and gives every
 * section a consistent entry point.
 */
export default function Eyebrow({ children, className, rule = true, as: Tag = "p" }) {
  return (
    <Tag
      className={cn(
        "flex items-center gap-3 font-mono text-micro uppercase text-tertiary",
        className,
      )}
    >
      {rule && (
        <span aria-hidden="true" className="h-px w-8 shrink-0 bg-line-strong" />
      )}
      <span>{children}</span>
    </Tag>
  );
}
