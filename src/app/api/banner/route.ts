import Banner from "@/models/banner";
import connectToDB from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();

    const createBannr = await Banner.create(data);
    if (createBannr) {
      return NextResponse.json({ message: "بنر ایجاد شد" }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const params = searchParams.get("q");
  try {
    await connectToDB();

    if (params) {
      const brandQuery = await Banner.find(
        { name: { $regex: params } },
        "-__v"
      );
      if (brandQuery.length) {
        return NextResponse.json(brandQuery);
      } else {
        return NextResponse.json({ message: "هیچ بنر یافت نشد" });
      }
    }
    const banners = await Banner.find({}, "-__v");
    if (banners) {
      return NextResponse.json(banners);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
