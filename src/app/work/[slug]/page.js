import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WorkReveal from "@/components/Work/WorkReveal";
import EnterButton from "@/components/ui/EnterButton";
import { StaggerHoverLink } from "@/components/ui/StaggerHoverLink";
import Stamp from "@/components/ui/Stamp";
import { getProjectBySlug, projects } from "@/constants/constants";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.tagline || project.description,
  };
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const theme = project.theme || {
    bg: "#00081f",
    border: "#121c49",
    accent: "#3959f9",
    stampIris: "#3959f9",
  };

  return (
    <div className="site-shell flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-28 md:pt-36">
        <WorkReveal>
          {/* Hero Section of the Case Study */}
          <article className="mx-auto w-full px-6 pb-24 md:px-20">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-ink-muted">
              <StaggerHoverLink href="/#work" className="hover:text-foreground">
                Work
              </StaggerHoverLink>
              <span className="opacity-40">/</span>
              <span>{project.title}</span>
            </nav>

            {/* Header */}
            <header className="relative mt-10 border-b border-black/10 dark:border-white/10 pb-16 overflow-hidden">
              {/* Background watermark stamp */}
              <Stamp
                irisColor={theme.stampIris}
                color={theme.border}
                size="clamp(16rem, 40vw, 24rem)"
                className="opacity-40 -right-20 -top-20"
              />

              <div className="relative z-10 max-w-4xl">
                <div className="flex items-center gap-3 text-xs font-display tracking-widest text-ink-muted uppercase">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.disciplines?.join("  /  ")}</span>
                </div>

                <h1 className="font-display mt-4 text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                  {project.title}
                </h1>

                <p className="mt-6 text-xl md:text-2xl font-light leading-relaxed text-foreground/90 max-w-3xl">
                  {project.tagline || project.description}
                </p>

                {/* Tech & Live Link meta */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {project.tech_stacks.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs font-display text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}

                  {project.url && (
                    <EnterButton
                      href={project.url}
                      label="Visit live site"
                      accentColor={theme.accent}
                    />
                  )}
                </div>
              </div>
            </header>

            {/* Problem & Solution Narrative Breakdown (Joonas Sandell Style) */}
            <section className="mt-16 grid gap-12 md:grid-cols-2 border-b border-black/10 dark:border-white/10 pb-20">
              <div>
                <span className="text-xs font-display uppercase tracking-widest text-ink-muted">
                  The Problem & Challenge
                </span>
                <h2 className="font-display mt-2 text-2xl font-medium text-foreground">
                  Workflow Constraints
                </h2>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-ink-muted">
                  {project.challenge || project.description}
                </p>
              </div>

              <div>
                <span className="text-xs font-display uppercase tracking-widest text-ink-muted">
                  The Solution & Engineering
                </span>
                <h2 className="font-display mt-2 text-2xl font-medium text-foreground">
                  Technical Architecture
                </h2>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-ink-muted">
                  {project.solution || project.description}
                </p>
              </div>
            </section>

            {/* Full Visual Snapshots */}
            {project.images?.length > 0 && (
              <section className="mt-16 space-y-12">
                <p className="text-xs font-display uppercase tracking-widest text-ink-muted">
                  Interface Showcase
                </p>

                {project.images.map((image, index) => (
                  <figure
                    key={`${image.image_url}-${index}`}
                    className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 shadow-2xl"
                  >
                    <Image
                      src={image.image_url}
                      alt={image.alt ?? project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1100px"
                      className="object-cover object-center"
                      priority={index === 0}
                      loading="eager"
                    />
                  </figure>
                ))}
              </section>
            )}

            {/* Bottom Navigation */}
            <div className="mt-20 border-t border-black/10 dark:border-white/10 pt-10 flex items-center justify-between">
              <StaggerHoverLink
                href="/#work"
                className="text-xs font-display uppercase tracking-widest text-ink-muted hover:text-foreground"
              >
                ← Back to selected works
              </StaggerHoverLink>

              {/* <EnterButton
                href="/ui-lab"
                label="Explore UI Lab"
                accentColor={theme.accent}
              /> */}
            </div>
          </article>
        </WorkReveal>
      </main>

      <Footer projects={projects} />
    </div>
  );
}
