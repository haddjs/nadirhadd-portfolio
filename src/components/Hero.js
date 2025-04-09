"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
	return (
		<div className="flex items-start justify-center my-10">
			<div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-10">
				<div className="flex flex-col gap-4 md:items-start justify-center items-end text-center md:text-left px-10">
					<h1 className="text-xl text-muted-foreground">Hi! I&apos;m</h1>
					<h2 className="text-4xl font-bold tracking-tight">
						<Typewriter
							words={["Nadir Hadd", "Front-End Developer"]}
							loop={3}
							cursor
							cursorStyle="_"
						/>
					</h2>
					<p className="text-lg text-muted-foreground max-w-lg">
						I’m a developer who codes like Eren Yeager at 2AM but still makes
						everything clean and modern. I laugh at my own pain, overthink my
						pixels, and make sure every line of code feels like a vibe.
						Somewhere between deep midnight thoughts and screaming in{" "}
						<code className="mono-font">console.log()</code>.
					</p>
					<p className="text-lg text-muted-foreground max-w-lg">
						Currently building web project at{" "}
						<span className="font-semibold">Rastek ID</span> as intern. Also I
						love to dive deeper about Javascript&apos;s library such as {""}
						<span className="font-semibold">ReactJS</span>
						{""} and <span className="font-semibold">NextJS</span>.
					</p>
				</div>
				<div className="flex justify-center md:justify-end">
					<Image
						src="/assets/images/profile.JPG"
						alt="Profile Pic"
						width={400}
						height={400}
						className="block rounded-lg border-4 border-muted drop-shadow-xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
