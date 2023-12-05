import Car from "@/models/car";
import connectToDB from "@/utils/database";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  connectToDB();

  try {
    const editCar = await Car.findByIdAndDelete(params.id);

    if (!editCar) {
      return NextResponse.json({ message: "خودرو پیدا نشد" }, { status: 404 });
    }

    return NextResponse.json({ message: "خودرو با موفقیت حذف شد" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  connectToDB();
  const data = await req.json();
  try {
    const findCar = await Car.findById(params.id);
    if (findCar) {
      const editCar = await Car.findOneAndUpdate({ _id: params.id }, data, {
        new: true,
      });
      if (editCar) {
        return NextResponse.json({ message: "خودرو با موفقیت ویرایش شد" });
      } else {
        return NextResponse.json(
          { message: "خودرو پیدا نشد" },
          { status: 404 }
        );
      }
    } else {
      return NextResponse.json({ message: "خودرو پیدا نشد" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "خطا در پردازش درخواست" },
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
        { error: "شناسه خودرو معتبر نیست" },
        { status: 422 }
      );
    }

    const findCar = await Car.findOne({ _id: params.id }, "-__v");

    if (!findCar) {
      return NextResponse.json({ message: "خودرو پیدا نشد" }, { status: 404 });
    }
    if (findCar) {
      return NextResponse.json(findCar);
    }
  } catch (error) {}
}
