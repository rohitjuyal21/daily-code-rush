"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../Logo";
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { setTheme } = useTheme();
  return (
    <nav className="bg-background/10 fixed top-6 left-1/2 z-50 mx-auto flex w-full max-w-4xl -translate-x-1/2 items-center justify-between rounded-full border py-1.5 pr-2 pl-4 backdrop-blur-sm">
      <div className="flex w-full items-center gap-2">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <div className="px-2">
          <Button variant="link" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/challenges">Challenges</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/leaderboard">Leaderboard</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/resources">Resources</Link>
          </Button>
        </div>
        <div className="ml-auto flex items-center gap-2">
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
          <Button asChild className="rounded-full">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
