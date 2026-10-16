"use client";

import { BeaconBadge } from "@/components/ui/Badge";
import {
  RollingText,
  StaggerHoverLink,
} from "@/components/ui/StaggerHoverLink";
import Link from "next/link";

export default function Footer({ projects = [] }) {
  return (
    <footer
      id="contact"
      data-contrast="dark"
      className="relative z-30 border-t border-black/15 dark:border-white/15 bg-[#0a0a0c] text-[#fbfbfb] select-none"
    >
      <div className="mx-auto max-w-full px-6 py-16 md:px-20 md:py-24">
        {/* Main Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="font-display text-3xl font-medium tracking-tight"
              >
                <RollingText text="nadirhadd." />
              </Link>
              <p className="mt-3 max-w-xs text-sm text-[#999] leading-relaxed">
                Full-stack developer & creative technologist crafting interfaces
                for products people use every day.
              </p>
            </div>

            <div className="mt-8">
              <span className="text-white/80 font-display">
                Bandung, ID - GMT+7
              </span>
            </div>
          </div>

          {/* Column 1: Me */}
          <div>
            <p className="text-xs font-display uppercase tracking-[0.2em] text-[#666]">
              Me
            </p>
            <ul className="mt-5 space-y-3 text-sm font-display">
              <li>
                <StaggerHoverLink
                  href="/about"
                  className="hover:text-white text-[#bbb]"
                >
                  About
                </StaggerHoverLink>
              </li>
              <li>
                <StaggerHoverLink
                  href="/milestone"
                  className="hover:text-white text-[#bbb]"
                >
                  Milestones
                </StaggerHoverLink>
              </li>
              <li>
                <StaggerHoverLink
                  href="/logs"
                  className="hover:text-white text-[#bbb]"
                >
                  Logs
                </StaggerHoverLink>
              </li>
              <li>
                <StaggerHoverLink
                  href="/#contact"
                  className="hover:text-white text-[#bbb]"
                >
                  Contact
                </StaggerHoverLink>
              </li>
            </ul>
          </div>

          {/* Column 2: Projects */}
          <div>
            <p className="text-xs font-display uppercase tracking-[0.2em] text-[#666]">
              Projects
            </p>
            <ul className="mt-5 space-y-3 text-sm font-display">
              {projects.map((proj) => (
                <li key={proj.slug}>
                  <StaggerHoverLink
                    href={`/work/${proj.slug}`}
                    className="hover:text-white text-[#bbb]"
                  >
                    {proj.title}
                  </StaggerHoverLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <p className="text-xs font-display uppercase tracking-[0.2em] text-[#666]">
              Connect
            </p>
            <ul className="mt-5 space-y-3 text-sm font-display">
              <li>
                <StaggerHoverLink
                  href="https://github.com/haddjs"
                  external
                  className="hover:text-white text-[#bbb]"
                >
                  GitHub ↗
                </StaggerHoverLink>
              </li>
              <li>
                <StaggerHoverLink
                  href="https://www.linkedin.com/in/haddjs/"
                  external
                  className="hover:text-white text-[#bbb]"
                >
                  LinkedIn ↗
                </StaggerHoverLink>
              </li>
              <li>
                <StaggerHoverLink
                  href="mailto:haddjs22@gmail.com"
                  external
                  className="hover:text-white text-[#bbb]"
                >
                  Email ↗
                </StaggerHoverLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-display text-[#666]" />
      </div>
    </footer>
  );
}
