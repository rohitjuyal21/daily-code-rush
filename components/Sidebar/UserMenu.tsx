import { userMenu } from "@/constants/sidebar";
import { SignOutIcon } from "@phosphor-icons/react/dist/ssr";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { toast } from "sonner";

export default function UserMenu({
  handleLinkClick,
}: {
  handleLinkClick: () => void;
}) {
  const handleLogout = () => {
    signOut({ redirectTo: "/login" });
    toast.success("Logged out successfully");
  };

  return (
    <ul className="space-y-1 px-2">
      {userMenu.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            onClick={handleLinkClick}
            className="text-muted-foreground hover:text-foreground group hover:bg-muted/50 flex items-center gap-2 rounded-md px-3 py-2"
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
  );
}
