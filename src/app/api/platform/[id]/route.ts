import Platform from "@/models/platform";
import connectToDB from "@/utils/database";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "شناسه پلتفرم معتبر نمی‌باشد" },
        { status: 422 }
      );
    }

    const findPlatform = await Platform.findOne({ _id: params.id });
    if (!findPlatform) {
      return NextResponse.json(
        { error: "شناسه پلتفرم وجود ندارد" },
        { status: 404 }
      );
    }

    const deletePlatform = await Platform.findOneAndDelete({ _id: params.id });
    if (deletePlatform) {
      return NextResponse.json(
        { message: "پلتفرم با موفقیت حذف شد" },
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
        { error: "شناسه پلتفرم معتبر نمی‌باشد" },
        { status: 422 }
      );
    }

    const findPlatform = await Platform.findOne({ _id: params.id });
    if (!findPlatform) {
      return NextResponse.json(
        { error: "شناسه پلتفرم وجود ندارد" },
        { status: 404 }
      );
    }

    const updatedPlatform = await Platform.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    if (updatedPlatform) {
      return NextResponse.json(
        { message: "پلتفرم با موفقیت ویرایش شد" },
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
        { error: "شناسه پلتفرم معتبر نمی‌باشد" },
        { status: 422 }
      );
    }

    const findPlatform = await Platform.findOne({ _id: params.id }, "-__v");
    if (!findPlatform) {
      return NextResponse.json(
        { error: "شناسه پلتفرم وجود ندارد" },
        { status: 404 }
      );
    }


      return NextResponse.json(findPlatform);
    
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
