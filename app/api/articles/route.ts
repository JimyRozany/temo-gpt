import prisma from "@/utils/db";
import { createArticleSchema } from "@/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";

/**
 * @method GET
 * @url ~/api/articles
 * @desc get all articles
 * @access private  // authenticated user use endpoint
 */

export async function GET() {
  try {
    const articles = await prisma.article.findMany();

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

/**
 * @method POST
 * @url ~/api/articles
 * @desc create new Article
 * @access private  // authenticated user use endpoint
 */

export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();

    // validation on the data from request
    const validation = createArticleSchema.safeParse(reqData);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: validation.error.errors[0].path,
          message: validation.error.errors[0].message,
        },
        { status: 400 }
      );
    }

    const newArticle = await prisma.article.create({
      data: {
        title: reqData.title,
        body: reqData.body,
        userId: parseInt(reqData.userId),
        categoryId: parseInt(reqData.categoryId),
      },
    });

    return NextResponse.json(
      { message: "article created successfully", data: newArticle },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error", error },
      // { message:error },
      { status: 500 }
    );
  }
}
