"use client";
import AppSidebar from "@/components/Sidebar/AppSidebar";
import React, { useState } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex">
      <AppSidebar />
      <main className="ml-72 p-6">{children}</main>
    </div>
  );
}
