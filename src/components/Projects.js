"use client";

import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent, CardTitle } from "./ui/card";

import { projects } from "@/constants/constants";
import { Button } from "./ui/button";

const Projects = () => {
	return (
		<>
			<h1 className="text-2xl md:text-5xl font-semibold text-center md:text-left">
				Projects
			</h1>

			<div className="flex my-10">
				<div className="grid grid-cols-1 w-full max-w-7xl mx-auto gap-10">
					{projects.map((items) => (
						<Card
							key={items.id}
							className="w-full max-w-[90%] md:max-w-full mx-auto shadow-2xl border-none dark:bg-[#0d1017] px-6 py-7">
							<CardContent className="flex flex-col lg:flex-row gap-10">
								<div className="flex-1 flex flex-col justify-between gap-6">
									<CardTitle className="text-2xl">
										{items.projectTitle}
									</CardTitle>
									<div className="text-sm md:text-md">
										{items.url ? (
											<button className="text-black font-semibold dark:text-white/30 bg-[#eee] dark:bg-[#4b4b4b] transition-all ease-in-out px-5 py-2 rounded-lg">
												<a href={items.url} target="_blank">
													Visit
												</a>
											</button>
										) : (
											<button
												className="text-black/30 dark:text-white/30 bg-[#eee] dark:bg-[#4b4b4b] transition-all ease-in-out px-5 py-2 rounded-lg"
												disabled>
												<p>Visit</p>
											</button>
										)}
									</div>
									<span className="text-sm/7">{items.description}</span>
									<div className="flex flex-wrap">
										{items.tech.map((projectTech, index) => (
											<div
												key={index}
												className="flex text-center px-2 text-sm md:text-md">
												<Button variant="secondary" size="lg">
													{projectTech}
												</Button>
											</div>
										))}
									</div>
								</div>
								<Carousel className="flex-1 flex items-center w-full max-w-4xl mx-auto">
									<CarouselContent>
										{items.snapshots.map((image, i) => (
											<CarouselItem key={i}>
												<div className="p-1">
													<Card>
														<CardContent>
															<Image
																src={image.source}
																alt={image.alt}
																width={800}
																height={400}
																className="object-contained w-full h-auto"
															/>
														</CardContent>
													</Card>
												</div>
											</CarouselItem>
										))}
									</CarouselContent>
									<CarouselPrevious className="hidden md:flex mx-8 items-center" />
									<CarouselNext className="hidden md:flex mx-8 items-center" />
								</Carousel>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</>
	);
};

export default Projects;
