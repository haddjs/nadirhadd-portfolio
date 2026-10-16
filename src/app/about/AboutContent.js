"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import EnterButton from "@/components/ui/EnterButton";
import {
  RollingText,
  StaggerHoverLink,
} from "@/components/ui/StaggerHoverLink";
import { about, milestones, projects, skills } from "@/constants/constants";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function AboutContent() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="site-shell flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Hero Section: starts at very top behind navbar, ends at border-b */}
        <section
          ref={heroRef}
          className="relative isolate w-full border-b border-black/10 dark:border-white/10 pt-28 md:pt-36 pb-16 overflow-hidden"
        >
          {/* Background profile image with low opacity and parallax effect */}
          <motion.div
            aria-hidden="true"
            style={{ y }}
            className="pointer-events-none absolute inset-x-0 -top-8 -bottom-16 -z-10 bg-[url('/assets/images/About.png')] bg-cover bg-[center_top] bg-no-repeat opacity-40 dark:opacity-20 will-change-transform"
          />

          <div className="mx-auto w-full max-w-full px-6 md:px-20">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-ink-muted"
            >
              <StaggerHoverLink href="/" className="hover:text-foreground">
                Home
              </StaggerHoverLink>
              <span className="opacity-40">/</span>
              <span>About</span>
            </motion.div>

            {/* Hero Header */}
            <motion.header
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mt-10 max-w-4xl"
            >
              <motion.h1
                variants={staggerItem}
                className="font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                I&apos;m a full-stack developer. I design and build the systems
                behind the interface. APIs, data models, and the UIs that
                consume them.
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="mt-8 text-lg md:text-xl leading-relaxed text-ink-muted font-normal max-w-3xl"
              >
                With three internships shipping production React/Next.js systems
                and a growing backend foundation in Node, Express, and
                PostgreSQL. I've architected relational data models, JWT/cookie
                auth flows, REST APIs, and type-safe state machines for
                multi-tier approval workflows. I currently work toward deeper
                backend range by developing an HRIS platform.
              </motion.p>
            </motion.header>
          </div>
        </section>

        <article className="mx-auto w-full max-w-full px-6 md:px-20">
          {/* Categorized Skills Grid (Joonas Sandell Style) */}
          <section className="mt-16 border-b border-black/10 dark:border-white/10 pb-20">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-display uppercase tracking-[0.24em] text-ink-muted">
                  Technical Repertoire
                </p>
                <h2 className="font-display mt-2 text-3xl font-medium tracking-tight md:text-4xl">
                  Skills & Tooling
                </h2>
              </div>
            </div>

            <div className="grid gap-px bg-black/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
              {Object.entries(skills).map(([key, group]) => (
                <div
                  key={key}
                  className="bg-background p-8 flex flex-col justify-start"
                >
                  <div>
                    <span className="text-[11px] font-display uppercase tracking-widest text-ink-muted">
                      0{Object.keys(skills).indexOf(key) + 1}
                    </span>
                    <h3 className="font-display text-xl font-medium mt-2 text-foreground">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="mt-6 space-y-2 text-sm text-ink-muted font-display">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-foreground/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Companies & Experience Highlights */}
          <section className="mt-16 border-b border-black/10 dark:border-white/10 pb-20">
            <p className="text-xs font-display uppercase tracking-[0.24em] text-ink-muted">
              Track Record
            </p>
            <h2 className="font-display mt-2 text-3xl font-medium tracking-tight md:text-4xl mb-12">
              Where I’ve Contributed
            </h2>

            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className="grid gap-6 md:grid-cols-12 rounded-xl border border-black/10 dark:border-white/10 p-6 md:p-8 hover:border-black/30 dark:hover:border-white/30 transition-colors"
                >
                  <div className="md:col-span-4">
                    <p className="text-xs font-display text-ink-muted">
                      {milestone.start_date.slice(0, 7)} —{" "}
                      {milestone.end_date
                        ? milestone.end_date.slice(0, 7)
                        : "Present"}
                    </p>
                    <h3 className="font-display text-2xl font-medium text-foreground mt-1">
                      {milestone.url ? (
                        <Link
                          href={
                            milestone.url.startsWith("http://") ||
                            milestone.url.startsWith("https://") ||
                            milestone.url.startsWith("/")
                              ? milestone.url
                              : `/work/${milestone.url}`
                          }
                          target={
                            milestone.url.startsWith("http://") ||
                            milestone.url.startsWith("https://")
                              ? "_blank"
                              : "_self"
                          }
                          className="group hover:opacity-80 transition-opacity duration-150 underline"
                        >
                          {`${milestone.company_name || milestone.title}`}{" "}
                          <RollingText text="↗" />
                        </Link>
                      ) : (
                        milestone.company_name || milestone.title
                      )}
                    </h3>
                    <p className="text-sm font-sans text-ink-muted mt-1">
                      {milestone.title}
                    </p>
                  </div>

                  <div className="md:col-span-8 flex flex-col justify-between">
                    <p className="text-sm md:text-base font-sans leading-relaxed text-ink-muted">
                      {milestone.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {milestone.tech_stacks?.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-black/10 dark:border-white/15 px-3 py-0.5 text-xs font-display text-ink-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact & Next Steps CTA */}
          <section className="mt-16 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-medium text-foreground">
                Interested in working together?
              </h3>
              <p className="text-sm text-ink-muted mt-1">
                Reach out for full-time frontend roles, freelance projects, or
                just to chat.
              </p>
            </div>

            <EnterButton
              href="mailto:haddjs22@gmail.com"
              label="Get in touch"
              accentColor="#10b981"
            />
          </section>
        </article>
      </main>

      <Footer projects={projects} />
    </div>
  );
}
