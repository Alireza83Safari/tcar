"use client";
import Footer from "@/components/Footer";
import Input from "@/components/Form/Input";
import Header from "@/components/Header";
import { registerErrorType } from "@/types/error.type";
import { registerSchema } from "@/validator/client/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { revalidateWithTag } from "@/actions/revalidateWithTag";
import FormSpinner from "@/components/FormSpinner/FormSpinner";

export default function page() {
  const { push } = useRouter();
  const initialState = {
    email: "",
    firstname: "",
    lastname: "",
    role: "",
    password: "",
    confirmPassword: "",
  };
  const [userRegisterInfos, setUserRegisterInfos] = useState(initialState);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<registerErrorType>();
  const [isLoading, setLoading] = useState(false);

  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserRegisterInfos({
      ...userRegisterInfos,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/register`, {
        method: "POST",
        body: JSON.stringify(userRegisterInfos),
      });

      if (res.status === 200) {
        toast.success("ساخت حساب موفقیت آمیز بود");
        revalidateWithTag("user");
        push("/login");
        setLoading(false);
      }
      if (res.status !== 200) {
        toast.error("Invalid credentials!");
        setLoading(false);
      }
    } catch (error) {
      setServerError((error as any)?.response?.data?.message);
      setLoading(false);
    }
  };

  const formIsValid = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const isValid = await registerSchema?.validate(userRegisterInfos, {
        abortEarly: false,
      });
      if (isValid) {
        handleRegister();
      }
      setLoading(false);
    } catch (error) {
      let errors = (error as any).inner.reduce(
        (acc: any, error: any) => ({
          ...acc,
          [error.path]: error.message,
        }),
        {}
      );
      setErrors(errors);
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="xl:container mx-auto my-14 px-4 grid grid-cols-2">
        <div className="flex justify-center items-center">
          <Image
            src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1703830631/dzwuo7bkodnrtkwnfkhw.png"
            alt="login"
            width={400}
            height={400}
          />
        </div>

        <form
          onSubmit={formIsValid}
          className="max-w-md mx-auto p-6 bg-black-500 py-8 shadow-md rounded-md w-full"
        >
          <p className="text-red text-center">{serverError}</p>
          <div className="mb-4">
            <Input
              label="ایمیل"
              type="email"
              name="email"
              onChange={setInputValue}
              placeholder="ایمیل"
              value={userRegisterInfos.email}
              className="w-full px-4 py-2 border rounded-md bg-black-100"
              onfocus={() => {
                setServerError("");
                setErrors(initialState);
              }}
              error={errors?.email}
            />
          </div>
          <div className="mb-4">
            <Input
              label="نام"
              type="text"
              name="firstname"
              onChange={setInputValue}
              placeholder="نام"
              value={userRegisterInfos.firstname}
              className="w-full px-4 py-2 border rounded-md bg-black-100"
              onfocus={() => {
                setServerError("");
                setErrors(initialState);
              }}
              error={errors?.firstname}
            />
          </div>
          <div className="mb-4">
            <Input
              label="نام خانوادگی"
              type="text"
              name="lastname"
              onChange={setInputValue}
              placeholder="نام خانوادگی"
              value={userRegisterInfos.lastname}
              className="w-full px-4 py-2 border rounded-md bg-black-100"
              onfocus={() => {
                setServerError("");
                setErrors(initialState);
              }}
              error={errors?.lastname}
            />
          </div>

          <div className="mb-4">
            <Input
              label="رمز عبور"
              type="password"
              name="password"
              onChange={setInputValue}
              placeholder="رمز عبور"
              value={userRegisterInfos.password}
              className="w-full px-4 py-2 border rounded-md bg-black-100"
              onfocus={() => {
                setServerError("");
                setErrors(initialState);
              }}
              error={errors?.password}
            />
          </div>
          <div className="mb-4">
            <Input
              label="تایید رمز عبور"
              type="password"
              name="confirmPassword"
              onChange={setInputValue}
              placeholder="تایید رمز عبور"
              value={userRegisterInfos.confirmPassword}
              className="w-full px-4 py-2 border rounded-md bg-black-100"
              onfocus={() => {
                setServerError("");
                setErrors(initialState);
              }}
              error={errors?.confirmPassword}
            />
          </div>
          <button className="w-full bg-orange py-2 rounded-lg mt-3">
            {isLoading ? <FormSpinner /> : "ساخت حساب کاربری"}
          </button>
          <div className="mt-6 text-center">
            <Link
              href="/login"
              className="text-gray-200 hover:text-white duration-300"
            >
              حساب کاربری دارید؟
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
