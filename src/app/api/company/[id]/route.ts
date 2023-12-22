import Company from "@/models/company";
import connectToDB from "@/utils/database";
import companyValidator from "@/validator/server/company";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "شناسه شرکت معتبر نیست" },
        { status: 422 }
      );
    }
    const findCompany = await Company.findOne({ _id: params.id }, "-__v");

    if (!findCompany) {
      return NextResponse.json(
        { error: "شناسه شرکت وجود ندارد" },
        { status: 404 }
      );
    }

    if (findCompany) {
      return NextResponse.json(findCompany);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "شناسه شرکت معتبر نیست" },
        { status: 422 }
      );
    }
    const findCompany = await Company.findOne({ _id: params.id });
    if (!findCompany) {
      return NextResponse.json(
        { error: "شناسه شرکت وجود ندارد" },
        { status: 404 }
      );
    }
    const deleteCompany = await Company.findOneAndDelete({ _id: params.id });

    if (deleteCompany) {
      return NextResponse.json(
        { message: "شرکت با موفقیت حذف شد" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    const data = await req.json();

    const validationResult = companyValidator(data);

    if (validationResult !== true) {
      return NextResponse.json({ error: validationResult }, { status: 422 });
    }

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "شناسه شرکت معتبر نیست" },
        { status: 422 }
      );
    }

    const findCompany = await Company.findOne({ _id: params.id }, { data });
    if (!findCompany) {
      return NextResponse.json(
        { error: "شناسه شرکت وجود ندارد" },
        { status: 404 }
      );
    }

    const updateCompany = await Company.findOneAndUpdate(
      { _id: params.id },
      data,
      {
        new: true,
      }
    );

    if (updateCompany) {
      return NextResponse.json(
        { message: "شرکت با موفقیت ویرایش شد" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
