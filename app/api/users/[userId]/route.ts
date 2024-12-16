import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

/**
 * @method GET
 * @url ~/api/users/:userId
 * @desc get user by ID
 * @access private // only admin can use this endpoint
 */

export async function GET(request: NextRequest, props: any) {
  try {
    const userId = props.params.userId;

    // check the email exists in database or not
    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
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
      { message: "internal server error " },
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

export async function DELETE(request: NextRequest, props: any) {
  try {
    const userId = props.params.userId;

    const deleteUser = await prisma.user.delete({
      where: { id: parseInt(userId) },
    });

    return NextResponse.json(
      { message: "user Deleted successfully " },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error " },
      // { message: error },
      { status: 500 }
    );
  }
}
