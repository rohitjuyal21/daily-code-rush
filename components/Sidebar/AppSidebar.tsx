"use client";
import React, { useState } from "react";
import Logo from "../Logo";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import { sidebarItems } from "@/constants/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui";
import SidebarThemeToggle from "./SidebarThemeToggle";
import UserSection from "./UserSection";
import SidebarItem from "./SidebarItem";
import Cookies from "js-cookie";
import { BasicUser } from "@/types";

interface AppSidebarProps {
  isSidebarCollapsed: boolean;
  user: BasicUser | null;
}

export default function AppSidebar({
  isSidebarCollapsed,
  user,
}: AppSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(isSidebarCollapsed);

  const handleToggleSidebar = () => {
    const newValue = !collapsed;
    setCollapsed(newValue);
    Cookies.set("isSidebarCollapsed", String(newValue));
    router.refresh();
  };

  return (
    <aside
      className={cn(
        "fixed top-0 bottom-0 left-0 hidden h-screen flex-col border-r py-6 transition-all duration-300 ease-in-out lg:flex",
        isSidebarCollapsed ? "w-[72px]" : "w-64",
      )}
    >
      <div className={cn(isSidebarCollapsed ? "px-1" : "px-2")}>
        <div
          className={cn(
            "flex items-center",
            isSidebarCollapsed ? "justify-center" : "justify-between gap-2",
          )}
        >
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              isSidebarCollapsed ? "w-0 opacity-0" : "w-full pl-3 opacity-100",
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
        <UserSection isSidebarCollapsed={isSidebarCollapsed} user={user} />
      </div>
    </aside>
  );
}
