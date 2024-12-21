import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

/**
 * @method GET
 * @url ~/api/articles/articles-by-category
 * @desc get all articles by category id
 * @access private  // authenticated user use endpoint
 */

export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const categoryId = parseInt(reqData.categoryId);

    const articles = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
      include: {
        articles: true, // All articles where categoryId
      },
    });

    return NextResponse.json(
      { message: "request success", data: articles },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error", error },
      { status: 500 }
    );
  }
}
