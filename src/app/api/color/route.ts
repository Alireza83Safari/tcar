import Color from "@/models/color";
import connectToDB from "@/utils/database";
import colorValidator from "@/validator/server/color";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const param = searchParams.get("q");

  try {
    await connectToDB();
    if (param) {
      const colorQuery = await Color.find({ name: { $regex: param } }, "-__v");
      if (colorQuery.length) {
        return NextResponse.json(colorQuery);
      } else {
        return NextResponse.json({ message: "رنگ یافت نشد" }, { status: 404 });
      }
    } else {
      const colors = await Color.find({}, "-__v");
      return NextResponse.json(colors);
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

    const { name, code, hex } = await req.json();

    const validationResult = colorValidator({ name, code, hex });

    if (validationResult !== true) {
      return NextResponse.json({ error: validationResult }, { status: 422 });
    }

    const existingColor = await Color.findOne({ code });

    if (existingColor) {
      return NextResponse.json(
        { error: "کد رنگ از قبل وجود دارد" },
        { status: 409 }
      );
    }

    const createdColor = await Color.create({ name, code, hex });

    if (createdColor) {
      return NextResponse.json(
        { message: "رنگ با موفقیت ایجاد شد" },
        { status: 201 }
      );
    }

    return NextResponse.json({ error: "خطا در ایجاد رنگ" }, { status: 500 });
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
