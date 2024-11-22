import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/utils/db";
import bcrypt from "bcryptjs";
import { registerSchema } from "@/utils/validationSchemas";

/**
 * @method POST
 * @url ~/api/users/register
 * @desc register or create new user by admin
 * @access private // only admin can create new user
 */

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json();
    // validation

    const validation = registerSchema.safeParse(requestData);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: validation.error.errors[0].path,
          message: validation.error.errors[0].message,
        },
        { status: 400 }
      );
    }
    // check the email exists in database or not
    const user = await prisma.user.findUnique({
      where: { email: requestData.email },
    });
    if (user) {
      return NextResponse.json(
        { message: "email already exists" },
        { status: 400 }
      );
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(requestData.password, salt);
    // create new user in database
    const newUser = await prisma.user.create({
      data: {
        username: requestData.username,
        email: requestData.email,
        password: hashedPassword,
      },
    });
    // return success message
    return NextResponse.json(
      { message: "user registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error " },
      { status: 500 }
    );
  }
}
