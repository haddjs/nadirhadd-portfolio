"use client";

import {
  RollingText,
  StaggerHoverLink,
} from "@/components/ui/StaggerHoverLink";
import { projects } from "@/constants/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/about", label: "About" },
  // { href: "/ui-lab", label: "UI Lab" },
  { href: "/milestone", label: "Milestones" },
  { href: "/logs", label: "Logs" },
  // { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [mobileWorkExpanded, setMobileWorkExpanded] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  const previewProjects = projects.slice(0, 3);

  useEffect(() => {
    const updateContrast = () => {
      const navY = 40;
      const darkSections = document.querySelectorAll('[data-contrast="dark"]');
      let overDark = false;

      for (const section of darkSections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navY && rect.bottom >= navY) {
          overDark = true;
          break;
        }
      }

      if (!overDark && typeof document.elementsFromPoint === "function") {
        const elements = document.elementsFromPoint(
          window.innerWidth / 2,
          navY,
        );
        for (const el of elements) {
          if (el.closest("header")) continue;
          if (
            el.getAttribute("data-contrast") === "dark" ||
            el.closest('[data-contrast="dark"]')
          ) {
            overDark = true;
            break;
          }
          const bg = window.getComputedStyle(el).backgroundColor;
          if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (match) {
              const r = parseInt(match[1], 10);
              const g = parseInt(match[2], 10);
              const b = parseInt(match[3], 10);
              const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
              if (lum < 0.45) {
                overDark = true;
              }
            }
            break;
          }
        }
      }

      setIsOverDark(overDark);
    };

    updateContrast();
    window.addEventListener("scroll", updateContrast, { passive: true });
    window.addEventListener("resize", updateContrast, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateContrast);
      window.removeEventListener("resize", updateContrast);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setWorkDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setWorkDropdownOpen(false);
    }, 180);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full select-none bg-transparent">
        <nav className="mx-auto flex max-w-full items-center justify-between px-6 py-4 md:px-20 md:py-5">
          {/* Logo with Rolling Text effect */}
          <Link
            href="/"
            className={`font-display text-3xl tracking-tight font-medium hover:opacity-80 ${
              isOverDark ? "text-white" : "text-foreground"
            }`}
          >
            <RollingText text="nadirhadd." />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden items-center gap-7 md:flex text-xl font-display tracking-wider uppercase">
            <div
              className={`h-[2px] w-6 transition-colors duration-200 ${
                isOverDark ? "bg-white/40" : "bg-border"
              }`}
            />

            {/* Work Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/#work"
                className={`inline-flex items-center gap-1.5 transition-all duration-200 hover:opacity-70 ${
                  isOverDark ? "text-white" : "text-foreground"
                } ${
                  pathname.startsWith("/work") || pathname === "/#work"
                    ? isOverDark
                      ? "border-b-2 border-white"
                      : "border-b-2 border-foreground"
                    : "border-b-2 border-transparent"
                }`}
              >
                <RollingText text="Work" />
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    workDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {workDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-full mt-2 w-80 rounded-xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur-xl normal-case font-sans text-card-foreground"
                  >
                    <div className="px-3 pt-1 pb-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      Selected Works
                    </div>

                    <div className="flex flex-col gap-1 py-1">
                      {previewProjects.map((project, idx) => (
                        <Link
                          key={project.id}
                          href={`/work/${project.slug}`}
                          onClick={() => setWorkDropdownOpen(false)}
                          className="group flex flex-col rounded-lg px-3 py-2 transition-colors hover:bg-foreground/5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-foreground group-hover:text-teal transition-colors">
                              {project.title}
                            </span>
                            <span className="text-[10px] font-mono text-muted-foreground">
                              0{idx + 1}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground truncate mt-0.5">
                            {project.disciplines?.join(" • ") ||
                              project.tagline}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-2 border-t border-border pt-2">
                      <Link
                        href="/#work"
                        onClick={() => setWorkDropdownOpen(false)}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-mono tracking-wider uppercase text-teal hover:bg-foreground/5 transition-colors font-semibold"
                      >
                        <span>More projects →</span>
                        <span className="text-[10px] text-muted-foreground">
                          ({projects.length})
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <StaggerHoverLink
                key={link.href}
                href={link.href}
                className={`inline-block transition-all duration-200 hover:opacity-70 ${
                  isOverDark ? "text-white" : "text-foreground"
                } ${
                  link.href === pathname
                    ? isOverDark
                      ? "border-b-2 border-white"
                      : "border-b-2 border-foreground"
                    : "border-b-2 border-transparent"
                }`}
              >
                {link.label}
              </StaggerHoverLink>
            ))}
            <ThemeToggle
              className={`transition-colors duration-200 ${
                isOverDark
                  ? "text-white hover:text-white"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            />
          </div>

          {/* Mobile Menu Button with Optical Stretch Morph */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle
              className={`transition-colors duration-200 ${
                isOverDark
                  ? "text-white hover:text-white"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative flex h-9 w-9 items-center justify-center rounded-full border overflow-hidden transition-colors duration-200 ${
                isOverDark
                  ? "border-white/50 text-white"
                  : "border-border text-foreground"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                animate={{
                  scaleY: isOpen ? 1 : 1,
                  rotate: isOpen ? 90 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.68, 0, 0.1, 1] }}
                className="flex flex-col items-center justify-center gap-1"
              >
                <span
                  className={`h-0.5 w-4 transition-all duration-300 ${
                    isOverDark ? "bg-white" : "bg-foreground"
                  } ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
                />
                <span
                  className={`h-0.5 w-4 transition-all duration-200 ${
                    isOverDark ? "bg-white" : "bg-foreground"
                  } ${isOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-0.5 w-4 transition-all duration-300 ${
                    isOverDark ? "bg-white" : "bg-foreground"
                  } ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                />
              </motion.div>
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Mobile Drawer Mask */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.68, 0, 0.1, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-background/95 backdrop-blur-xl text-foreground px-8 pt-28 pb-12 md:hidden border-b border-border"
          >
            <div className="flex flex-col gap-6 font-mono">
              {/* Work item with mobile expand */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileWorkExpanded(!mobileWorkExpanded)}
                  className="flex w-full items-center justify-between text-5xl sm:text-6xl text-left hover:text-teal transition-colors uppercase"
                >
                  <span>Work</span>
                  <ChevronDown
                    className={`h-8 w-8 transition-transform duration-200 ${
                      mobileWorkExpanded
                        ? "rotate-180 text-teal"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileWorkExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-2 pt-4 flex flex-col gap-3"
                    >
                      {previewProjects.map((project, idx) => (
                        <Link
                          key={project.id}
                          href={`/work/${project.slug}`}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileWorkExpanded(false);
                          }}
                          className="flex items-baseline justify-between text-2xl text-foreground/80 hover:text-teal"
                        >
                          <span className="font-sans font-medium">
                            {project.title}
                          </span>
                        </Link>
                      ))}

                      <Link
                        href="/#work"
                        onClick={() => {
                          setIsOpen(false);
                          setMobileWorkExpanded(false);
                        }}
                        className="pt-2 text-2xl text-teal hover:opacity-80 flex items-center justify-between font-mono"
                      >
                        <span>More projects →</span>
                        <span className="text-xs text-muted-foreground">
                          ({projects.length})
                        </span>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-5xl sm:text-6xl hover:text-teal transition-colors uppercase"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-border pt-6 text-xs font-mono text-muted-foreground">
              <p>Nadir Hadd — Front-end Developer</p>
              <p className="mt-1">Bandung, Indonesia (GMT+7)</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
