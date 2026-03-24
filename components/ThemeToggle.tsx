"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 px-4 py-2 rounded-full border border-gray-500 text-sm backdrop-blur-md bg-white/10 dark:bg-white/5"
    >
      {theme === "dark" ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}