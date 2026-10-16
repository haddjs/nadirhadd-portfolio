import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DynamicPayButton from "@/components/UiLab/DynamicPayButton";
import TactileSlider from "@/components/UiLab/TactileSlider";
import { StaggerHoverLink } from "@/components/ui/StaggerHoverLink";
import { projects, uiLabExperiments } from "@/constants/constants";

export const metadata = {
  title: "UI Lab",
  description:
    "Experimental playground showcasing UI component experiments, micro-interactions, and interactive design engineering concepts.",
};

export default function UiLabPage() {
  return (
    <div className="site-shell flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-28 md:pt-36 pb-20">
        <article className="mx-auto w-full max-w-full px-6 md:px-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-ink-muted">
            <StaggerHoverLink href="/" className="hover:text-foreground">
              Home
            </StaggerHoverLink>
            <span className="opacity-40">/</span>
            <span>UI Lab</span>
          </div>

          {/* Header */}
          <header className="mt-10 max-w-3xl border-b border-black/10 dark:border-white/10 pb-16">
            <p className="text-xs font-display uppercase tracking-[0.24em] text-ink-muted">
              Experimental Playground
            </p>
            <h1 className="font-display mt-3 text-4xl leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              UI Lab
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-ink-muted font-normal">
              User interface laboratory is a showcase of various UI component
              experiments, micro-interactions, and interactive design
              engineering concepts.
            </p>
          </header>

          {/* Experiments Logs */}
          <div className="mt-16 space-y-24">
            {/* Experiment 01 */}
            <section className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-display text-emerald-500 uppercase tracking-widest font-semibold">
                  01 Experiment
                </span>
                <h2 className="font-display mt-2 text-3xl font-medium tracking-tight text-foreground">
                  Dynamic Pay Button
                </h2>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-ink-muted">
                  A dynamic button that expands into an interactive wallet for
                  selecting and switching payment methods. Try clicking to
                  expand the card drawer and switch cards.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs font-display text-ink-muted">
                    Spring Physics
                  </span>
                  <span className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs font-display text-ink-muted">
                    Framer Motion
                  </span>
                  <span className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs font-display text-ink-muted">
                    Interactive
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7">
                <DynamicPayButton />
              </div>
            </section>

            {/* Experiment 02 */}
            <section className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center pt-16 border-t border-black/10 dark:border-white/10">
              <div className="lg:col-span-5">
                <span className="text-xs font-display text-emerald-500 uppercase tracking-widest font-semibold">
                  02 Experiment
                </span>
                <h2 className="font-display mt-2 text-3xl font-medium tracking-tight text-foreground">
                  Tactile Elastic Slider
                </h2>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-ink-muted">
                  Physical resistance and discrete tick notches mapped to fluid
                  continuous values. Designed for responsive tactile feedback in
                  micro-controls.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs font-display text-ink-muted">
                    Haptics Simulation
                  </span>
                  <span className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs font-display text-ink-muted">
                    Micro-controls
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7">
                <TactileSlider />
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer projects={projects} />
    </div>
  );
}
