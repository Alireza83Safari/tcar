"use client";
import Footer from "@/components/Footer";
import Input from "@/components/Form/Input";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner/Spinner";
import axiosInstance from "@/services/axios/axios";
import { loginErrorType } from "@/types/error.type";
import { loginSchema } from "@/validator/client/auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const initialState = {
    email: "",
    password: "",
  };
  const [userLoginInfos, setUserLoginInfos] = useState(initialState);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<loginErrorType>();

  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserLoginInfos({
      ...userLoginInfos,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.post("/login", userLoginInfos);
      if (res.status === 200) {
        signIn("credentials", {
          ...userLoginInfos,
          redirect: false,
        }).then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials!");
          }

          if (callback?.ok) {
            toast.success("ورود موفقیت آمیز بود");
            router.push("/");
          }
        });
        setLoading(false);
      }
    } catch (error) {
      setServerError((error as any)?.response?.data?.message);
      setLoading(false);
    }
  };

  const formIsValid = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const isValid = await loginSchema?.validate(userLoginInfos, {
        abortEarly: false,
      });
      if (isValid) {
        handleLogin();
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
      <div className="xl:container mx-auto my-20 px-4 grid grid-cols-2">
        <div className="flex justify-center items-center">
          <Image
            src="/img/car-finder/auth/signin-dark.svg"
            alt="login"
            width={400}
            height={400}
          />
        </div>
        {isLoading ? (
          <div className="col-span-2 min-h-[20rem]">
            <Spinner />
          </div>
        ) : (
          <form
            onSubmit={formIsValid}
            className="max-w-md mx-auto p-6 bg-black-500 py-8 rounded-lg shadow-md w-full"
          >
            <p className="text-red text-center">{serverError}</p>
            <div className="mb-6">
              <Input
                label="ایمیل"
                type="email"
                name="email"
                onChange={setInputValue}
                placeholder="ایمیل"
                value={userLoginInfos.email}
                className="w-full px-4 py-2 border rounded-md bg-black-100"
                onfocus={() => {
                  setServerError("");
                  setErrors(initialState);
                }}
                error={errors?.email}
              />
            </div>
            <div className="mb-6">
              <Input
                label="رمز عبور"
                type="password"
                name="password"
                onChange={setInputValue}
                placeholder="رمز عبور"
                value={userLoginInfos.password}
                className="w-full px-4 py-2 border rounded-md bg-black-100"
                onfocus={() => {
                  setServerError("");
                  setErrors(initialState);
                }}
                error={errors?.password}
              />
            </div>
            <button className="w-full bg-orange py-2 rounded-lg mt-4">
              ورود به حساب کاربری
            </button>
            <div className="mt-6 text-center">
              <Link
                href="/register"
                className="text-gray-200 hover:text-white duration-300"
              >
                هنوز حساب کاربری ندارید؟
              </Link>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Login;
