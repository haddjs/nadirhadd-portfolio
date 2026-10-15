"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function TactileSlider() {
  const [value, setValue] = useState(65);

  return (
    <div className="relative flex flex-col justify-center p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 min-h-[360px] select-none">
      <div className="mx-auto w-full max-w-sm">
        {/* Metric Display */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              Intensity
            </span>
            <div className="font-display text-5xl font-light text-foreground mt-1">
              {value}
              <span className="text-lg font-mono text-ink-muted ml-1">%</span>
            </div>
          </div>

          <span className="text-xs font-mono text-emerald-500 uppercase tracking-wider">
            {value > 75 ? "High Spring" : value > 35 ? "Balanced" : "Low Energy"}
          </span>
        </div>

        {/* Custom Range Slider Track */}
        <div className="relative flex items-center h-12">
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full h-2 bg-black/20 dark:bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        {/* Discrete magnetic tick notches */}
        <div className="flex justify-between text-[10px] font-mono text-ink-muted mt-2">
          <span>00 MIN</span>
          <span>25</span>
          <span>50 MID</span>
          <span>75</span>
          <span>100 MAX</span>
        </div>
      </div>
    </div>
  );
}
