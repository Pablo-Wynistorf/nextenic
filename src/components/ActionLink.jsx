import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The site's only link/button primitive, in three weights.
 *
 * Micro-interaction: the arrow slides, the label does not. Moving the whole
 * button on hover is the usual reflex and it makes a row of them feel twitchy;
 * moving one 3px glyph reads as responsive without disturbing the layout.
 *
 * External links get ArrowUpRight and rel="noreferrer"; internal anchors get
 * ArrowRight. Both are decorative — the accessible name comes from the label.
 */

const variants = {
  primary:
    "bg-accent text-accent-contrast border-transparent hover:bg-accent-hover",
  secondary:
    "bg-transparent text-primary border-line-strong hover:border-primary hover:bg-surface-hover",
  ghost:
    "bg-transparent text-secondary border-transparent px-0 hover:text-primary",
};

export default function ActionLink({
  href,
  children,
  variant = "secondary",
  external,
  className,
  icon = true,
  ...props
}) {
  const isExternal =
    external ?? (typeof href === "string" && /^https?:\/\//.test(href));
  const Icon = isExternal ? ArrowUpRight : ArrowRight;

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : null)}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border px-5 py-2.5",
        "font-sans text-body-sm font-medium",
        "transition-[background-color,border-color,color] duration-200 ease-out-quart",
        variants[variant],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <Icon
          aria-hidden="true"
          strokeWidth={2}
          className={cn(
            "size-4 transition-transform duration-300 ease-out-expo",
            isExternal
              ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              : "group-hover:translate-x-0.5",
          )}
        />
      )}
    </a>
  );
}
