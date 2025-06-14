import AppSidebar from "@/components/sidebar/AppSidebar";
import { getUser } from "@/lib/getUser";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isSidebarCollapsed =
    cookieStore.get("isSidebarCollapsed")?.value === "true";

  const user = await getUser();

  return (
    <div className="flex">
      <AppSidebar isSidebarCollapsed={isSidebarCollapsed} user={user} />
      <main
        className={cn(
          "flex-1 p-6 transition-all duration-300 ease-in-out",
          isSidebarCollapsed ? "ml-[72px]" : "ml-64",
        )}
      >
        {children}
      </main>
    </div>
  );
}
