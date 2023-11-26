"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
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

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLoginInfos),
      });

      const data = await res.json(); // Parse response JSON

      console.log(data); // Log the parsed JSON data from the response
    } catch (error) {
      setError(error);
    }
  };

  console.log(error);

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
          onSubmit={handleRegister}
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
          <button className="w-full bg-orange py-2 rounded-lg mt-3">
            ساخت حساب کاربری
          </button>
          {error && <p className="text-orange">{error}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Page;
