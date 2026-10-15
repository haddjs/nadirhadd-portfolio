"use client";

import { StaggerHoverButton } from "@/components/ui/StaggerHoverLink";
import { cn } from "@/lib/utils";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = ({ className = "" }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className="inline-block h-8 w-8" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";
  const label = isDark ? <MoonStar /> : <Sun />;

  return (
    <StaggerHoverButton
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "text-xs uppercase tracking-[0.14em] text-foreground/80 hover:opacity-70 transition-all",
        className,
      )}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {label}
    </StaggerHoverButton>
  );
};

export default ThemeToggle;
