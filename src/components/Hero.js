"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
	const [isMd, setIsMd] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMd(window.innerWidth >= 768);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("rezise", handleResize);
	}, []);

	return (
		<>
			<h1 className="text-2xl md:text-5xl font-semibold text-center md:text-left">
				About
			</h1>

			<div className="flex items-start justify-center my-5 md:my-10">
				<div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-10">
					<div className="flex flex-col gap-4 md:items-start justify-center items-end text-left px-10">
						<h1 className="text-xl text-muted-foreground">Hi! I&apos;m</h1>
						<h2 className="text-2xl md:text-4xl font-bold tracking-tight">
							<Typewriter
								words={["Nadir Hadd", "Front-End Developer"]}
								loop={9}
								cursor
								cursorStyle="_"
							/>
						</h2>
						<p className="text-md md:text-lg text-muted-foreground max-w-lg">
							I&apos;m a developer fueled by coffee and chips to makes
							everything clean and modern. I laugh at my own pain, overthink my
							pixels, and make sure every line of code feels like a vibe.
							Somewhere between deep midnight thoughts and screaming in{" "}
							<code className="mono-font">console.log()</code>.
						</p>
						<p className="text-md md:text-lg text-muted-foreground max-w-lg">
							I always hungry for new things and sharpen what&apos;s I already
							knew. Currently I&apos;m learning more{" "}
							<span className="font-semibold">Javascript</span> on{" "}
							<span className="font-semibold">freecodecamp</span>. Also I love
							to dive deeper about Javascript&apos;s library such as {""}
							<span className="font-semibold">ReactJS</span>
							{""} and <span className="font-semibold">NextJS</span>.
						</p>
					</div>
					<div className="flex justify-center md:justify-end">
						<Image
							src="/assets/images/profile.JPG"
							alt="Profile Pic"
							width={isMd ? 400 : 350}
							height={isMd ? 400 : 200}
							className="block rounded-lg border-4 border-muted drop-shadow-xl"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
