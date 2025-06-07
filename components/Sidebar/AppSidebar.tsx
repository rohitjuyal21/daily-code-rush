"use client";
import React from "react";
import Logo from "../Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import { sidebarItems } from "@/utils/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui";
import SidebarThemeToggle from "./SidebarThemeToggle";
import UserSection from "./UserSection";
import SidebarItem from "./SidebarItem";

interface AppSidebarProps {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (isCollapsed: boolean) => void;
}

export default function AppSidebar({
  isSidebarCollapsed,
  setIsSidebarCollapsed,
}: AppSidebarProps) {
  const pathname = usePathname();

  const handleToggleSidebar = () => {
    const isCollapsed = !isSidebarCollapsed;
    setIsSidebarCollapsed(isCollapsed);
    localStorage.setItem("isSidebarCollapsed", isCollapsed.toString());
  };

  return (
    <aside
      className={cn(
        "fixed top-0 bottom-0 left-0 flex h-screen flex-col border-r py-6 transition-all duration-300 ease-in-out",
        isSidebarCollapsed ? "w-[72px]" : "w-72",
      )}
    >
      <div className={cn(isSidebarCollapsed ? "px-3" : "px-4")}>
        <div
          className={cn(
            "flex items-center",
            isSidebarCollapsed ? "justify-center" : "justify-between gap-2",
          )}
        >
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              isSidebarCollapsed ? "w-0 opacity-0" : "w-full opacity-100",
            )}
          >
            <Logo />
          </div>
          <Button
            onClick={handleToggleSidebar}
            variant="ghost"
            size="icon"
            className="text-muted-foreground"
          >
            {isSidebarCollapsed ? (
              <PanelLeftOpen className="size-5" />
            ) : (
              <PanelRightOpen className="size-5" />
            )}
          </Button>
        </div>

        <ul className="mt-8 space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.label} className="flex w-full justify-center">
              {isSidebarCollapsed ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <SidebarItem
                        href={item.href}
                        pathname={pathname}
                        isSidebarCollapsed={isSidebarCollapsed}
                        icon={<item.icon />}
                        label={item.label}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <SidebarItem
                  href={item.href}
                  pathname={pathname}
                  isSidebarCollapsed={isSidebarCollapsed}
                  icon={<item.icon />}
                  label={item.label}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto space-y-4 px-2">
        <SidebarThemeToggle isSidebarCollapsed={isSidebarCollapsed} />
        <UserSection isSidebarCollapsed={isSidebarCollapsed} />
      </div>
    </aside>
  );
}
