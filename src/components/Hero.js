"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
	return (
		<div className="min-h-screen flex items-start justify-center pt-20 px-10">
			<div className="grid grid-cols-1 md:grid-cols-2 w-full w-full">
				<div className="flex flex-col gap-4 md:items-start justify-center items-end text-center md:text-left px-10">
					<h1 className="text-xl text-muted-foreground">Hi! I&apos;m</h1>
					<h2 className="text-5xl font-bold tracking-tight">
						<Typewriter
							words={["Nadir Hadd", "Front-End Developer"]}
							loop={3}
							cursor
							cursorStyle="_"
						/>
					</h2>
					<p className="text-lg text-muted-foreground max-w-lg">
						A front-end developer who loves building clean, modern UIs and
						trying not to break production 💀
					</p>
				</div>
				<div className="flex justify-center">
					<Image
						src="/assets/images/profile.JPG"
						alt="Profile Pic"
						width={400}
						height={400}
						className="rounded-lg border-4 border-muted drop-shadow-xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
