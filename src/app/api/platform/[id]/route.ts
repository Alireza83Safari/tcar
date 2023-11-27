import Platform from "@/models/platform";
import connectToDB from "@/utils/database";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "platform ID is not a valid ObjectID" },
        { status: 422 }
      );
    }

    const findPlatform = await Platform.findOne({ _id: params.id });
    if (!findPlatform) {
      return NextResponse.json(
        { error: "platform ID does not exist" },
        { status: 404 }
      );
    }

    const deletePlatform = await Platform.findOneAndDelete({ _id: params.id });
    if (deletePlatform) {
      return NextResponse.json(
        { message: "delete platform successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error processing request" },
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
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "platform ID is not a valid ObjectID" },
        { status: 422 }
      );
    }

    const findPlatform = await Platform.findOne({ _id: params.id });
    if (!findPlatform) {
      return NextResponse.json(
        { error: "platform ID does not exist" },
        { status: 404 }
      );
    }

    const updatedPlatform = await Platform.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    if (updatedPlatform) {
      return NextResponse.json(
        { message: "edit platform successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "platform ID is not a valid ObjectID" },
        { status: 422 }
      );
    }

    const findPlatform = await Platform.findOne({ _id: params.id }, "-__v");
    if (!findPlatform) {
      return NextResponse.json(
        { error: "platform ID does not exist" },
        { status: 404 }
      );
    }

    if (findPlatform) {
      return NextResponse.json(findPlatform);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
