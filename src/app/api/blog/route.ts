import Blog from "@/models/blog";
import connectToDB from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const blogs = await Blog.find({});
    if (!blogs) {
      return NextResponse.json({ message: "بلاگ یافت نشد" }, { status: 404 });
    }
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { message: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();
    const createdBlog = await Blog.create(data);

    if (createdBlog) {
      return NextResponse.json(
        { message: "بلاگ با موفقیت ایجاد شد" },
        { status: 201 }
      );
    }

    return NextResponse.json({ error: "خطا در ایجاد بلاگ" }, { status: 404 });
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
