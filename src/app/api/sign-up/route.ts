import { prisma } from "@/lib/prismaDB";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { email, name, password } = body;
    if (!email || !name || !password) {
      return NextResponse.json(
        {
          message: `All fields are required`,
        },
        {
          status: 400,
        }
      );
    }
    const isExist = await prisma.user.findFirst({
      where: { email },
    });
    if (isExist) {
      return NextResponse.json(
        {
          message: `Provided credentials is existed`,
        },
        {
          status: 401,
        }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "User account created Successfully",
      },
      {
        status: 201,
      }
    );
  } catch  {
    return NextResponse.json(
      {
        message: `something went wrong`,
      },
      {
        status: 500,
      }
    );
  }
}
