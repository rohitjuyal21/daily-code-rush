"use client";

import AppSidebar from "@/components/Sidebar/AppSidebar";
import { cn } from "@/lib/utils";
import { Spinner } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isCollapsed = localStorage.getItem("isSidebarCollapsed") === "true";
    setIsSidebarCollapsed(isCollapsed);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Spinner className="text-muted-foreground size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex">
      <AppSidebar
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />
      <main
        className={cn(
          "p-6 transition-all duration-300 ease-in-out",
          isSidebarCollapsed ? "ml-[72px]" : "ml-72",
        )}
      >
        {children}
      </main>
    </div>
  );
}
