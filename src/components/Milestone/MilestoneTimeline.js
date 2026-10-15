"use client";

import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import { RollingText, StaggerHoverLink } from "../ui/StaggerHoverLink";

const formatRange = (start, end) => {
  const opts = { month: "short", year: "numeric" };
  const startLabel = new Date(start).toLocaleDateString("en-US", opts);
  const endLabel = end
    ? new Date(end).toLocaleDateString("en-US", opts)
    : "Present";
  return `${startLabel} — ${endLabel}`;
};

// Custom Horizontal Timeline Component
function HorizontalTimeline({ items }) {
  return (
    <div className="relative w-full overflow-x-auto pb-6 pt-4 scrollbar-none">
      <div className="flex min-w-max items-start gap-8 px-2">
        {items.map((item, index) => {
          const title = item.company_name || item.title;
          const subtitle = item.company_name && item.title;
          const isLast = index === items.length - 1;

          return (
            <div
              key={`node-${item.id || index}`}
              className="relative flex flex-col items-start w-56"
            >
              {/* Timeline Connector Line & Node Dot */}
              <div className="relative flex w-full items-center">
                <div className="z-10 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                {!isLast && <div className="h-[2px] w-full bg-border" />}
              </div>

              {/* Date Badge */}
              <time className="mt-3 text-xs font-mono text-ink-muted">
                {new Date(item.start_date).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </time>

              {/* Text Information */}
              <div className="mt-2 space-y-1">
                <p className="font-medium text-foreground text-sm line-clamp-1">
                  {title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const MilestoneTimeline = ({ milestones = [] }) => {
  const chronological = useMemo(
    () =>
      [...milestones].sort(
        (a, b) => new Date(a.start_date) - new Date(b.start_date),
      ),
    [milestones],
  );

  if (chronological.length === 0) {
    return (
      <div className="mt-14 md:mt-20">
        <p className="text-ink-muted">No milestones yet.</p>
      </div>
    );
  }

  return (
    <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
      {/* Horizontal Nodes View */}
      <motion.section
        aria-label="Experience timeline"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <HorizontalTimeline items={chronological} />
      </motion.section>

      {/* Events Table View */}
      <motion.section
        aria-labelledby="milestone-table-heading"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-border text-base uppercase tracking-[0.14em] text-ink-muted">
                <th scope="col" className="py-3 pr-6 font-medium">
                  Event [{chronological.length}]
                </th>
                <th scope="col" className="py-3 pr-6 font-medium">
                  Category
                </th>
                <th scope="col" className="py-3 font-medium">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {[...chronological].reverse().map((item) => (
                <motion.tr
                  key={`row-${item.id}`}
                  variants={staggerItem}
                  className="border-b border-border/70 align-top last:border-b-0"
                >
                  <td className="py-4 pr-6">
                    <p className="font-medium text-foreground">
                      {item.url ? (
                        <Link
                          href={
                            item.url.startsWith("http://") ||
                            item.url.startsWith("https://") ||
                            item.url.startsWith("/")
                              ? item.url
                              : `/work/${item.url}`
                          }
                          className="hover:opacity-80 hover:text-lg transition-all duration-150"
                        >
                          {`${item.company_name || item.title} ↗`}
                        </Link>
                      ) : (
                        item.company_name || item.title
                      )}
                    </p>
                    {item.title && item.company_name ? (
                      <p className="mt-1 text-ink-muted">{item.title}</p>
                    ) : null}
                  </td>
                  <td className="py-4 pr-6 text-ink-muted capitalize">
                    {item.kind}
                  </td>
                  <td className="whitespace-nowrap py-4 text-ink-muted">
                    {formatRange(item.start_date, item.end_date)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>
    </div>
  );
};

export default MilestoneTimeline;
