import Color from "@/models/color";
import connectToDB from "@/utils/database";
import colorValidator from "@/validator/server/color";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    const newData = await req.json();

    const validationResult = colorValidator(newData);

    if (validationResult !== true) {
      return NextResponse.json({ error: validationResult }, { status: 422 });
    }

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "شناسه رنگ معتبر نیست" },
        { status: 422 }
      );
    }

    const existingColor = await Color.findById(params.id);

    if (!existingColor) {
      return NextResponse.json(
        { error: "شناسه رنگ وجود ندارد" },
        { status: 404 }
      );
    }

    const updatedColor = await Color.findByIdAndUpdate(params.id, newData, {
      new: true,
    });

    if (updatedColor) {
      return NextResponse.json({ message: "رنگ با موفقیت ویرایش شد" });
    } else {
      return NextResponse.json(
        { error: "ویرایش رنگ با شکست مواجه شد" },
        { status: 409 }
      );
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
        { error: "شناسه رنگ معتبر نیست" },
        { status: 422 }
      );
    }

    const findColor = await Color.findById(params.id);
    if (!findColor) {
      return NextResponse.json(
        { error: "شناسه رنگ وجود ندارد" },
        { status: 404 }
      );
    }

    const deleteColor = await Color.findOneAndDelete({ _id: params.id });
    if (deleteColor) {
      return NextResponse.json(
        { message: "رنگ با موفقیت حذف شد" },
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

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "شناسه رنگ معتبر نیست" },
        { status: 422 }
      );
    }

    const findColor = await Color.findOne({ _id: params.id });

    if (!findColor) {
      return NextResponse.json(
        { error: "شناسه رنگ وجود ندارد" },
        { status: 404 }
      );
    }

    if (findColor) {
      return NextResponse.json(findColor);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
