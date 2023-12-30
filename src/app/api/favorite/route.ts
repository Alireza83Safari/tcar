import Car from "@/models/car";
import Favorite from "@/models/favorite";
import connectToDB from "@/utils/database";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const data = await req.json();

    if (!data?.user || !mongoose.Types.ObjectId.isValid(data.user)) {
      return NextResponse.json(
        { message: "شناسه کاربر معتبر نیست" },
        { status: 404 }
      );
    }

    if (!data?.carId || !mongoose.Types.ObjectId.isValid(data.carId)) {
      return NextResponse.json(
        { message: "شناسه خودرو معتبر نیست" },
        { status: 404 }
      );
    }

    const existingCar = await Car.find({ _id: data?.carId });

    if (existingCar) {
      return NextResponse.json(
        { error: " خودرو از قبل وجود دارد" },
        { status: 409 }
      );
    }

    const createdFavorite = await Favorite.create(data);

    if (!createdFavorite) {
      return NextResponse.json(
        { error: "مشکلی در ایجاد زیی ایجاد شده است" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { message: "با موفقیت ایجاد شد" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
