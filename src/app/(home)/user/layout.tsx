import SideBar from "@/components/sidebar/SideBar";
import React from "react";

const Layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <SideBar>{children}</SideBar>
    </main>
  );
};

export default Layout;
