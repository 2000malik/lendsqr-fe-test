import { Main, NavBar, SideBar } from "@/src/components";
//

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <NavBar />
      <SideBar />
      <Main>{children}</Main>
    </>
  );
}
