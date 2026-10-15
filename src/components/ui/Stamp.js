"use client";

import { useId } from "react";
import { motion } from "framer-motion";

export default function Stamp({
  className = "",
  color = "currentColor",
  irisColor = "#3959f9",
  size = "clamp(14rem, 42vw, 24rem)",
  label = "NADIR HADD • FRONT-END DEVELOPER • EST 2024 • DESIGN ENGINEERING •",
}) {
  const reactId = useId();
  const pathId = `stamp-circle-${reactId.replace(/:/g, "")}`;

  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        style={{ width: size, height: size, willChange: "transform" }}
        className="relative flex items-center justify-center opacity-[0.09] transition-opacity duration-700 hover:opacity-20 will-change-transform"
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer dashed track */}
          <circle
            cx="200"
            cy="200"
            r="190"
            stroke={color}
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />

          {/* Solid middle track */}
          <circle
            cx="200"
            cy="200"
            r="170"
            stroke={color}
            strokeWidth="1"
          />

          {/* Circular Text Path */}
          <path
            id={pathId}
            d="M 200, 200 m -145, 0 a 145,145 0 1,1 290,0 a 145,145 0 1,1 -290,0"
            fill="none"
          />
          <text
            className="text-[9.5px] uppercase font-mono tracking-[0.26em]"
            fill={color}
          >
            <textPath href={`#${pathId}`} startOffset="0%">
              {label}
            </textPath>
          </text>

          {/* Inner rings and focal crosshairs */}
          <circle
            cx="200"
            cy="200"
            r="110"
            stroke={color}
            strokeWidth="1"
            strokeDasharray="8 8"
          />
          <circle
            cx="200"
            cy="200"
            r="70"
            stroke={irisColor}
            strokeWidth="1.5"
          />
          <circle
            cx="200"
            cy="200"
            r="6"
            fill={irisColor}
          />

          {/* Coordinate tick marks */}
          <line x1="200" y1="15" x2="200" y2="35" stroke={color} strokeWidth="1.5" />
          <line x1="200" y1="365" x2="200" y2="385" stroke={color} strokeWidth="1.5" />
          <line x1="15" y1="200" x2="35" y2="200" stroke={color} strokeWidth="1.5" />
          <line x1="365" y1="200" x2="385" y2="200" stroke={color} strokeWidth="1.5" />
        </svg>
      </motion.div>
    </div>
  );
}
