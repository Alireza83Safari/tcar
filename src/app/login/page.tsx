"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
//import { useRouter } from "next/router";
import React, { useState } from "react";

const Page = () => {
  // const router = useRouter();
  const [userLoginInfos, setUserLoginInfos] = useState({
    email: "",
    password: "",
  });
  const email = userLoginInfos.email;
  const password = userLoginInfos.password;
  const [error, setError] = useState("");
  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserLoginInfos({
      ...userLoginInfos,
      [id]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    signIn("credentials", {
      email,
      password,
      redirect: true,
    })
      .then((res) => {
        if (res?.error) {
          setError(JSON.parse(res.error).message);
        } else {
          setUserLoginInfos({ email: "", password: "" });
          //  router.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header />
      <div className="xl:container mx-auto my-20 px-4 grid grid-cols-2">
        <div className="flex justify-center items-center">
          <Image
            src={"/img/signin-modal/signin-dark.svg"}
            alt="login"
            width={400}
            height={400}
          />
        </div>
        <form
          onSubmit={handleLogin}
          className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md w-full"
        >
          <div className="mb-6">
            <label htmlFor="email" className="block mb-1 text-gray-700">
              ایمیل
            </label>
            <input
              type="text"
              id="email"
              onChange={setInputValue}
              placeholder="ایمیل"
              className="w-full px-4 py-2 border rounded-md bg-black-100"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-gray-700">
              رمز عبور
            </label>
            <input
              type="password"
              onChange={setInputValue}
              id="password"
              placeholder="رمز عبور"
              className="w-full px-4 py-2 border rounded-md bg-black-100"
            />
          </div>
          <button className="w-full bg-orange py-2 rounded-lg mt-4">
            ورود به حساب کاربری
          </button>
          <div className="mt-4">
            <Link href="/register" className="text-gray-200">
              هنوز حساب کاربری ندارید؟
            </Link>
          </div>
          {error && <p>{error}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Page;
