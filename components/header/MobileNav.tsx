import React from "react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <ListIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Menu for mobile</SheetDescription>
          </SheetHeader>
        </VisuallyHidden>
        <ul className="space-y-2 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Button variant="link" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
