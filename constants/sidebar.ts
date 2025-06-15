import {
  BookOpenTextIcon,
  CodeIcon,
  GearIcon,
  HouseIcon,
  TrophyIcon,
  UserIcon,
} from "@phosphor-icons/react/dist/ssr";

export const sidebarItems = [
  {
    label: "Dashboard",
    icon: HouseIcon,
    href: "/dashboard",
  },
  {
    label: "Challenges",
    icon: CodeIcon,
    href: "/challenges",
  },
  {
    label: "Leaderboard",
    icon: TrophyIcon,
    href: "/leaderboard",
  },
  {
    label: "Resources",
    icon: BookOpenTextIcon,
    href: "/resources",
  },
];

export const userMenu = [
  {
    label: "Profile",
    icon: UserIcon,
    href: "/profile",
  },
  {
    label: "Settings",
    icon: GearIcon,
    href: "/settings",
  },
];
