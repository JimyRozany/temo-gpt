import { NextRequest, NextResponse } from "next/server";
// import { z } from "zod";
import prisma from "@/utils/db";
import bcrypt from "bcryptjs";
import { loginSchema } from "@/utils/validationSchemas";
// import jwt from "jsonwebtoken";
// import { serialize } from "cookie";
import { setCookie } from "@/utils/generateToken";

interface JwtPayload {
  id: number;
  email: string;
  role:string;
}

/**
 * @method POST
 * @url ~/api/users/login
 * @desc login
 * @access public // any user can try login
 */

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json();
    // validation
    const validation = loginSchema.safeParse(requestData);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: validation.error.errors[0].path,
          message: validation.error.errors[0].message,
        },
        { status: 400 }
      );
    }
    // check the user exists or not
    const user = await prisma.user.findUnique({
      where: { email: requestData.email },
    });
    if (!user) {
      return NextResponse.json(
        { message: "email or password incorrect" },
        { status: 400 }
      );
    }
    // check the password is correct or not
    const isPasswordValid = await bcrypt.compare(
      requestData.password,
      user.password
    );
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
    
    const jwtPayload : JwtPayload= {
      id: user.id,
      email: user.email,
      role: user.role ,
    };
    //generate token and set-cookie
    const cookie = setCookie(jwtPayload);
    // return success message
    return NextResponse.json(
      { message: "login successful" },
      {
        status: 200,
        headers: {
          "Set-Cookie": cookie,
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error " },
      { status: 500 }
    );
  }
}
