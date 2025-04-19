"use client";

import { Instagram, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [currentSection, setCurrentSection] = useState("about");

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["about", "experience", "projects"];
			let current = "about";

			for (const id of sections) {
				const el = document.getElementById(id);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 100 && rect.bottom >= 100) {
						current = id;
						break;
					}
				}
			}

			setCurrentSection(current);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="sticky top-0 left-0 backdrop-blur-md bg/30 mask-alpha mask-b-from-50% mask-b-to-transparent flex justify-between bg-none p-8 z-40">
			<div className="text-2xl md:text-3xl">
				<Link href="/">
					nadir<span className="font-semibold">hadd.</span>
				</Link>
			</div>

			<div className="block md:hidden text-sm uppercase tracking-wider text-foreground font-semibold">
				{currentSection}
			</div>

			<div className="flex items-center gap-3">
				<div>
					<ThemeToggle />
				</div>
				<Link href="https://www.instagram.com/hadd.js">
					<Instagram
						fontSize="large"
						className="dark:hover:bg-white dark:hover:text-black rounded-lg transition-all duration-300"
					/>
				</Link>
				<Link href="https://www.linkedin.com/in/nadir-septian-hadiansyah-06281a225/">
					<LinkedIn fontSize="large" />
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
