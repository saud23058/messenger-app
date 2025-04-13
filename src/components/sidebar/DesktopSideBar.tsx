"use client";
import useRoutes from "@/hooks/useRoutes";
import React, { useState } from "react";
import DesktopItem from "./DesktopItem";
import { User } from "@prisma/client";
import Image from "next/image";

interface props {
  current_user: User | null;
}

const DesktopSideBar = ({ current_user }: props) => {
  const routes = useRoutes();

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-30 px-8 overflow-y-auto bg-white border-r-[1px] pb-4 flex flex-col justify-between">
      <nav className="flex flex-col mt-4  justify-between">
        <ul role="list" className="flex flex-col items-center space-y-1">
          {routes.map((it, index) => (
            <DesktopItem
              key={index}
              href={it.href}
              label={it.label}
              icon={it.icon}
              active={it.active}
              onClick={it.onClick}
            />
          ))}
        </ul>
      </nav>
      <div className="w-10 h-10 rounded-full bg-gray-300 mb-5 flex items-center justify-center cursor-pointer hover:opacity-80 transition font-bold">
        {current_user!.image ? (
          <Image
            src={current_user!.image}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full cursor-pointer hover:opacity-80 transition"
          />
        ) : (
          current_user?.name?.charAt(0).toUpperCase()
        )}
      </div>
    </div>
  );
};

export default DesktopSideBar;
