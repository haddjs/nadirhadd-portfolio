"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function InteractiveAvatar({ imageSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div
      className="relative flex flex-col items-start select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dashed outer boundary indicator */}
      <div className="relative group">
        <div
          className={`absolute -inset-2.5 rounded-2xl border border-dashed transition-all duration-300 pointer-events-none`}
        />

        {/* Hover Avatar Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          style={{ rotateX, rotateY }}
          className="relative h-64 w-64 md:h-90 md:w-90 rounded-xl overflow-hidden border border-black/15 dark:border-white/20 bg-     
  stone/50 shadow-md backdrop-blur-sm z-10 group"
        >
          {/* Default Image */}
          <Image
            src={imageSrc}
            alt="Nadir Hadd"
            fill
            sizes="(min-width: 768px) 500px, 219px"
            priority
            className="object-cover object-[center_20%] pointer-events-none transition-transform duration-700 ease-out group-          
  hover:scale-105"
          />

          {/* Glare overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 pointer-events-none" />

          {/* Reveal Image (Diagonal Curtain Wipe) */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{
              clipPath: "polygon(-1000% 0%, -105% 0%, -5% 100%, -1000% 100%)",
            }}
            animate={{
              clipPath: isHovered
                ? "polygon(-1000% 0%, 105% 0%, 205% 100%, -1000% 100%)"
                : "polygon(-1000% 0%, -105% 0%, -5% 100%, -1000% 100%)",
            }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <Image
              src="/assets/images/lineart.jpeg"
              alt="Nadir Hadd Lineart"
              fill
              sizes="(min-width: 768px) 500px, 219px"
              priority
              className="object-cover object-[center_20%] pointer-events-none transition-transform duration-700 ease-out group-        
  hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
