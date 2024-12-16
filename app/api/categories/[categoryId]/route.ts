import prisma from "@/utils/db";
import { updateCategorySchema } from "@/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";

type props = {
  params: {
    categoryId: string;
  };
};

/**
 * @method PUT
 * @url ~/api/categories/:categoryId
 * @desc update an category
 * @access private  // authenticated user use endpoint
 */

export async function PUT(request: NextRequest, { params }: props) {
  try {
    const reqData = await request.json();
    const categoryId = params.categoryId;

    // validation on the data from request
    const validation = updateCategorySchema.safeParse(reqData);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: validation.error.errors[0].path,
          message: validation.error.errors[0].message,
        },
        { status: 400 }
      );
    }

    const updatedCategory = await prisma.category.update({
      where: {
        id: parseInt(categoryId),
      },
      data: reqData,
    });

    return NextResponse.json(
      { message: "category updated successfully", data: updatedCategory },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      //   { message: "internal server error" },
      { message: error },
      { status: 500 }
    );
  }
}

/**
 * @method DELETE
 * @url ~/api/categories/:categoryId
 * @desc delete an Category
 * @access private  // authenticated user use endpoint
 */

export async function DELETE(request: NextRequest, { params }: props) {
  try {
    const categoryId = params.categoryId;

    const deleteCategory = await prisma.category.delete({
      where: { id: parseInt(categoryId) },
    });

    return NextResponse.json(
      { message: "category deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
