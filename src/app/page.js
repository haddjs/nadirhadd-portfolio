import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Experience from "@/components/Experience";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero/HeroSection";
import NavLinks from "@/components/NavLinks";
// import Projects from "@/components/Projects";
import ProjectSection from "@/components/Projects/ProjectSection";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex min-h-screen">
        <div className="hidden md:block md:w-[200px] sticky">
          <NavLinks />
        </div>
        <div className="flex-grow flex-col flex justify-center items-center gap-10">
          <section id="about" className="scroll-mt-28">
            <HeroSection />
          </section>
          <Separator className="my-4 h-2" />
          <section id="experience" className="scroll-mt-28">
            <ExperienceSection />
          </section>
          <Separator className="my-4 h-2" />
          <section id="projects" className="scroll-mt-28">
            <ProjectSection />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
