import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * @method GET
 * @url ~/api/users/logout
 * @desc logout user
 * @access public // any user can logout
 */
export function GET(request: NextRequest) {
  try {
    cookies().delete("auth-token");
    return NextResponse.json({ message: "logout" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error " },
      { status: 500 }
    );
  }
}
