import {
  Globe,
  Inbox,
  Layers,
  Tags,
  Terminal,
  Truck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

/* Explicit map rather than dynamic import, so the bundle only carries the six
   icons actually used. Emoji would have been shorter and wrong. */
const ICONS = { Inbox, Globe, Terminal, Tags, Layers, Truck };

/**
 * Three grouped feature lists.
 *
 * The columns are staggered vertically on large screens — first at the top,
 * second dropped, third dropped further — so the block reads as a considered
 * arrangement rather than three equal boxes in a row. Below lg they stack in
 * source order with no offsets.
 */
export default function FeatureGroups({ groups, accent }) {
  return (
    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group, i) => {
        const Icon = ICONS[group.icon];
        return (
          <Reveal
            key={group.title}
            index={i}
            className={cn(
              i === 1 && "lg:mt-14",
              i === 2 && "lg:mt-28",
              /* The third column would otherwise sit alone on the second row
                 at the sm breakpoint. */
              i === 2 && "sm:col-span-2 lg:col-span-1",
            )}
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex size-9 items-center justify-center rounded-md border border-line bg-surface"
                style={{ color: accent }}
              >
                {Icon && <Icon strokeWidth={1.75} className="size-4.5" />}
              </span>
              <h4 className="text-h4 font-medium tracking-[-0.01em]">
                {group.title}
              </h4>
            </div>

            <ul className="mt-5 space-y-3.5">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 text-body-sm text-secondary">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-3 shrink-0"
                    style={{ backgroundColor: accent }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        );
      })}
    </div>
  );
}
