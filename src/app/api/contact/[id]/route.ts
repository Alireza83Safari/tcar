import Contact from "@/models/contact";
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
        { error: "شناسه کانتکت معتبر نیست" },
        { status: 422 }
      );
    }

    const findContact = await Contact.findOne({ _id: params.id });

    if (!findContact) {
      return NextResponse.json(
        { error: "کانتکت مورد نظر یافت نشد" },
        { status: 404 }
      );
    }

    return NextResponse.json(findContact);
  } catch (error) {
    return NextResponse.json(
      { error: "خطای ناشناخته در هنگام درخواست یافتن کانتکت رخ داده است" },
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
        { error: "شناسه کانتکت معتبر نیست" },
        { status: 422 }
      );
    }

    const deleteContact = await Contact.findOneAndDelete({ _id: params.id });

    if (!deleteContact) {
      return NextResponse.json(
        { error: "کانتکت مورد نظر برای حذف یافت نشد" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "کانتکت با موفقیت حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "خطای ناشناخته در هنگام درخواست حذف کانتکت رخ داده است" },
      { status: 500 }
    );
  }
}
