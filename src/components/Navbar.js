"use client";

import { Instagram, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
	return (
		<div className="sticky top-0 flex justify-between bg-none p-8 z-0">
			<div className="text-3xl">
				<div>
					<Link href="/">
						nadir<span className="font-semibold">hadd.</span>
					</Link>
				</div>
			</div>
			<div className="flex gap-3">
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
