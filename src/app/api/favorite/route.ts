import Car from "@/models/car";
import Favorite from "@/models/favorite";
import connectToDB from "@/utils/database";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const data = await req.json();
    console.log("Received data:", data);

    if (!data?.user || !mongoose.Types.ObjectId.isValid(data.user)) {
      console.log("Invalid user ID");
      return NextResponse.json(
        { message: "شناسه کاربر معتبر نیست" },
        { status: 404 }
      );
    }

    if (!data?.carId || !mongoose.Types.ObjectId.isValid(data.carId)) {
      console.log("Invalid car ID");
      return NextResponse.json(
        { message: "شناسه خودرو معتبر نیست" },
        { status: 404 }
      );
    }

    const existingCar = await Car.find({ _id: data?.carId });
    console.log(!!existingCar);

    if (existingCar) {
      return NextResponse.json(
        { error: " خودرو از قبل وجود دارد" },
        { status: 409 }
      );
    }

    const createdFavorite = await Favorite.create(data);
    console.log("createdFavorite", createdFavorite);

    if (!createdFavorite) {
      console.log("Failed to create favorite");
      return NextResponse.json(
        { error: "مشکلی در ایجاد زیی ایجاد شده است" },
        { status: 409 }
      );
    }

    console.log("Successfully created favorite");
    return NextResponse.json(
      { message: "با موفقیت ایجاد شد" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
