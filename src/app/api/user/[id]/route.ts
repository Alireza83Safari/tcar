import User from "@/models/user";
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
        { error: "شناسه کاربر معتبر نمی‌باشد" },
        { status: 422 }
      );
    }

    const findUser = await User.find({ _id: params.id });

    if (!findUser) {
      return NextResponse.json({ error: " کاربر وجود ندارد" }, { status: 404 });
    }

    return NextResponse.json(findUser);
  } catch (error) {}
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
        { error: "شناسه کاربر معتبر نمی‌باشد" },
        { status: 422 }
      );
    }

    const editUser = await User.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    if (!editUser) {
      return NextResponse.json({ error: " کاربر وجود ندارد" }, { status: 404 });
    }

    return NextResponse.json(editUser);
  } catch (error) {}
}
