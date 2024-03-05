import Contact from "@/models/contact";
import connectToDB from "@/utils/database";
import contactValidator from "@/validator/server/contact";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const data = await req.json();
    const validationResult = contactValidator(data);

    if (validationResult !== true) {
      return NextResponse.json({ message: validationResult }, { status: 422 });
    }

    const createContact = await Contact.create(data);

    if (!createContact) {
      return NextResponse.json(
        { error: "مشکلی در ایجاد تماس ایجاد شده است" },
        { status: 409 }
      );
    }
    return NextResponse.json(createContact);
  } catch (error) {
    return NextResponse.json(
      { error: "خطای ناشناخته در هنگام پردازش درخواست شما رخ داده است" },
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
      const contactQuery = await Contact.find(
        { username: { $regex: params } },
        "-__v"
      );
      if (contactQuery.length) {
        return NextResponse.json(contactQuery);
      } else {
        return NextResponse.json({ message: "هیچ تماسی یافت نشد" });
      }
    } else {
      const contacts = await Contact.find({});
      return NextResponse.json(contacts);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطای ناشناخته در هنگام بازیابی تماس‌ها رخ داده است" },
      { status: 500 }
    );
  }
}
