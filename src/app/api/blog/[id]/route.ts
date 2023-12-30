import Blog from "@/models/blog";
import connectToDB from "@/utils/database";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "شناسه بلاگ معتبر نیست" },
        { status: 422 }
      );
    }
    const findBlog = await Blog.findById({ _id: params.id }, "-__v");

    if (!findBlog) {
      return NextResponse.json(
        { error: "شناسه بلاگ وجود ندارد" },
        { status: 404 }
      );
    }

    if (findBlog) {
      return NextResponse.json(findBlog);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "شناسه بلاگ معتبر نیست" },
        { status: 422 }
      );
    }
    const findBlog = await Blog.findOne({ _id: params.id });
    if (!findBlog) {
      return NextResponse.json(
        { error: "شناسه بلاگ وجود ندارد" },
        { status: 404 }
      );
    }
    const deleteBlog = await Blog.findOneAndDelete({ _id: params.id });

    if (deleteBlog) {
      return NextResponse.json(
        { message: "بلاگ با موفقیت حذف شد" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    const data = await req.json();

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "شناسه بلاگ معتبر نیست" },
        { status: 422 }
      );
    }

    const findBlog = await Blog.findOne({ _id: params.id }, { data });
    if (!findBlog) {
      return NextResponse.json(
        { error: "شناسه بلاگ وجود ندارد" },
        { status: 404 }
      );
    }

    const updateBlog = await Blog.findOneAndUpdate({ _id: params.id }, data, {
      new: true,
    });

    if (updateBlog) {
      return NextResponse.json(
        { message: "بلاگ با موفقیت ویرایش شد" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
