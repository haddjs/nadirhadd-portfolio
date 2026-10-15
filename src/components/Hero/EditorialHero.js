"use client";

import { BeaconBadge } from "@/components/ui/Badge";
import { StaggerHoverLink } from "@/components/ui/StaggerHoverLink";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { motion } from "framer-motion";
import InteractiveAvatar from "./InteractiveAvatar";

export default function EditorialHero({
  name,
  shortName,
  role,
  headline,
  now,
  profilePicture,
  availability,
}) {
  return (
    <section
      id="about-hero"
      className="relative flex lg:min-h-screen flex-col justify-center overflow-hidden border-b border-black/10 dark:border-white/10 pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-full md:px-52 px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="lg:flex items-center justify-center gap-20 sm:pt-20"
        >
          {/* Left Column: Avatar & Availability */}
          <div>
            <motion.div variants={staggerItem} className="flex justify-center">
              <InteractiveAvatar imageSrc={profilePicture} />
            </motion.div>
          </div>

          {/* Right Column: High-Impact Typography & Narrative */}
          <div className="flex flex-col justify-center">
            <motion.p
              variants={staggerItem}
              className="text-xs uppercase font-mono tracking-[0.22em] text-ink pt-12"
            >
              <span className="font-bold">{name}</span> — {role}
            </motion.p>

            <motion.h1
              variants={staggerItem}
              className="font-display mt-4 text-4xl leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              {headline}
            </motion.h1>

            {/* "Now" Status Block */}
            <motion.div
              variants={staggerItem}
              className="hidden mt-8 lg:flex flex-col sm:flex-row items-start sm:items-center gap-3 border-l-2 border-black dark:border-white pl-4 py-1"
            >
              <span className="font-mono text-md uppercase tracking-wider text-foreground font-semibold">
                Now —
              </span>
              <p className="text-md md:text-base text-ink-muted leading-relaxed">
                {now}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
