"use client";

import { StaggerHoverLink } from "@/components/ui/StaggerHoverLink";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const WorkBlock = ({ project, index }) => {
  const cover = project.images?.[0];

  return (
    <motion.article
      className="group border-t border-border py-14 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay: index * 0.06 }}
    >
      <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="text-sm text-ink-muted">
            {project.year}
            {project.disciplines?.length
              ? ` — ${project.disciplines.join(" · ")}`
              : ""}
          </p>
          <h3 className="font-display mt-4 text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {project.title}
          </h3>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
            {project.description.length > 160
              ? `${project.description.slice(0, 160).trim()}…`
              : project.description}
          </p>
          <StaggerHoverLink
            href={`/work/${project.slug}`}
            className="mt-8 border-b border-teal pb-1 text-sm font-medium text-foreground hover:text-teal"
          >
            View project
          </StaggerHoverLink>
        </div>

        <div className="lg:col-span-7">
          {cover?.image_url ? (
            <Link
              href={`/work/${project.slug}`}
              className="relative block aspect-[16/10] overflow-hidden bg-stone"
              aria-label={`View ${project.title}`}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={cover.image_url}
                  alt={cover.alt ?? project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-top"
                />
              </motion.div>
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
};

const WorkSection = ({ projects }) => {
  return (
    <section
      id="work"
      className="scroll-mt-28 mx-auto w-full max-w-full px-6 md:px-20"
    >
      <motion.div
        className="flex items-end justify-between gap-6 pb-4"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-ink-muted">
            Selected works
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-tight md:text-5xl">
            Projects
          </h2>
        </div>
      </motion.div>
      <div>
        {projects.map((project, index) => (
          <WorkBlock key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
