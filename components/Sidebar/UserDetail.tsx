import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui";
import { useSession } from "next-auth/react";

export default function UserDetail() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-10 w-10">
        {session?.user?.image && (
          <AvatarImage
            src={session?.user?.image}
            alt={session?.user?.name || ""}
          />
        )}
        <AvatarFallback>
          {session?.user?.name?.charAt(0).toUpperCase()}
          {session?.user?.name?.split(" ")[1]?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="max-w-[180px]">
        <p className="truncate pb-0.5 text-sm font-semibold">
          {session?.user?.name}
        </p>
        <p className="text-muted-foreground truncate text-xs font-medium">
          {session?.user?.email}
        </p>
      </div>
    </div>
  );
}
