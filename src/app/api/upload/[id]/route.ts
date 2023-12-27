import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/utils/database";
import Car from "@/models/car";
import Platform from "@/models/platform";
import Company from "@/models/company";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    const data = await req.json();
    const updatedCar = await (data.type === 0
      ? Car
      : data.type === 1
      ? Platform
      : Company
    ).findByIdAndUpdate(params.id, { image: data?.scureId }, { new: true });

    if (!updatedCar) {
      return NextResponse.json({ error: "Car not found" }, { status: 404 });
    }

    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occurred ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
}
