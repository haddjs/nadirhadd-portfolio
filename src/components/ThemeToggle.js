"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@mui/material";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const handleDarkMode = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<div className="hidden md:flex items-center gap-2">
				<span className="font-semibold">
					{theme === "dark" ? "🌙 Dark" : "☀️ Light"}
				</span>
				<Switch checked={theme === "dark"} onClick={handleDarkMode} />
			</div>

			<button
				onClick={handleDarkMode}
				className="h-8 w-8 flex items-center justify-center rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition md:hidden">
				{theme === "dark" ? "🌙" : "☀️"}
			</button>
		</>
	);
};

export default ThemeToggle;
