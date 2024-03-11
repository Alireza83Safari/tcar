import User from "@/models/user";
import connectToDB from "@/utils/database";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import loginValidator from "@/validator/server/login";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const { username, password } = await req.json();

    const validationResult = loginValidator({ username, password });

    if (validationResult !== true) {
      return NextResponse.json({ error: validationResult }, { status: 422 });
    }

    const foundUser = await User.findOne({ username });

    if (!foundUser) {
      return NextResponse.json({ message: "کاربر یافت نشد" }, { status: 404 });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      foundUser.password
    );

    if (isPasswordCorrect) {
      return NextResponse.json(foundUser, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "رمزعبور اشتباه است" },
        { status: 409 }
      );
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      for (let field in error.errors) {
        const msg = error.errors[field].message;
        return NextResponse.json({ message: msg, status: 409 });
      }
    } else {
      return NextResponse.json(
        { message: "خطا در پردازش درخواست" },
        { status: 500 }
      );
    }
  }
}
