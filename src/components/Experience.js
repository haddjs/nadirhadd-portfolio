"use client";
import React from "react";

const Experience = () => {
	return (
		<div>
			<div className="flex my-10">
				<div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-10">
					<div className="rounded-lg shadow-2xl/30 bg-[#eeeeee] dark:bg-[#242424] p-8">
						<div className="header-experience flex flex-col gap-5 mb-5">
							<h2 className="text-2xl">Yayasan Pendidikan Telkom</h2>
							<span className="text-lg">June 2024 - August 2024</span>
						</div>
						<div className="content-experience">
							<span>
								Implementing UI Design of employee&apos;s presence and account
								management into fully functional website using{" "}
								<span className="font-semibold">NuxtJS </span>
								Javascript&apos;s framework. Other than that, building API for
								integrating with Backend using Axios.
							</span>
						</div>
						<div className="footer-experience">
							<div className="flex justify-between mt-5">
								<div className="flex gap-5">
									<div className="bg-[#a8a8a8] dark:bg-[#303030] px-5 py-2 rounded-lg">
										VueJS
									</div>
									<div className="bg-[#a8a8a8] dark:bg-[#303030] px-5 py-2 rounded-lg">
										NuxtJS
									</div>
								</div>
								<button className="bg-[#a8a8a8] hover:bg-[#818181] hover:text-white dark:bg-[#303030] dark:hover:bg-[#1a1a1a] transition-all duration-75 px-5 py-2 rounded-lg cursor-pointer">
									See Demo
								</button>
							</div>
						</div>
					</div>
					<div className="rounded-lg shadow-2xl/30 bg-[#eeeeee] dark:bg-[#242424] p-8">
						<div className="header-experience flex flex-col gap-5 mb-5">
							<h2 className="text-2xl">Rastek ID</h2>
							<span className="text-lg">December 2024 - Present</span>
						</div>
						<div className="content-experience">
							<span>
								As front-end, I assigned to my team to build the User Interface
								for an HR Website to monitoring employee&apos;s presence,
								assigning new employees, payroll, request and approving leaves,
								and handling client&apos;s project and task. The technology I
								used as front-end developer is ReactJS, and Bootstrap.
							</span>
						</div>
						<div className="footer-experience">
							<div className="flex justify-between mt-5">
								<div className="flex gap-5">
									<div className="bg-[#a8a8a8] dark:bg-[#303030] px-5 py-2 rounded-lg">
										ReactJS
									</div>
									<div className="bg-[#a8a8a8] dark:bg-[#303030] px-5 py-2 rounded-lg">
										Bootstrap
									</div>
								</div>
								<button className="bg-[#a8a8a8] hover:bg-[#818181] hover:text-white dark:bg-[#303030] dark:hover:bg-[#1a1a1a] transition-all duration-75 px-5 py-2 rounded-lg cursor-pointer">
									See Demo
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
