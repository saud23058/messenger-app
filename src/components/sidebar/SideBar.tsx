import React from "react";
import DesktopSideBar from "./DesktopSideBar";

const SideBar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="pl-20 h-full">
      <DesktopSideBar/>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
