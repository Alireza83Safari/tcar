import Company from "@/models/company";
import connectToDB from "@/utils/database";
import companyValidator from "@/validator/server/company";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  connectToDB();

  try {
    const data = await req.json();

    const validatorResult = companyValidator(data);
    if (validatorResult !== true) {
      return NextResponse.json({ validatorResult }, { status: 422 });
    }

    const compony = await Company.findOne({ name: data.name });
    if (compony) {
      return NextResponse.json(
        { error: "company name already exists" },
        { status: 409 }
      );
    }
    const createCompony = await Company.create(data);
    if (createCompony) {
      return NextResponse.json({ message: "compony created" }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  connectToDB();

  try {
    const compony = await Company.find({}, "-__v");

    if (compony) {
      return NextResponse.json(compony);
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}
