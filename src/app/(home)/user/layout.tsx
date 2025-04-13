import { getUsers } from "@/actions/getUsers";
import SideBar from "@/components/sidebar/SideBar";
import UserList from "@/components/UserList";
import React from "react";

const Layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const users= await getUsers()
  return (
    <main>
      <SideBar>
        <div className="w-full">
      
          <UserList items={users}/>
        {children}
        </div>
      </SideBar>
    </main>
  );
};

export default Layout;
