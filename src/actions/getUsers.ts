import { prisma } from "@/lib/prismaDB"
import { getSessions } from "./getSessions"

export const getUsers = async () => {
  const session= await getSessions()
  if(!session?.user?.email){
    return []
  }
  try {
    const users= await prisma.user.findMany({
      orderBy:{
        createdAt:"desc"
      },
      where:{
        NOT:{
          email:session.user.email
        }
      }
    })

    return users
  } catch (error) {
    return []
  }
}