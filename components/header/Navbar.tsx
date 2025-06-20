"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../Logo";
import { navLinks } from "@/constants/navLinks";
import MobileNav from "./MobileNav";
import ThemeToggle from "../common/ThemeToggle";
import { Session } from "next-auth";

export default function Navbar({ session }: { session: Session | null }) {
  return (
    <div>
      <nav className="bg-background/10 fixed top-6 left-1/2 z-50 flex w-[calc(100%-32px)] max-w-4xl -translate-x-1/2 items-center justify-between rounded-full border py-1.5 pr-2 pl-4 backdrop-blur-sm md:mx-auto">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="md:hidden">
              <Logo showText={false} />
            </span>
            <span className="hidden md:block">
              <Logo />
            </span>
          </div>
          <div className="hidden md:block">
            {navLinks.map((link) => (
              <Button variant="link" asChild key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <MobileNav />
            </div>
            {session ? (
              <Button asChild className="rounded-full">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <Button asChild className="rounded-full">
                <Link href="/login">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
