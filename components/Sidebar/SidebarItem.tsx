import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  href: string;
  pathname: string;
  isSidebarCollapsed: boolean;
  icon: React.ReactNode;
  label: string;
}

export default function SidebarItem({
  href,
  pathname,
  isSidebarCollapsed,
  icon,
  label,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-muted-foreground hover:text-foreground group flex items-center gap-2 rounded-md",
        pathname === href
          ? "bg-muted/50 text-foreground to-muted/70 from-muted/30 border bg-gradient-to-b"
          : "hover:bg-muted/50 border border-transparent",
        isSidebarCollapsed ? "w-fit justify-center p-2" : "w-full px-4 py-2",
      )}
    >
      <span
        className={cn(
          "text-xl transition-transform duration-300 ease-in-out",
          !isSidebarCollapsed
            ? "group-hover:-translate-x-0.5 group-hover:-rotate-[10deg]"
            : "group-hover:-rotate-[10deg]",
        )}
      >
        {icon}
      </span>
      <span
        className={cn(
          "text-sm font-medium",
          isSidebarCollapsed ? "hidden" : "",
        )}
      >
        {label}
      </span>
    </Link>
  );
}
