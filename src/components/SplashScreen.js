"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    let interval;
    let frame = 0;
    const maxFrames = 40;

    interval = setInterval(() => {
      frame++;
      let output = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          output += " ";
          continue;
        }
        if (frame >= (i / text.length) * maxFrames) {
          output += text[i];
        } else {
          output += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplayText(output);

      if (frame >= maxFrames) {
        clearInterval(interval);
      }
    }, 40); // 1.6 seconds total

    return () => clearInterval(interval);
  }, [text]);

  return <span>{isMounted ? displayText : text}</span>;
};

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useIsomorphicLayoutEffect(() => {
    // Check if splash has already played in this browser session
    const hasSeenSplash = sessionStorage.getItem("nh_splash_seen");
    if (hasSeenSplash) {
      setShouldAnimate(false);
      setVisible(false);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("nh_splash_seen", "true");
      }, 2500); // Increased timeout to let the scramble finish and be readable
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible && !shouldAnimate) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          exit={
            shouldAnimate
              ? {
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                  transition: { duration: 0.75, ease: [0.68, 0, 0.1, 1] },
                }
              : {}
          }
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0a0a0c] text-[#fbfbfb] select-none"
        >
          <div className="flex flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.68, 0, 0.1, 1] }}
              className="text-xs uppercase tracking-[0.28em] text-[#999] mb-2 font-display"
            >
              <ScrambleText text="Portfolio of" />
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.68, 0, 0.1, 1],
              }}
              className="text-3xl md:text-5xl font-light tracking-tight font-display mb-6"
            >
              <ScrambleText text="Nadir Hadd" />
            </motion.h1>

            {/* Stepped dot-matrix loader */}
            <div className="flex items-center gap-2 mt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#fbfbfb] animate-ping" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#888]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#444]" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
