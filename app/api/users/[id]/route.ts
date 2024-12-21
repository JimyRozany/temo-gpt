import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

// type props = {
//   params: {
//     userId: string;
//   };
// };
/**
 * @method GET
 * @url ~/api/users/:userId
 * @desc get user by ID
 * @access private // only admin can use this endpoint
 */

export async function GET(req:NextRequest ,{ params }) {
  try {
    const { id } = params;

    // check the email exists in database or not
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
      },
    });
    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    }

    return NextResponse.json({ data: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error ", error },
      // { message: error },
      { status: 500 }
    );
  }
}

/**
 * @method DELETE
 * @url ~/api/users/:userId
 * @desc get user by ID
 * @access private // only admin can use this endpoint
 */

export async function DELETE(req: NextRequest, { params }) {
  try {
    const { id } = params;

    await prisma.user.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json(
      { message: "user Deleted successfully " },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error ", error },
      // { message: error },
      { status: 500 }
    );
  }
}
