import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import connectToDB from "@/utils/database";
import Car from "@/models/car";

const MAX_FILE_SIZE_MB = 1;

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const formData = (await req.formData()) as any;

  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const fileSizeMB = file.size / (1024 * 1024);
  if (fileSizeMB > MAX_FILE_SIZE_MB) {
    return NextResponse.json(
      {
        error: `File size exceeds maximum allowed size of ${MAX_FILE_SIZE_MB}MB.`,
      },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");

  try {
    await connectToDB();
    await writeFile(
      path.join(process.cwd(), "public/uploads/", filename),
      buffer
    );

    const updatedCar = await Car.findByIdAndUpdate(
      params.id,
      { image: filename },
      { new: true }
    );

    if (!updatedCar) {
      return NextResponse.json({ error: "Car not found" }, { status: 404 });
    }

    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
}
