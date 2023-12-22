import Car from "@/models/car";
import connectToDB from "@/utils/database";
import carValidator from "@/validator/server/car";
import { NextRequest, NextResponse } from "next/server";
import Color from "@/models/color";
import Company from "@/models/company";
import Platform from "@/models/platform";
import mongoose from "mongoose";
import User from "@/models/user";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const param = searchParams.get("q");
  const colorQuery = searchParams.get("color");
  const companyQuery = searchParams.get("company");
  const platformQuery = searchParams.get("platform");
  const statusQuery = searchParams.get("carStatus");

  try {
    await connectToDB();
    let carQuery;
    switch (true) {
      case !!platformQuery:
        const platformIds = platformQuery.split(",");
        carQuery = await Car.find({ platform: { $in: platformIds } }, "-__v")
          .populate("company", "-__v")
          .populate("color", "-__v")
          .populate("platform", "-__v");
        if (carQuery.length === 0) {
          return NextResponse.json(
            { message: "No cars found for this platform" },
            { status: 404 }
          );
        }
        return NextResponse.json(carQuery);

      case !!colorQuery:
        const colorIds = colorQuery.split(",");
        carQuery = await Car.find({ color: { $in: colorIds } }, "-__v")
          .populate("company", "-__v")
          .populate("color", "-__v")
          .populate("platform", "-__v");
        if (carQuery.length === 0) {
          return NextResponse.json(
            { message: "No cars found for this platform" },
            { status: 404 }
          );
        }
        return NextResponse.json(carQuery);

      case !!companyQuery:
        const companyIds = companyQuery.split(",");
        carQuery = await Car.find({ company: { $in: companyIds } }, "-__v")
          .populate("company", "-__v")
          .populate("color", "-__v")
          .populate("platform", "-__v");
        if (carQuery.length === 0) {
          return NextResponse.json(
            { message: "No cars found for this platform" },
            { status: 404 }
          );
        }
        return NextResponse.json(carQuery);

      case !!statusQuery:
        carQuery = await Car.find({ carStatus: +statusQuery }, "-__v")
          .populate("company", "-__v")
          .populate("color", "-__v")
          .populate("platform", "-__v");
        if (carQuery.length === 0) {
          return NextResponse.json(
            { message: "No cars found for this platform" },
            { status: 404 }
          );
        }
        return NextResponse.json(carQuery);

      case !!param:
        carQuery = await Car.find({ title: { $regex: param } }, "-__v")
          .populate("company", "-__v")
          .populate("color", "-__v")
          .populate("platform", "-__v");
        if (carQuery.length === 0) {
          return NextResponse.json(
            { message: "No cars found for this platform" },
            { status: 404 }
          );
        }
        return NextResponse.json(carQuery);

      default:
        const cars = await Car.find({}, "-__v")
          .populate("company", "-__v")
          .populate("color", "-__v")
          .populate("platform", "-__v");
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
    if (!ObjectId.isValid(data.userId)) {
      return NextResponse.json(
        { message: "شناسه کاربر معتبر نیست" },
        { status: 404 }
      );
    }
    if (!ObjectId.isValid(data.company)) {
      return NextResponse.json(
        { message: "شناسه شرکت معتبر نیست" },
        { status: 404 }
      );
    }
    if (!ObjectId.isValid(data.platform)) {
      return NextResponse.json(
        { message: "شناسه بدنه معتبر نیست" },
        { status: 404 }
      );
    }

    const findColor = await Color.findOne({ _id: data.color });
    const findCompany = await Company.findOne({ _id: data.company });
    const findPlatform = await Platform.findOne({ _id: data.platform });
    const findUser = await User.findOne({ _id: data.userId });

    if (!findColor) {
      return NextResponse.json({ message: "رنگ یافت نشد!!" }, { status: 404 });
    }
    if (!findCompany) {
      return NextResponse.json({ message: "شرکت یافت نشد!!" }, { status: 404 });
    }

    if (!findPlatform) {
      return NextResponse.json({ message: "بدنه یافت نشد!!" }, { status: 404 });
    }
    if (!findUser) {
      return NextResponse.json(
        { message: "کاربر یافت نشد!!" },
        { status: 404 }
      );
    }

    const createdCar = await Car.create(data);

    if (!createdCar) {
      return NextResponse.json(
        { message: "خطا در ایجاد خودرو" },
        { status: 400 }
      );
    }
    return NextResponse.json(createdCar, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
