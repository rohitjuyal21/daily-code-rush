import Header from "@/components/header/Header";
import AppSidebar from "@/components/sidebar/AppSidebar";
import { getBasicUser } from "@/lib/getUser";
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

  const user = await getBasicUser();

  return (
    <div className="flex flex-col">
      <AppSidebar isSidebarCollapsed={isSidebarCollapsed} user={user} />
      <Header user={user} />
      <main
        className={cn(
          "flex-1 p-6 transition-all duration-300 ease-in-out",
          isSidebarCollapsed ? "lg:ml-[72px]" : "lg:ml-64",
        )}
      >
        {children}
      </main>
    </div>
  );
}
