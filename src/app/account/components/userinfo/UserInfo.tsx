"use client";

import Accordion from "../../../../components/Accordion";
import Input from "../../../../components/Form/Input";
import { useState, useEffect } from "react";
import { editUser } from "@/app/actions/user";
import { TbCameraPlus } from "react-icons/tb";
import Menu from "../Menu";

const UserInfo = ({ user, session }) => {
  const [userInfos, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: 0,
  }) as any;

  useEffect(() => {
    if (user) {
      setUserInfo({
        ...userInfos,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
      });
    }
  }, [user]);

  const editUserInfo = () => {
    // editUser(session?.id, userInfos);
  };
  return (
    <div className="col-span-8 mx-5 grid grid-cols-11">
      <form action={editUserInfo} className="col-span-8">
        <h1 className="text-2xl font-semibold mb-5">اطلاعات فردی</h1>
        <Accordion title="نام" titleValue={userInfos?.firstname}>
          <div className="flex justify-center">
            <Input
              name="firstname"
              placeholder="نام"
              defaultValue={userInfos.firstname}
              //  error={errors?.title}
              //   onfocus={() => setErrors("" as any)}
            />
          </div>
        </Accordion>

        <Accordion title="نام خانوادگی" titleValue={userInfos?.lastname}>
          <div className="flex justify-center">
            <Input
              name="lastname"
              placeholder="نام خانوادگی"
              value={userInfos.lastname}
              //  error={errors?.title}
              //   onfocus={() => setErrors("" as any)}
            />
          </div>
        </Accordion>

        <Accordion title="ایمیل" titleValue={userInfos?.email}>
          <div className="flex justify-center">
            <Input
              name="email"
              placeholder="ایمیل"
              defaultValue={userInfos.email}
              //  error={errors?.title}
              //   onfocus={() => setErrors("" as any)}
            />
          </div>
        </Accordion>

        <Accordion title="شماره" titleValue={userInfos?.phone || "ثبت نشده"}>
          <div className="flex justify-center">
            <Input
              name="phone"
              placeholder="شماره"
              defaultValue={userInfos.phone}
              //  error={errors?.title}
              //   onfocus={() => setErrors("" as any)}
            />
          </div>
        </Accordion>

        <button className=" bg-orange w-full my-3 py-2 rounded-lg">
          ثبت تغییرات
        </button>
      </form>

      <div className="col-span-3 mx-4">
        <div className="w-[10rem] h-[10rem] bg-black-100 flex justify-center items-center border-2 border-dashed rounded-lg">
          <div className="text-center">
            <TbCameraPlus className="text-3xl m-auto" />
            <p>ثبت تصویر</p>
          </div>
        </div>
        <p className="mt-8">چه کسی می تواند مشخصات من را ببیند؟</p>
        <p className="text-sm text-gray-200 mt-2">
          مشخصات شما خصوصی است تا زمانی که رزرو تأیید نشود ، هیچ کس دیگری آن را
          نخواهد دید.
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
