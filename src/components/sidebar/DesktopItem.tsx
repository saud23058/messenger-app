import Link from "next/link";
import React from "react";

interface props {
  href: string;
  label: string;
  icon: Icon;
  active?: boolean;
  onClick?: () => void;
}

const DesktopItem = ({ href, label, icon: Icon, active, onClick }: props) => {
  const handle = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li onClick={handle}>
      <Link href={href} className="flex flex-col items-center gap-1">
        <Icon className={`h-6 w-6 shrink-0 ${active ? "text-blue-500" : "text-gray-500"}`} />
        <span className="text-xs truncate">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
