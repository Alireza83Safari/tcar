import Car from "@/models/car";
import connectToDB from "@/utils/database";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  connectToDB();

  try {
    const editCar = await Car.findByIdAndDelete(params.id);

    if (!editCar) {
      return NextResponse.json({ message: "Car not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Car deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Error processing request" },
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
    const findCar = await Car.findOne({ _id: params.id });
    
    if (!findCar) {
      return NextResponse.json({ message: "car not found!!" }, { status: 404 });
    }

    const editCar = await Car.findOneAndUpdate({ _id: params.id }, { data });

    if (!editCar) {
      return NextResponse.json({ message: "Car not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Car edit successfully" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}
