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
			let current = sections[0];
			let minOffset = Infinity;

			sections.forEach((id) => {
				const el = document.getElementById(id);
				if (el) {
					const offset = Math.abs(el.getBoundingClientRect().top - 100);
					if (offset < minOffset) {
						minOffset = offset;
						current = id;
					}
				}
			});
			setCurrentSection(current);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="md:sticky fixed w-screen top-0 left-0 backdrop-blur bg/30 md:flex md:justify-between md:px-30 md:py-10 p-6 z-40 grid grid-cols-3">
			<div className="hidden md:flex items-center text-3xl">
				<Link href="/">
					nadir<span className="font-semibold">hadd.</span>
				</Link>
			</div>

			<div className="flex md:hidden justify-center items-center text-sm uppercase tracking-wider text-foreground font-semibold">
				{currentSection}
			</div>

			<div className="md:hidden flex items-center justify-center text-xl">
				<Link href="/">
					n<span className="font-semibold">h.</span>
				</Link>
			</div>

			<div className="flex items-center justify-center gap-2">
				<div>
					<ThemeToggle />
				</div>
				<Link
					href="https://www.instagram.com/hadd.js"
					className="hidden md:block"
					target="_blank">
					<Instagram
						fontSize="large"
						className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg transition-all duration-300"
					/>
				</Link>
				<Link
					href="https://www.linkedin.com/in/nadir-septian-hadiansyah-06281a225/"
					target="_blank">
					<LinkedIn
						fontSize="large"
						className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg transition-all duration-300"
					/>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
