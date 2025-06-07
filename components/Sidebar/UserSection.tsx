"use client";
import React, { useState } from "react";
import UserDetail from "./UserDetail";
import { CaretRightIcon, SignOutIcon } from "@phosphor-icons/react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { toast } from "sonner";
import { userMenu } from "@/utils/sidebar";

interface UserSectionProps {
  isSidebarCollapsed: boolean;
}

export default function UserSection({ isSidebarCollapsed }: UserSectionProps) {
  const { status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    signOut({ redirectTo: "/login" });
    toast.success("Logged out successfully");
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {status === "authenticated" && (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <div className="from-muted/30 to-muted/70 hover:border-border group flex cursor-pointer items-center gap-2 rounded-md border border-transparent p-2 hover:bg-gradient-to-b">
              <div className="flex-1">
                <UserDetail isSidebarCollapsed={isSidebarCollapsed} />
              </div>
              {!isSidebarCollapsed && (
                <div className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">
                  <CaretRightIcon className="text-sm" />
                </div>
              )}
            </div>
          </PopoverTrigger>
          <PopoverContent side="right" className="mb-6 px-0 py-4">
            <div className="mb-4 px-4">
              <UserDetail />
            </div>
            <ul className="space-y-1 px-2">
              {userMenu.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="text-muted-foreground hover:text-foreground group hover:bg-muted/50 flex items-center gap-2 rounded-md px-4 py-2"
                  >
                    <span className="text-xl transition-transform duration-300 ease-in-out group-hover:-translate-x-0.5 group-hover:-rotate-[10deg]">
                      <item.icon />
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleLogout}
                  className="group flex w-full cursor-pointer items-center gap-2 rounded-md border-none px-4 py-2 text-red-700/90 outline-none hover:bg-red-700/10 hover:text-red-700"
                >
                  <span className="text-xl transition-transform duration-300 ease-in-out group-hover:-translate-x-0.5 group-hover:-rotate-[10deg]">
                    <SignOutIcon />
                  </span>
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
}
