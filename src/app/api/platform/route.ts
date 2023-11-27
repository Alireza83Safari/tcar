import Platform from "@/models/platform";
import connectToDB from "@/utils/database";
import platformValidator from "@/validator/server/platform";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const param = searchParams.get("q");

    if (param !== "") {
      const carQuery = await Platform.find({ name: { $regex: param } }, "-__v");
      if (carQuery.length) {
        return NextResponse.json(carQuery);
      } else {
        return NextResponse.json(
          { message: "platform not found!!" },
          { status: 404 }
        );
      }
    }

    const platforms = await Platform.find({}, "-__v");

    if (platforms) {
      return NextResponse.json(platforms);
    } else {
      return NextResponse.json(
        { error: "get platforms faild" },
        { status: 422 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error processing request" },
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
        { error: "name already exist" },
        { status: 422 }
      );
    }

    const findPlatformByCode = await Platform.findOne({ code: data.code });
    if (findPlatformByCode) {
      return NextResponse.json(
        { error: "code already exist" },
        { status: 422 }
      );
    }

    const createPlatform = await Platform.create(data);

    if (createPlatform) {
      return NextResponse.json(
        { message: "create platform successfully" },
        { status: 201 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
