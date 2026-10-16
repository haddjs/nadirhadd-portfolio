"use client";

import Footer from "@/components/Footer";
import MilestoneTimeline from "@/components/Milestone/MilestoneTimeline";
import Navbar from "@/components/Navbar";
import { StaggerHoverLink } from "@/components/ui/StaggerHoverLink";
import { milestones, projects } from "@/constants/constants";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { motion } from "framer-motion";

export default function MilestoneContent() {
  return (
    <div className="site-shell flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-28 md:pt-32">
        <article className="mx-auto w-full max-w-full px-6 pb-24 md:px-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p variants={staggerItem} className="text-sm text-ink-muted">
              <StaggerHoverLink href="/" className="hover:text-teal">
                Home
              </StaggerHoverLink>
              <span className="mx-2 opacity-40">/</span>
              Milestone
            </motion.p>

            <motion.header variants={staggerItem} className="mt-8 max-w-3xl">
              <p className="text-xs font-display uppercase tracking-[0.24em] text-ink-muted">
                Timeline
              </p>
              <h1 className="font-display mt-4 text-4xl tracking-tight md:text-6xl lg:text-7xl">
                Milestone
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted md:text-xl">
                Chronological checkpoints throughout my journeys since college.
              </p>
            </motion.header>
          </motion.div>

          <MilestoneTimeline milestones={milestones} />
        </article>
      </main>
      <Footer projects={projects} />
    </div>
  );
}
