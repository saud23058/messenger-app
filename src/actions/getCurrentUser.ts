import { prisma } from "@/lib/prismaDB";
import { getSessions } from "./getSessions";

export const getCurrentUser = async () => {
  try {
    const session = await getSessions();

    if (!session) {
      return null;
    }
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email as string,
      },
    });
    if (!currentUser) {
      return null;
    }
    return currentUser;
  } catch {
    return null;
  }
};
