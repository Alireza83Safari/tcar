"use client";
import React, { useState } from "react";
import { registerErrorType } from "@/types/error.type";
import { registerSchema } from "@/validator/client/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { revalidateWithTag } from "@/actions/revalidateWithTag";
import { FormSpinner, Input, Footer, Header } from "@/components";

export default function page() {
  const { push } = useRouter();
  const initialState = {
    username: "",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <div className="xl:container mx-auto sm:my-14 my-8 px-4 grid sm:grid-cols-2">
        <div className="flex justify-center items-center">
          <Image
            src="/img/banner/auth.WEBP"
            alt="login"
            width={400}
            height={400}
          />
        </div>

        <form
          onSubmit={formIsValid}
          className="max-w-md mx-auto p-6 border border-lightPurple py-8 shadow-md rounded-md w-full"
        >
          <p className="text-red text-center">{serverError}</p>
          <div className="mb-4">
            <Input
              label="نام کاربری"
              type="username"
              name="username"
              onChange={handleInputChange}
              placeholder="نام کاربری"
              value={userRegisterInfos.username}
              onfocus={() => {
                setServerError("");
                setErrors(initialState);
              }}
              error={errors?.username}
            />
          </div>
          <div className="mb-4">
            <Input
              label="نام"
              type="text"
              name="firstname"
              onChange={handleInputChange}
              placeholder="نام"
              value={userRegisterInfos.firstname}
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
              onChange={handleInputChange}
              placeholder="نام خانوادگی"
              value={userRegisterInfos.lastname}
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
              onChange={handleInputChange}
              placeholder="رمز عبور"
              value={userRegisterInfos.password}
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
              onChange={handleInputChange}
              placeholder="تایید رمز عبور"
              value={userRegisterInfos.confirmPassword}
              onfocus={() => {
                setServerError("");
                setErrors(initialState);
              }}
              error={errors?.confirmPassword}
            />
          </div>
          <button className="w-full bg-purple py-2 text-white rounded-lg mt-3">
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
