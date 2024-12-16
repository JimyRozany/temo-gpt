import prisma from "@/utils/db";
import { updateUserSchema } from "@/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";

/**
 * @method POST
 * @url ~/api/users/update
 * @desc update user
 * @access private // only admin can update user
 */

export async function PUT(request: NextRequest) {
  try {
    const requestData = await request.json();
    // validate data from request
    const validation = updateUserSchema.safeParse(requestData);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: validation.error.errors[0].path,
          message: validation.error.errors[0].message,
        },
        { status: 400 }
      );
    }
    // update user
      const updateUser = await prisma.user.update({
        where: {
          id:parseInt( requestData.id),
        },
        data: requestData,
      })
      return  NextResponse.json({message:"updated successfully"} ,{status:200});

  } catch (error) {
    return NextResponse.json(
      { message: "internal server error " },
    //   { message: error },
      { status: 500 }
    );
  }
}
