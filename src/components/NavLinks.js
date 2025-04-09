"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NavLinks = () => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["about", "experience", "projects"];
			let currentSections = "about";

			for (const id of sections) {
				const el = document.getElementById(id);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 100 && rect.bottom >= 100) {
						currentSections = id;
						break;
					}
				}
			}

			setActive(currentSections);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const linkStyle = (id) =>
		`pl-4 transition-all duration-200 hover:text-foreground hover:font-bold hover:border-l-2 hover:border-foreground ${
			active === id
				? "text-foreground font-bold border-l-2 border-foreground"
				: "text-foreground70"
		}`;

	return (
		<div className="sticky top-20 h-fit w-fit flex flex-col gap-4 text-sm font-medium ml-8">
			<div className="flex flex-col gap-4 mt-10 text-sm tracking-widest font-medium uppercase">
				<Link href="#about" className={linkStyle("about")}>
					About
				</Link>
				<Link href="#experience" className={linkStyle("experience")}>
					Experience
				</Link>
				<Link href="#projects" className={linkStyle("projects")}>
					Projects
				</Link>
			</div>
		</div>
	);
};

export default NavLinks;
