import Color from "@/models/color";
import connectToDB from "@/utils/database";
import colorValidator from "@/validator/server/color";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const colors = await Color.find({}, "-__v");
    return NextResponse.json(colors);
  } catch (error) {
    return NextResponse.json(
      { message: "Error processing request" },
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
        { error: "Color code already exists" },
        { status: 409 }
      );
    }

    const createdColor = await Color.create({ name, code, hex });

    if (createdColor) {
      return NextResponse.json(
        { message: "create color successfully" },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { error: "Error creating color" },
      { status: 500 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
