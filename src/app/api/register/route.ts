import User from "@/models/user";
import connectToDB from "@/utils/database";
import registerValidator from "@/validator/server/register";
import { hash } from "bcryptjs";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const { username, password, firstname, lastname, role } = await req.json();

    const validationResult = registerValidator({
      username,
      password,
      firstname,
      lastname,
      role,
    });

    if (validationResult !== true) {
      return NextResponse.json({ message: validationResult }, { status: 422 });
    } else {
      const userExist = await User.findOne({ username });

      if (userExist) {
        return NextResponse.json(
          { message: "کاربر از قبل وجود دارد" },
          { status: 409 }
        );
      }

      const hashedPassword = await hash(password, 12);

      const newUser = await User.create({
        username,
        firstname,
        lastname,
        role: "USER",
        password: hashedPassword,
      });

      if (newUser) {
        return NextResponse.json(
          { message: "کاربر با موفقیت ایجاد شد" },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: "خطا در پردازش درخواست" },
          { status: 500 }
        );
      }
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      for (let field in error.errors) {
        const msg = error.errors[field].message;
        return NextResponse.json({ error: msg, status: 409 });
      }
    } else {
      return NextResponse.json(
        { error: "خطا در پردازش درخواست" },
        { status: 500 }
      );
    }
  }
}
