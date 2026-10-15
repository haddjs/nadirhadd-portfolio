"use client";

import { WorkTransitionProvider } from "@/components/Work/WorkIrisTransition";
import { ThemeProvider } from "next-themes";

export function ThemeProviderWrapper({ children, ...props }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			enableSystem
			{...props}
		>
			<WorkTransitionProvider>{children}</WorkTransitionProvider>
		</ThemeProvider>
	);
}
