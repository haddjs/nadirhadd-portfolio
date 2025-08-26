"use client";

import {
	Card,
	CardContent,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
} from "./ui/card";

import { experience } from "@/constants/constants";
import { Button } from "./ui/button";

const Experience = () => {
	return (
		<>
			<h1 className="text-2xl md:text-5xl font-semibold text-center md:text-left">
				Experience
			</h1>
			<div className="flex items-start justify-center my-5 md:my-10">
				<div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-10">
					{experience.map((exp) => (
						<Card
							key={exp.id}
							className="flex justify-between w-full max-w-[90%] md:max-w-full mx-auto inset-shadow-sm shadow-2xl dark:bg-[#0d1017] border-none px-6 py-7">
							<CardHeader>
								<CardTitle className="text-lg md:text-2xl">
									{exp.experienceTitle}
								</CardTitle>
								<CardDescription className="text-sm md:text-lg">
									{exp.duration}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<span className="text-sm/7">{exp.expDescription}</span>
							</CardContent>
							<CardFooter>
								{exp.expTech.map((tech, i) => (
									<div
										key={i}
										className="flex text-center px-2 text-sm md:text-md">
										<Button variant="secondary" size="lg">
											{tech}
										</Button>
									</div>
								))}
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</>
	);
};

export default Experience;
