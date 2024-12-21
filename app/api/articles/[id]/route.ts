import prisma from "@/utils/db";
// import { updateArticleSchema } from "@/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";

// interface Props {
//   params: {
//     id: string;
//   };
// };
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { title, body } = await req.json();
    // await updateArticleSchema.validate({ title, body, userId ,categoryId });
    await prisma.article.update({
      where: { id: Number(id) },
      data: {
        title,
        body,
        updatedAt: new Date(),
        userId: 1,
      },
    });
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
