import Car from "@/models/car";
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
        { error: "شناسه کاربر معتبر نیست" },
        { status: 422 }
      );
    }

    const findCar = await Car.find({ userId: params.id });

    return NextResponse.json(findCar);
  } catch (error) {
    return NextResponse.json({ error: "خطا در دریافت کاربران", status: 500 });
  }
}
