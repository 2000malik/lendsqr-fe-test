"use client";
import { useState } from "react";
//
import { Main, NavBar, SideBar } from "@/src/components";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <NavBar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Main>{children}</Main>
    </>
  );
}
