import AppPic from "@/models/appPic";
import connectToDB from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();

    const createAppPic = await AppPic.create(data);
    if (createAppPic) {
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
      const brandQuery = await AppPic.find(
        { name: { $regex: params } },
        "-__v"
      );
      if (brandQuery.length) {
        return NextResponse.json(brandQuery);
      } else {
        return NextResponse.json({ message: "هیچ بنر یافت نشد" });
      }
    }
    const companies = await AppPic.find({}, "-__v");
    if (companies) {
      return NextResponse.json(companies);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
