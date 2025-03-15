"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (theme) {
      setIsDark(theme === "dark");
    }
  }, [theme]);

  return (
    <div>
      <Button
        size="icon"
        variant="outline"
        className="relative transition-all duration-300 ease-in-out"
        onClick={() => handleThemeToggle()}
      >
        <motion.span
          initial={{ scale: 1 }}
          animate={{ scale: isDark ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="size-4" />
        </motion.span>
        <motion.span
          initial={{ scale: 1 }}
          animate={{ scale: isDark ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="size-4" />
        </motion.span>
      </Button>
    </div>
  );
}
