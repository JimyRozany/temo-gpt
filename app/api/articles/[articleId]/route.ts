import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

type props = {
  params: {
    articleId: string;
  };
};

/**
 * @method PUT
 * @url ~/api/articles/:articleId
 * @desc update an Article
 * @access private  // authenticated user use endpoint
 */

export async function PUT(request: NextRequest, { params }: props) {
  try {
    const reqData = await request.json();
    const articleId = params.articleId;

    // validation on the data from request
    const validation = updateArticleSchema.safeParse(reqData);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: validation.error.errors[0].path,
          message: validation.error.errors[0].message,
        },
        { status: 400 }
      );
    }

    const updatedArticle = await prisma.article.update({
      where: {
        id: parseInt(articleId),
      },
      data: reqData,
    });

    return NextResponse.json(
      { message: "article updated successfully", data: updatedArticle },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}

/**
 * @method DELETE
 * @url ~/api/articles/:articleId
 * @desc delete an Article
 * @access private  // authenticated user use endpoint
 */

export async function DELETE(request: NextRequest, { params }: props) {
  try {
    const articleId = params.articleId;

    const deleteArticle = await prisma.article.delete({
      where: { id: parseInt(articleId) },
    });

    return NextResponse.json(
      { message: "article deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
