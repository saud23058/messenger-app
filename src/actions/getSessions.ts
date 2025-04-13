import { authOption } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export const getSessions = async () => {
  return await getServerSession(authOption);
};

