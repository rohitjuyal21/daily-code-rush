import {
  BookOpenText,
  Code,
  Gear,
  House,
  Trophy,
  User,
} from "@phosphor-icons/react";

export const sidebarItems = [
  {
    label: "Dashboard",
    icon: House,
    href: "/dashboard",
  },
  {
    label: "Challenges",
    icon: Code,
    href: "/challenges",
  },
  {
    label: "Leaderboard",
    icon: Trophy,
    href: "/leaderboard",
  },
  {
    label: "Resources",
    icon: BookOpenText,
    href: "/resources",
  },
];

export const userMenu = [
  {
    label: "Profile",
    icon: User,
    href: "/profile",
  },
  {
    label: "Settings",
    icon: Gear,
    href: "/settings",
  },
];
