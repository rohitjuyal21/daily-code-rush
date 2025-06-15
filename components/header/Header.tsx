"use client";
import Logo from "../Logo";
import MobileNav from "./MobileNav";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui";

import UserDetail from "../sidebar/UserDetail";
import UserMenu from "../sidebar/UserMenu";
import { useState } from "react";
import { useSession } from "next-auth/react";
import ThemeToggle from "../common/ThemeToggle";
import { BasicUser } from "@/types";

export default function Header({ user }: { user: BasicUser | null }) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-background/80 sticky top-0 z-50 flex items-center justify-between border-b px-4 py-3 backdrop-blur-sm md:px-6 lg:hidden">
      <MobileNav />
      <Logo />
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Avatar className="size-9 cursor-pointer">
              <AvatarImage
                src={user?.profileImage || session?.user?.image || ""}
                alt={user?.name || session?.user?.name || ""}
              />
              <AvatarFallback>
                {user?.name?.charAt(0).toUpperCase()}
                {user?.name?.split(" ")[1]?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent side="bottom" align="end" className="w-[240px] px-0">
            <div className="mb-4 px-4">
              <UserDetail user={user} />
            </div>
            <UserMenu handleLinkClick={handleLinkClick} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
