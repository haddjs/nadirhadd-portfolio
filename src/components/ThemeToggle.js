"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@mui/material";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleDarkMode = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      <span className="font-semibold">
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </span>
      <Switch checked={theme === "dark"} onClick={handleDarkMode} />
    </div>
  );
};

export default ThemeToggle;
