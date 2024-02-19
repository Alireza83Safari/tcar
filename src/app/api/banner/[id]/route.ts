import Banner from "@/models/banner";
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
    const findBanner = await Banner.findOne({ _id: params.id }, "-__v");

    if (!findBanner) {
      return NextResponse.json(
        { error: "شناسه بنر وجود ندارد" },
        { status: 404 }
      );
    }

    if (findBanner) {
      return NextResponse.json(findBanner);
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
    const findBanner = await Banner.findOne({ _id: params.id });
    if (!findBanner) {
      return NextResponse.json(
        { error: "شناسه بنر وجود ندارد" },
        { status: 404 }
      );
    }
    const deleteBanner = await Banner.findOneAndDelete({ _id: params.id });

    if (deleteBanner) {
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

    const findBanner = await Banner.findOne({ _id: params.id }, { data });
    if (!findBanner) {
      return NextResponse.json(
        { error: "شناسه بنر وجود ندارد" },
        { status: 404 }
      );
    }

    const updateBanner = await Banner.findOneAndUpdate(
      { _id: params.id },
      data,
      {
        new: true,
      }
    );

    if (updateBanner) {
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
