"use client";

import React from "react";
import UserDetail from "./UserDetail";
import { CaretRight, Gear, SignOut, User } from "@phosphor-icons/react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { toast } from "sonner";

const userMenu = [
  {
    label: "Profile",
    icon: <User />,
    href: "/profile",
  },
  {
    label: "Settings",
    icon: <Gear />,
    href: "/settings",
  },
];

export default function UserSection() {
  const { status } = useSession();

  const handleLogout = () => {
    signOut({ redirectTo: "/login" });
    toast.success("Logged out successfully");
  };

  return (
    <>
      {status === "authenticated" && (
        <Popover>
          <PopoverTrigger asChild>
            <div className="from-muted/30 to-muted/70 hover:border-border group flex cursor-pointer items-center gap-2 rounded-md border border-transparent p-2 hover:bg-gradient-to-b">
              <div className="flex-1">
                <UserDetail />
              </div>
              <div className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">
                <CaretRight className="text-sm" />
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent side="right" className="px-0 py-4">
            <div className="mb-4 px-4">
              <UserDetail />
            </div>
            <ul className="px-2">
              {userMenu.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground group hover:bg-muted/50 flex items-center gap-2 rounded-md px-4 py-2"
                  >
                    <span className="text-xl transition-transform duration-300 ease-in-out group-hover:-translate-x-0.5">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleLogout}
                  className="text-muted-foreground hover:text-foreground group hover:bg-muted/50 flex w-full cursor-pointer items-center gap-2 rounded-md border-none px-4 py-2 outline-none"
                >
                  <span className="text-xl transition-transform duration-300 ease-in-out group-hover:-translate-x-0.5">
                    <SignOut />
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
