import AppPic from "@/models/appPic";
import connectToDB from "@/utils/database";
import brandValidator from "@/validator/server/brand";
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
        { error: "شناسه بنر معتبر نیست" },
        { status: 422 }
      );
    }
    const findAppPic = await AppPic.findOne({ _id: params.id }, "-__v");

    if (!findAppPic) {
      return NextResponse.json(
        { error: "شناسه بنر وجود ندارد" },
        { status: 404 }
      );
    }

    if (findAppPic) {
      return NextResponse.json(findAppPic);
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
        { error: "شناسه بنر معتبر نیست" },
        { status: 422 }
      );
    }
    const findAppPic = await AppPic.findOne({ _id: params.id });
    if (!findAppPic) {
      return NextResponse.json(
        { error: "شناسه بنر وجود ندارد" },
        { status: 404 }
      );
    }
    const deleteAppPic = await AppPic.findOneAndDelete({ _id: params.id });

    if (deleteAppPic) {
      return NextResponse.json(
        { message: "بنر با موفقیت حذف شد" },
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

    const validationResult = brandValidator(data);

    if (validationResult !== true) {
      return NextResponse.json({ error: validationResult }, { status: 422 });
    }

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "شناسه بنر معتبر نیست" },
        { status: 422 }
      );
    }

    const findAppPic = await AppPic.findOne({ _id: params.id }, { data });
    if (!findAppPic) {
      return NextResponse.json(
        { error: "شناسه بنر وجود ندارد" },
        { status: 404 }
      );
    }

    const updateAppPic = await AppPic.findOneAndUpdate(
      { _id: params.id },
      data,
      {
        new: true,
      }
    );

    if (updateAppPic) {
      return NextResponse.json(
        { message: "بنر با موفقیت ویرایش شد" },
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
