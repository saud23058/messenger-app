"use client";
import { User } from "@prisma/client";
import React from "react";
import UserBox from "./UserBox";

interface props {
  items: User[];
}

const UserList = ({ items }: props) => {

  
  return (
    <aside className="fixed inset-y-0 pb-20 truncate border-r block w-full pl-20">
      <div className="px-5">
        <div className="flex-col"> 
          <div className="text-2xl font-bold text-neutral-800 py-4">
            people
          </div>
        </div>
        <div className="w-30">
        {
          items.map((item) => (
            <UserBox key={item.id}
            data={item}
            />
          )
        )
        }
      </div>
        </div>
    </aside>
  );
};

export default UserList;
