import Platform from "@/models/platform";
import connectToDB from "@/utils/database";
import platformValidator from "@/validator/server/platform";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const params = searchParams.get("q");
  try {
    await connectToDB();
    if (params) {
      const platformQuery = await Platform.find(
        { name: { $regex: params } },
        "-__v"
      );
      if (platformQuery.length) {
        return NextResponse.json(platformQuery);
      } else {
        return NextResponse.json(
          { message: "پلتفرم پیدا نشد!" },
          { status: 404 }
        );
      }
    } else {
      const platforms = await Platform.find({}, "-__v");
      if (platforms) {
        return NextResponse.json(platforms);
      } else {
        return NextResponse.json(
          { error: "دریافت پلتفرم‌ها با شکست مواجه شد" },
          { status: 422 }
        );
      }
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();

    const validatorError = platformValidator(data);

    if (validatorError !== true) {
      return NextResponse.json({ error: validatorError }, { status: 422 });
    }

    const findPlatformByName = await Platform.findOne({ name: data.name });
    if (findPlatformByName) {
      return NextResponse.json(
        { error: "نام قبلا استفاده شده است" },
        { status: 422 }
      );
    }

    const findPlatformByCode = await Platform.findOne({ code: data.code });
    if (findPlatformByCode) {
      return NextResponse.json(
        { error: "کد قبلا استفاده شده است" },
        { status: 422 }
      );
    }

    const createPlatform = await Platform.create(data);

    if (createPlatform) {
      return NextResponse.json(
        { message: "پلتفرم با موفقیت ایجاد شد" },
        { status: 201 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
