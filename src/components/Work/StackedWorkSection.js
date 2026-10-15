"use client";

import EnterButton from "@/components/ui/EnterButton";
import Stamp from "@/components/ui/Stamp";
import { useWorkTransition } from "@/components/Work/WorkIrisTransition";
import Image from "next/image";

function ProjectCard({ project, index, total }) {
  const { navigateToWork, isPending } = useWorkTransition();
  const projectHref = `/work/${project.slug}`;
  const cover = project.images?.[0];
  const theme = project.theme || {
    bg: "#00081f",
    border: "#121c49",
    accent: "#3959f9",
    stampIris: "#3959f9",
    textMuted: "#94a3b8",
  };

  const openProject = (event) => {
    if (isPending) return;
    navigateToWork(projectHref, event, theme.bg);
  };

  // Stacked sticky positioning with ascending z-index so subsequent cards stack on top
  const zIndex = 10 + index;

  return (
    <article
      data-contrast="dark"
      style={{
        backgroundColor: theme.bg,
        borderColor: theme.border,
        zIndex: zIndex,
        willChange: "transform",
      }}
      className="sticky top-0 min-h-[90svh] md:min-h-screen w-full overflow-hidden border-t text-white shadow-2xl flex flex-col justify-between"
    >
      {/* Background Animated Watermark Stamp */}
      <Stamp
        irisColor={theme.stampIris}
        color={theme.border}
        size="clamp(16rem, 50vw, 32rem)"
        className="opacity-75"
      />

      {/* Main Grid Content */}
      <div className="relative z-10 mx-auto w-full max-w-full px-6 md:px-20 pt-12 md:pt-20 pb-8 flex-1 flex flex-col justify-between">
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 text-xs font-mono tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: theme.accent }}
            />
            <span>
              0{index + 1} / 0{total}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-white/60">
            {project.disciplines?.join("  •  ")}
          </div>

          <div>{project.year}</div>
        </div>

        {/* Center Grid: Narrative + Mockup */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center my-auto py-8">
          {/* Left Column: Project Info & Enter CTA */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <p
              className="text-xs font-mono uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              Case Study
            </p>

            <h3 className="font-display mt-2 text-3xl font-medium tracking-tight text-white md:text-5xl">
              {project.title}
            </h3>

            <p className="mt-4 text-sm md:text-base leading-relaxed text-white/70">
              {project.description.length > 200
                ? `${project.description.slice(0, 200).trim()}…`
                : project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech_stacks.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-mono text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Enter Button with Curved Arrow Path */}
            <div className="mt-8">
              <EnterButton
                href={projectHref}
                label={`View ${project.title}`}
                accentColor={theme.accent}
                disabled={isPending}
                onNavigate={openProject}
              />
            </div>
          </div>

          {/* Right Column: Media Preview */}
          <div className="lg:col-span-7">
            {cover?.image_url && (
              <button
                type="button"
                onClick={openProject}
                disabled={isPending}
                aria-label={`View ${project.title}`}
                className={`group relative block w-full aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl text-left ${
                  isPending ? "pointer-events-none opacity-80" : ""
                }`}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={cover.image_url}
                    alt={cover.alt ?? project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                </div>

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-20" />
              </button>
            )}
          </div>
        </div>

        {/* Bottom Banner Title (Joonas Sandell Signature Oversized Clamp Heading) */}
        <div className="border-t border-white/10 pt-4 overflow-hidden">
          <p className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white/20 select-none whitespace-nowrap">
            {project.title} — {project.year}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function StackedWorkSection({ projects = [] }) {
  return (
    <section id="work" className="scroll-mt-20 relative w-full">
      {/* Section Header */}
      <div className="mx-auto w-full max-w-full px-6 pt-20 pb-10 md:px-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-black/10 dark:border-white/10">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.24em] text-ink-muted">
            Selected Works
          </p>
          <h2 className="font-display mt-2 text-3xl font-medium tracking-tight text-foreground md:text-5xl">
            Featured Projects
          </h2>
        </div>

        <p className="max-w-md text-sm text-ink-muted leading-relaxed">
          Production front-end engineering, ERP workflows, ATS tooling, and
          component-driven web applications.
        </p>
      </div>

      {/* Stacked Project Cards */}
      <div className="relative pb-16 md:pb-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id || project.slug}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
}
