import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "../ui/switch";
import { Moon, Sun } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface SidebarThemeToggleProps {
  isSidebarCollapsed: boolean;
}

export default function SidebarThemeToggle({
  isSidebarCollapsed,
}: SidebarThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 py-2 hover:bg-transparent",
        isSidebarCollapsed ? "justify-center" : "justify-between px-4",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 overflow-hidden transition-all duration-300 ease-in-out",
          isSidebarCollapsed ? "w-0 opacity-0" : "opacity-100",
        )}
      >
        {isDarkMode ? (
          <Sun className="text-xl" />
        ) : (
          <Moon className="text-xl" />
        )}
        <span className="text-sm font-medium">
          {isDarkMode ? "Light mode" : "Dark mode"}
        </span>
      </div>

      <Switch
        checked={isDarkMode}
        onCheckedChange={() => setTheme(isDarkMode ? "light" : "dark")}
        className="cursor-pointer"
      />
    </div>
  );
}
