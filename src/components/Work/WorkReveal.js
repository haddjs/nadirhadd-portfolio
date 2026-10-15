"use client";

import {
	WORK_IRIS_STORAGE_KEY,
	useWorkTransition,
} from "@/components/Work/WorkIrisTransition";
import { fadeUp } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WorkReveal({ children }) {
	const prefersReducedMotion = useReducedMotion();
	const { isTransitioning } = useWorkTransition();
	const [fromIris, setFromIris] = useState(false);

	useEffect(() => {
		setFromIris(sessionStorage.getItem(WORK_IRIS_STORAGE_KEY) !== null);
	}, []);

	if (prefersReducedMotion || isTransitioning || fromIris) {
		return <div>{children}</div>;
	}

	return (
		<motion.div initial="hidden" animate="visible" variants={fadeUp}>
			{children}
		</motion.div>
	);
}
