import { usePathname } from "next/navigation";
import useConversation from "./useConversation";
import { useMemo } from "react";
import { HiChat } from "react-icons/hi";
import { HiArrowDownLeft, HiUser } from "react-icons/hi2";
import { signOut } from "next-auth/react";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversation",
        icon: HiChat,
        active: pathname === "/conversation" || !!conversationId,
      },
      {
        label: "User",
        href: "/user",
        icon: HiUser,
        active: pathname === "/user",
      },
      {
        label: "Logout",
        href: "#",
        icon: HiArrowDownLeft,
        onClick: () => signOut(),
        active: pathname === "/conversation" || !!conversationId,
      },
    ],
    [pathname, conversationId]
  );
  return routes;
};

export default useRoutes;
