import Company from "@/models/company";
import connectToDB from "@/utils/database";
import companyValidator from "@/validator/server/company";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectToDB();

  try {
    const data = await req.json();

    const validatorResult = companyValidator(data);
    if (validatorResult !== true) {
      return NextResponse.json({ validatorResult }, { status: 422 });
    }

    const company = await Company.findOne({ name: data.name });
    if (company) {
      return NextResponse.json(
        { error: "نام شرکت از قبل وجود دارد" },
        { status: 409 }
      );
    }
    const createCompany = await Company.create(data);
    if (createCompany) {
      return NextResponse.json({ message: "شرکت ایجاد شد" }, { status: 201 });
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
      const companyQuery = await Company.find(
        { name: { $regex: params } },
        "-__v"
      );
      if (companyQuery.length) {
        return NextResponse.json(companyQuery);
      } else {
        return NextResponse.json({ message: "هیچ شرکتی یافت نشد" });
      }
    } else {
      const companies = await Company.find({}, "-__v");
      if (companies) {
        return NextResponse.json(companies);
      }
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
