import Car from "@/models/car";
import connectToDB from "@/utils/database";
import carValidator from "@/validator/server/car";
import { NextRequest, NextResponse } from "next/server";
import Color from "@/models/color";
import Company from "@/models/company";
import Platform from "@/models/platform";
import mongoose from "mongoose";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const param = searchParams.get("q");

  try {
    await connectToDB();
    if (param) {
      const carQuery = await Car.find({ title: { $regex: param } }, "-__v");
      if (carQuery.length) {
        return NextResponse.json(carQuery);
      } else {
        return NextResponse.json(
          { message: "car not found!!" },
          { status: 404 }
        );
      }
    } else {
      const cars = await Car.find({}, "-__v");
      return NextResponse.json(cars);
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();
    console.log(data.platform);

    const validationResult = carValidator(data);

    if (validationResult !== true) {
      return NextResponse.json({ message: validationResult }, { status: 422 });
    }

    const ObjectId = mongoose.Types.ObjectId;

    if (!ObjectId.isValid(data.color)) {
      return NextResponse.json(
        { message: "شناسه رنگ معتبر نیست" },
        { status: 404 }
      );
    }
    if (!ObjectId.isValid(data.company)) {
      return NextResponse.json(
        { message: "شناسه بدنه معتبر نیست" },
        { status: 404 }
      );
    }
    if (!ObjectId.isValid(data.platorm)) {
      return NextResponse.json(
        { message: "شناسه شرکت معتبر نیست" },
        { status: 404 }
      );
    }

    const findColor = await Color.findOne({ _id: data.color });
    const findCompany = await Company.findOne({ _id: data.company });
    const findPlatform = await Platform.findOne({ _id: data.platform });

    if (!findColor) {
      return NextResponse.json({ message: "رنگ یافت نشد!!" }, { status: 404 });
    }
    if (!findCompany) {
      return NextResponse.json({ message: "شرکت یافت نشد!!" }, { status: 404 });
    }
    if (!findPlatform) {
      return NextResponse.json({ message: "بدنه یافت نشد!!" }, { status: 404 });
    }

    const createdCar = await Car.create({
      ...data,
      color: findColor,
      company: findCompany,
      platform: findPlatform,
    });

    if (!createdCar) {
      return NextResponse.json(
        { message: "خطا در ایجاد خودرو" },
        { status: 400 }
      );
    }
    return NextResponse.json({ createdCar }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
