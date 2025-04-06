"use client";

import { Instagram, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-none p-8">
      <div className="text-3xl">
        <div>
          <Link href="/">
            nadir<span className="font-semibold">hadd.</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 text-sm tracking-widest font-medium uppercase text-gray-400 dark:text-gray-500">
          <div className="flex flex-col gap-4 mt-10 text-sm tracking-widest font-medium uppercase">
            <Link
              href="#about"
              className="text-foreground70 hover:text-foreground transition-all duration-300 border-l-2 pl-4 border-transparent hover:border-foreground hover:border-black dark:hover:border-white hover:font-bold"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-foreground70 hover:text-foreground transition-all duration-300 border-l-2 pl-4 border-transparent hover:border-foreground hover:border-black dark:hover:border-white hover:font-semibold"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-foreground70 hover:text-foreground transition-all duration-300 border-l-2 pl-4 border-transparent hover:border-foreground hover:border-black dark:hover:border-white hover:font-semibold"
            >
              Projects
            </Link>
          </div>
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
