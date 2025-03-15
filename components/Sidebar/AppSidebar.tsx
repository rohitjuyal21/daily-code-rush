"use client";
import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import UserSection from "./UserSection";
import { Button } from "../ui/button";
import { PanelRightOpen } from "lucide-react";
import { sidebarItems } from "@/utils/sidebar";

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 bottom-0 left-0 flex h-screen w-72 flex-col border-r py-6">
      <div className="flex-1 px-4">
        <div className="flex items-center justify-between gap-2">
          <Logo />
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <PanelRightOpen className="size-5" />
          </Button>
        </div>

        <ul className="mt-8 space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground group flex items-center gap-2 rounded-md px-4 py-2",
                  pathname === item.href
                    ? "bg-muted/50 text-foreground to-muted/70 from-muted/30 border bg-gradient-to-b"
                    : "hover:bg-muted/50 border border-transparent",
                )}
              >
                <span className="text-xl transition-transform duration-300 ease-in-out group-hover:-translate-x-0.5">
                  <item.icon />
                </span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-2">
        <UserSection />
      </div>
    </aside>
  );
}
