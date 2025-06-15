"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "../ui";
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react/dist/ssr";

function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="hidden rounded-full dark:flex"
        onClick={() => setTheme("light")}
      >
        <SunIcon className="size-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="flex rounded-full dark:hidden"
        onClick={() => setTheme("dark")}
      >
        <MoonStarsIcon className="size-5" />
      </Button>
    </>
  );
}

export default ThemeToggle;
