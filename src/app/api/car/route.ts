import Car from "@/models/car";
import connectToDB from "@/utils/database";
import carValidator from "@/validator/server/car";
import { NextRequest, NextResponse } from "next/server";
import Color from "@/models/color";
import Company from "@/models/company";
import Platform from "@/models/platform";
import mongoose from "mongoose";
import User from "@/models/user";

async function findCars(query: any, skip: number, limit: number) {
  return await Car.find(query, "-__v")
    .populate("company", "-__v")
    .populate("color", "-__v")
    .populate("platform", "-__v")
    .skip(skip)
    .limit(limit);
}

async function handleOrder(order: any, skip: number, limit: number) {
  let carQuery;
  switch (order) {
    case "expensive":
      carQuery = await Car.find({}, "-__v")
        .sort({ price: -1 })
        .skip(skip)
        .limit(limit);
      break;
    case "cheap":
      carQuery = await Car.find({}, "-__v")
        .sort({ price: 1 })
        .skip(skip)
        .limit(limit);
      break;
    case "newset":
      carQuery = await Car.find({}, "-__v")
        .sort({ createdAt: 1 })
        .skip(skip)
        .limit(limit);
      break;
    case "oldest":
      carQuery = await Car.find({}, "-__v")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
      break;
    case "unused":
      carQuery = await Car.find({ carStatus: 0 }, "-__v")
        .skip(skip)
        .limit(limit);
      break;
    case "used":
      carQuery = await Car.find({ carStatus: 1 }, "-__v")
        .skip(skip)
        .limit(limit);
      break;
    default:
      return NextResponse.json(
        { message: "Invalid order parameter" },
        { status: 404 }
      );
  }
  return carQuery;
}

export async function GET(req: NextRequest) {
  await connectToDB();
  const { searchParams } = new URL(req.url);
  const cars = await Car.find({});
  const query = searchParams.get("q");
  const colorQuery = searchParams.get("color");
  const companyQuery = searchParams.get("company");
  const platformQuery = searchParams.get("platform");
  const yearsQuery = searchParams.get("years");
  const order = searchParams.get("order");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || String(cars.length));
  const skip = (page - 1) * limit;

  try {
    let carQuery;

    switch (true) {
      case !!yearsQuery:
        carQuery = await findCars({ years: yearsQuery }, skip, limit);
        return NextResponse.json(carQuery);

      case !!platformQuery:
        carQuery = await findCars({ platform: platformQuery }, skip, limit);
        return NextResponse.json(carQuery);

      case !!colorQuery:
        carQuery = await findCars({ color: colorQuery }, skip, limit);
        return NextResponse.json(carQuery);

      case !!companyQuery:
        carQuery = await findCars({ company: companyQuery }, skip, limit);
        return NextResponse.json(carQuery);

      case !!order:
        carQuery = await handleOrder(order, skip, limit);
        return NextResponse.json(carQuery);

      case !!query:
        carQuery = await findCars({ title: { $regex: query } }, skip, limit);
        return NextResponse.json(carQuery);

      default:
        const cars = await Car.find({}, "-__v")
          .populate("company", "-__v")
          .populate("color", "-__v")
          .populate("platform", "-__v")
          .skip(skip)
          .limit(limit);
        return NextResponse.json(cars);
    }
  } catch (error) {
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
    return NextResponse.json(
      { message: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
