/**
 * @method GET
 * @URL ~/api/users/me
 * @desc get user authenticated
 * @access public
 */

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function GET(request: NextRequest) {
  try {
    const cookie = request.cookies.get("auth-token");
    const token = cookie?.value;
    if (!token) {
      return NextResponse.json(
        {
          message: "token not found",
        },
        { status: 404 }
      );
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);
    return NextResponse.json(
      {
        user: payload,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        // message: "Internal server error",
        message: error,
      },
      { status: 500 }
    );
  }
}
