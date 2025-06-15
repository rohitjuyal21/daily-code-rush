"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui";
import { useSession } from "next-auth/react";
import { BasicUser } from "@/types";

interface UserDetailProps {
  isSidebarCollapsed?: boolean;
  user: BasicUser | null;
  isPopover?: boolean;
}

export default function UserDetail({
  isSidebarCollapsed,
  user,
  isPopover = false,
}: UserDetailProps) {
  const { data: session } = useSession();
  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-10 w-10">
        <AvatarImage
          src={user?.profileImage || session?.user?.image || ""}
          alt={user?.name || session?.user?.name || ""}
        />

        <AvatarFallback>
          {session?.user?.name?.charAt(0).toUpperCase()}
          {session?.user?.name?.split(" ")[1]?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      {(!isSidebarCollapsed || isPopover) && (
        <div className="max-w-[156px]">
          <p className="truncate pb-0.5 text-sm font-semibold">
            {session?.user?.name}
          </p>
          <p className="text-muted-foreground truncate text-xs font-medium">
            {session?.user?.email}
          </p>
        </div>
      )}
    </div>
  );
}
