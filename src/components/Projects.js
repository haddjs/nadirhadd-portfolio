"use client";

import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import {
	Card,
	CardContent,
	CardHeader,
	CardFooter,
	CardTitle,
} from "./ui/card";

const Projects = () => {
	const snapshots = [
		{
			id: 1,
			source: "/assets/images/projects/1.png",
			alt: "Dashboard",
		},
		{
			id: 2,
			source: "/assets/images/projects/2.png",
			alt: "Transaction",
		},
		{
			id: 3,
			source: "/assets/images/projects/3.png",
			alt: "Add New Transaction Modal",
		},
		{
			id: 4,
			source: "/assets/images/projects/4.png",
			alt: "Mutation",
		},
	];

	return (
		<div className="flex my-10">
			<div className="grid grid-cols-1 w-full max-w-7xl mx-auto gap-10">
				<Card className="w-full max-w-[90%] md:max-w-full mx-auto shadow-2xl border-none dark:bg-[#0d1017] px-6 py-7">
					<CardContent className="flex flex-col lg:flex-row gap-10">
						<div className="flex-1 flex flex-col justify-between gap-6">
							<CardTitle className="text-2xl">
								FlowLovedSome Money Management
							</CardTitle>
							<div className="text-sm md:text-md">
								<button className="hover:text-white bg-[#eee] dark:bg-[#303030] hover:bg-[#b3b3b3] dark:hover:bg-[#1d1d1d] transition-all ease-in-out px-5 py-2 rounded-lg cursor-pointer">
									Try Demo
								</button>
							</div>
							<span className="text-sm/7">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quibusdam consectetur, repudiandae repellendus a eius, quod
								deserunt nobis, nulla ea fugiat velit quisquam. Voluptate, natus
								voluptates ipsum doloremque distinctio alias iusto.
							</span>
							<div className="flex flex-wrap justify-between">
								<div className="grid grid-cols-3 md:grid-cols-4 text-center gap-3 text-sm md:text-md">
									<div className="bg-[#eee] flex justify-center items-center dark:bg-[#303030] px-5 py-2 rounded-lg">
										ReactJS
									</div>
									<div className="bg-[#eee] flex justify-center items-center dark:bg-[#303030] px-5 py-2 rounded-lg">
										Bootstrap
									</div>
								</div>
							</div>
						</div>
						<Carousel className="flex-1 flex items-center w-full max-w-4xl mx-auto">
							<CarouselContent>
								{snapshots.map((image) => (
									<CarouselItem key={image.id}>
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
			</div>
		</div>
	);
};

export default Projects;
