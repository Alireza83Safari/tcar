import Car from "@/models/car";
import connectToDB from "@/utils/database";
import carValidator from "@/validator/server/car";
import { NextRequest, NextResponse } from "next/server";
import Color from "@/models/color";
import Company from "@/models/company";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const param = searchParams.get("q");

  if (param !== "") {
    const carQuery = await Car.find({ title: { $regex: param } });
    if (carQuery.length) {
      return NextResponse.json({ carQuery });
    } else {
      return NextResponse.json({ message: "car not found!!" }, { status: 404 });
    }
  }

  try {
    await connectToDB();

    const cars = await Car.find({}, "-__v");
    return NextResponse.json({ cars });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Error processing request" },
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

    const findColor = await Color.findOne({ _id: data.color });
    const findCompany = await Company.findOne({ _id: data.company });
    console.log("findCompany", findCompany);

    if (!findColor) {
      return NextResponse.json(
        { message: "color not found!!" },
        { status: 404 }
      );
    } else if (!findCompany) {
      return NextResponse.json(
        { message: "company not found!!" },
        { status: 404 }
      );
    } else {
      const createdCar = await Car.create({
        ...data,
        color: findColor,
        company: findCompany,
      });

      if (createdCar) {
        return NextResponse.json({ createdCar }, { status: 201 });
      } else {
        return NextResponse.json(
          { message: "Error creating car" },
          { status: 500 }
        );
      }
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}
