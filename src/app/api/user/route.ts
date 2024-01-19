import User from "@/models/user";
import connectToDB from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const params = searchParams.get("q");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const skip = (page - 1) * limit;

  try {
    await connectToDB();

    if (params) {
      const userQuery = await User.find({ email: { $regex: params } })
        .skip(skip)
        .limit(limit);

      if (userQuery.length) {
        return NextResponse.json(userQuery);
      } else {
        return NextResponse.json({ message: "هیچ کاربری یافت نشد" });
      }
    } else {
      const users = await User.find({}, "-password").skip(skip).limit(limit);

      return NextResponse.json(users);
    }
  } catch (error) {
    return NextResponse.json({ error: "خطا در دریافت کاربران", status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectToDB();
    const usersWithPasswords = await User.find({}).select("+password");

    return NextResponse.json(usersWithPasswords);
  } catch (error) {
    return NextResponse.json({ error: "خطا در حذف کاربران" });
  }
}
