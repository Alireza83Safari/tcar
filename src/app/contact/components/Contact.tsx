"use client";

import Image from "next/image";
import { useState } from "react";
import { Input, Button } from "@/components/";

const page = () => {
  const [contactForm, setContactForm] = useState({
    username: "",
    email: "",
    comment: "",
  });

  const setFormValue = (e: any) => {
    const { name, value } = e.target;

    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };
  return (
    <main className="mt-20 xl:container mx-auto px-8">
      <div className="grid md:grid-cols-2">
        <div className="pl-10">
          <h2 className="">تماس با ما</h2>
          <p>فرم را پر کنید و تیم سعی می کند ظرف 24 ساعت با شما تماس بگیرد.</p>

          <div className="mt-12">
            <div className="flex">
              <Image
                src="/img/car-finder/icons/envelope.svg"
                alt="contact"
                className="object-contain ml-4"
                width={30}
                height={30}
              />
              <h4>ارتباط عمومی</h4>
            </div>
            <div mt-4>
              <p className="max-w-[20rem] mr-11 text-gray-200">
                برای سوالات عمومی، از جمله فرصت های مشارکت، لطفا ایمیل کنید
                <span className="text-orange">example@email.com</span>
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex">
              <Image
                src="/img/car-finder/icons/chat.svg"
                alt="contact"
                className="object-contain ml-4"
                width={30}
                height={30}
              />
              <h4>ارتباط تلفنی</h4>
            </div>
            <div mt-4>
              <p className="max-w-[20rem] mr-11 text-gray-200">
                ما برای کمک اینجا هستیم! اگر مشکل فنی دارید{" "}
                <span className="text-orange">پشتیبانی تلفنی</span>
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex">
              <Image
                src="/img/car-finder/icons/map-pin.svg"
                alt="contact"
                className="object-contain ml-4"
                width={30}
                height={30}
              />
              <h4>آدرس ما</h4>
            </div>
            <div mt-4>
              <p className="max-w-[20rem] mr-11 text-gray-200">
                آدرس ما 8502 خیابان پرستون اینگلوود، مین 98380{" "}
                <span className="text-orange">مسیریابی</span>
              </p>
            </div>
          </div>
        </div>
        <div className="md:mt-0 mt-16">
          <div>
            <Input
              label="نام و نام خانوادگی"
              name="username"
              className="py-4"
              placeholder=""
              onChange={setFormValue}
              value={contactForm.username}
            />
          </div>

          <div className="mt-5">
            <Input
              label="پست الکترونیکی"
              name="email"
              className="py-4"
              placeholder=""
              onChange={setFormValue}
              value={contactForm.email}
            />
          </div>

          <div className="mt-5">
            <Input
              label="متن درخواست"
              name="comment"
              className="py-10"
              placeholder=""
              onChange={setFormValue}
              value={contactForm.comment}
            />
          </div>

          <Button href="">ارسال درخواست</Button>
        </div>
      </div>
    </main>
  );
};

export default page;
