import React from "react";
import DesktopSideBar from "./DesktopSideBar";
import { getCurrentUser } from "@/actions/getCurrentUser";

const SideBar = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const currentUser =await getCurrentUser();

  return (
    <div className="pl-20 h-full">
      <DesktopSideBar current_user={currentUser} />
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
