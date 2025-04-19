"use client";

import {
	Card,
	CardContent,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
} from "./ui/card";

const Experience = () => {
	return (
		<div className="flex my-10">
			<div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-10">
				<Card className="flex justify-between w-full max-w-[90%] md:max-w-full mx-auto inset-shadow-sm shadow-2xl dark:bg-[#0d1017] border-none px-6 py-7">
					<CardHeader>
						<CardTitle className="text-lg md:text-2xl">
							Yayasan Pendidikan Telkom
						</CardTitle>
						<CardDescription className="text-sm md:text-lg">
							June 2024 - August 2024
						</CardDescription>
					</CardHeader>
					<CardContent>
						<span className="text-sm/7">
							Implementing UI Design of employee&apos;s presence and account
							management into fully functional website using{" "}
							<span className="font-semibold">NuxtJS </span>
							Javascript&apos;s framework. Other than that, building API for
							integrating with Backend using Axios.
						</span>
					</CardContent>
					<CardFooter>
						<div className="grid grid-cols-3 md:grid-cols-4 text-center gap-3 text-sm md:text-md">
							<div className="bg-[#eee] flex justify-center items-center dark:bg-[#303030] px-5 py-2 rounded-lg">
								VueJS
							</div>
							<div className="bg-[#eee] flex justify-center items-center dark:bg-[#303030] px-5 py-2 rounded-lg">
								NuxtJS
							</div>
							<div className="bg-[#eee] flex justify-center items-center dark:bg-[#303030] px-5 py-2 rounded-lg">
								Bootstrap
							</div>
							<div className="bg-[#eee] flex justify-center items-center dark:bg-[#303030] px-5 py-2 rounded-lg">
								Axios
							</div>
						</div>
					</CardFooter>
				</Card>

				<Card className="flex justify-between w-full max-w-[90%] md:max-w-full mx-auto inset-shadow-sm shadow-2xl dark:bg-[#0d1017] border-none px-6 py-7">
					<CardHeader>
						<CardTitle className="text-lg md:text-2xl">Rastek ID</CardTitle>
						<CardDescription className="text-sm md:text-lg">
							December 2024 - Present
						</CardDescription>
					</CardHeader>
					<CardContent>
						<span className="text-sm/7">
							As front-end, I assigned to my team to build the User Interface
							for an HR Website to monitoring employee&apos;s presence,
							assigning new employees, payroll, request and approving leaves,
							and handling client&apos;s project and task. The technology I used
							as front-end developer is ReactJS, and Bootstrap.
						</span>
					</CardContent>
					<CardFooter>
						<div className="grid grid-cols-3 md:grid-cols-4 text-center gap-3 text-sm md:text-md">
							<div className="bg-[#eee] flex justify-center items-center dark:bg-[#303030] px-5 py-2 rounded-lg">
								ReactJS
							</div>
							<div className="bg-[#eee] flex justify-center items-center dark:bg-[#303030] px-5 py-2 rounded-lg">
								Bootstrap
							</div>
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default Experience;
