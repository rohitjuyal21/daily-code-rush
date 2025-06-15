"use client";
import React, { useState } from "react";
import UserDetail from "./UserDetail";
import { CaretRightIcon } from "@phosphor-icons/react";
import { Popover, PopoverContent, PopoverTrigger, Skeleton } from "../ui";
import { useSession } from "next-auth/react";
import { BasicUser } from "@/types";
import UserMenu from "./UserMenu";

interface UserSectionProps {
  isSidebarCollapsed: boolean;
  user: BasicUser | null;
}

export default function UserSection({
  isSidebarCollapsed,
  user,
}: UserSectionProps) {
  const { status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {status === "authenticated" ? (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <div className="from-muted/30 to-muted/70 hover:border-border group flex cursor-pointer items-center gap-2 rounded-md border border-transparent p-2 hover:bg-gradient-to-b">
              <div className="flex-1">
                <UserDetail
                  isSidebarCollapsed={isSidebarCollapsed}
                  user={user}
                />
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
              <UserDetail
                isSidebarCollapsed={isSidebarCollapsed}
                user={user}
                isPopover={true}
              />
            </div>
            <UserMenu handleLinkClick={handleLinkClick} />
          </PopoverContent>
        </Popover>
      ) : (
        <Skeleton className="h-12 min-w-12 rounded-md" />
      )}
    </>
  );
}
