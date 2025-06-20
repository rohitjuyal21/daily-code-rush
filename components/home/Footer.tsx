import React from "react";
import Logo from "../Logo";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import { Button } from "../ui";
import { Separator } from "../ui/separator";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="from-background to-muted/30 bg-gradient-to-b px-4 py-6 md:px-6">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Logo />
        <div className="flex items-center">
          {navLinks.map((link) => (
            <Button key={link.label} variant="link" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>
      </div>
      <div className="my-4">
        <Separator />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm">© 2025 Daily Code Rush</p>
        <Button variant="outline" size="icon" className="rounded-full" asChild>
          <Link
            target="_blank"
            href="https://github.com/rohitjuyal21/daily-code-rush"
          >
            <GithubLogoIcon className="size-5" />
          </Link>
        </Button>
      </div>
    </footer>
  );
}
