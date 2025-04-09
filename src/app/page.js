import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NavLinks from "@/components/NavLinks";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Navbar />
			<main className="flex min-h-screen">
				<div className="w-[200px] sticky top-28">
					<NavLinks />
				</div>
				<div className="flex-grow flex justify-center items-center">
					<section id="about">
						<Hero />
					</section>
				</div>
			</main>
		</div>
	);
}
