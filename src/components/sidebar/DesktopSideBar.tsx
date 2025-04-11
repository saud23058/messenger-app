"use client";
import useRoutes from "@/hooks/useRoutes";
import React, { useState } from "react";
import DesktopItem from "./DesktopItem";

const DesktopSideBar = () => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
     className="fixed inset-y-0 left-0 z-50 w-30 px-8 overflow-y-auto bg-white border-r-[1px] pb-4 flex flex-col justify-between"
    >
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
    </div>
  );
};

export default DesktopSideBar;
