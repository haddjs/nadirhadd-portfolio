"use client";

import Link from "next/link";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { Separator } from "./ui/separator";

const Footer = () => {
	return (
		<div className="bg-black dark:bg-[#0a0d14] text-white transition-all ease-in-out">
			<div className="p-6 pt-8">
				<div className="text-2xl md:text-4xl">
					<Link
						href="/"
						className="border-b-0 hover:border-b-4 transition-all ease-in-out duration-100">
						nadir<span className="font-semibold">hadd.</span>
					</Link>
				</div>

				<div className="grid grid-cols-2 pt-8">
					<div className="flex flex-col items-start mx-auto gap-4">
						<Link
							href="https://www.instagram.com/hadd.js"
							className="flex items-center gap-3 text-sm md:text-lg border-l-0 hover:border-l-4 transition-all ps-2"
							target="_blank">
							<Instagram fontSize="medium" className="rounded-lg" />
							<span>Instagram</span>
						</Link>
						<Link
							href="https://www.linkedin.com/in/nadir-septian-hadiansyah-06281a225/"
							className="flex items-center gap-3 text-sm md:text-lg border-l-0 hover:border-l-4 transition-all ps-2"
							target="_blank">
							<LinkedIn fontSize="medium" />
							<span>LinkedIn</span>
						</Link>
						<Link
							href="https://github.com/haddjs"
							className="flex items-center gap-3 text-sm md:text-lg border-l-0 hover:border-l-4 transition-all ps-2"
							target="_blank">
							<GitHub fontSize="medium" />
							<span>GitHub</span>
						</Link>
					</div>
					<div className="flex flex-col items-start mx-auto gap-4">
						<Link
							href="#about"
							className="border-l-0 hover:border-l-4 transition-all ps-2">
							About
						</Link>
						<Link
							href="#experience"
							className="border-l-0 hover:border-l-4 transition-all ps-2">
							Experience
						</Link>
						<Link
							href="#projects"
							className="border-l-0 hover:border-l-4 transition-all ps-2">
							Projects
						</Link>
					</div>
				</div>
				<Separator className="mt-10" />
				<div className="text-center md:text-right pt-8">
					<span className="text-sm md:text-lg">nadirhadd &copy; 2025.</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
