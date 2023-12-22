import Images from "@/models/Image";
import connectToDB from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const findImage = await Images.find({});
    if (!findImage.length) {
      return NextResponse.json({ message: "errror" }, { status: 404 });
    }

    return NextResponse.json(findImage);
  } catch (error) {
    return NextResponse.json({ message: "errror" }, { status: 500 });
  }
}
