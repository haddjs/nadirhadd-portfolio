import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NavLinks from "@/components/NavLinks";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Navbar />
			<main className="flex min-h-screen">
				<div className="md:w-[200px] sticky">
					<NavLinks />
				</div>
				<div className="flex-grow flex-col flex justify-center items-center gap-10">
					<section id="about">
						<h1 className="text-5xl font-semibold">About</h1>
						<Hero />
					</section>
					<Separator className="my-4 h-2" />
					<section id="experience">
						<h1 className="text-5xl font-semibold">Experience</h1>
						<Experience />
					</section>
					<section id="projects">
						<h1 className="text-5xl font-semibold">Projects</h1>
						<Projects />
					</section>
				</div>
			</main>
		</div>
	);
}
