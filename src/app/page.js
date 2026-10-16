import Navbar from "@/components/Navbar";
import EditorialHero from "@/components/Hero/EditorialHero";
import StackedWorkSection from "@/components/Work/StackedWorkSection";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import { about, projects } from "@/constants/constants";

export default function Home() {
  return (
    <div className="site-shell flex min-h-screen flex-col bg-background text-foreground selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Signature Preloader Screen */}
      <SplashScreen />

      <Navbar />

      <main className="flex-1">
        {/* Editorial Hero with interactive draggable avatar */}
        <EditorialHero
          name={about.name}
          shortName={about.short_name}
          role={about.role}
          headline={about.headline}
          now={about.now}
          profilePicture={about.profile_picture}
          availability={about.availability}
        />

        {/* Joonas Sandell Signature Stacking Hero Project Cards */}
        <StackedWorkSection projects={projects} />
      </main>

      {/* Clean Editorial Footer */}
      <Footer projects={projects} />
    </div>
  );
}
