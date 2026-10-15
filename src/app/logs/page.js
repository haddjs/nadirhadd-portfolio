"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { StaggerHoverLink } from "@/components/ui/StaggerHoverLink";
import { feedItems, projects } from "@/constants/constants";

export default function FeedPage() {
  return (
    <div className="site-shell flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-28 md:pt-36 pb-20">
        <article className="mx-auto w-full px-6 md:px-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-muted">
            <StaggerHoverLink href="/" className="hover:text-foreground">
              Home
            </StaggerHoverLink>
            <span className="opacity-40">/</span>
            <span>Feed</span>
          </div>

          {/* Header */}
          <header className="mt-10 border-b border-black/10 dark:border-white/10 pb-16">
            <p className="text-xs font-mono uppercase tracking-[0.24em] text-ink-muted">
              Live Log & Stream
            </p>
            <h1 className="font-display mt-3 text-4xl leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Logs
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-ink-muted font-normal">
              A stream of work in progress, component prototypes, production
              shipments, and design notes.
            </p>
          </header>

          {/* Feed List */}
          <div className="mt-12 space-y-12">
            {feedItems.map((item) => (
              <article
                key={item.id}
                className="border-b border-black/10 dark:border-white/10 pb-12 flex flex-col md:flex-row md:items-start gap-6 md:gap-12"
              >
                <div className="md:w-36 flex-shrink-0 text-xs font-mono text-ink-muted uppercase tracking-wider">
                  <p>{item.date}</p>
                  <span className="mt-2 inline-block rounded border border-black/10 dark:border-white/15 px-2 py-0.5 text-[10px] text-foreground">
                    {item.tag}
                  </span>
                </div>

                <div className="flex-1">
                  <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">
                    {item.content}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </article>
      </main>

      <Footer projects={projects} />
    </div>
  );
}
