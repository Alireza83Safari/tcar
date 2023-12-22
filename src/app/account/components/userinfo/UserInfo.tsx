"use client";

import axiosInstance from "@/services/axios/axios";
import Accordion from "../../../../components/Accordion";
import Input from "../../../../components/Form/Input";
import { useState, useEffect } from "react";
import { TbCameraPlus } from "react-icons/tb";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const UserInfo = ({ user, session }: any) => {
  const { update } = useSession();
  const [userInfos, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: 0,
  });

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

  const setInputValue = (e: any) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfos,
      [name]: value,
    });
  };

  const editUser = async () => {
    const res = await axiosInstance.put(`/user/${session.id}`, userInfos);
    if (res.status === 200) {
      await update({
        ...session?.user,
        email: userInfos.email,
      });
      toast.success("پروفایل با موفقیت ویرایش شد");
    }
  };

  return (
    <div className="col-span-8 mx-5 grid grid-cols-11">
      <form className="col-span-8">
        <h1 className="text-2xl font-semibold mb-5">اطلاعات فردی</h1>
        <Accordion title="نام" titleValue={userInfos?.firstname}>
          <div className="flex justify-center">
            <Input
              name="firstname"
              placeholder="نام"
              value={userInfos.firstname}
              onChange={setInputValue}
            />
          </div>
        </Accordion>

        <Accordion title="نام خانوادگی" titleValue={userInfos?.lastname}>
          <div className="flex justify-center">
            <Input
              name="lastname"
              placeholder="نام خانوادگی"
              value={userInfos.lastname}
              onChange={setInputValue}
            />
          </div>
        </Accordion>

        <Accordion title="ایمیل" titleValue={userInfos?.email}>
          <div className="flex justify-center">
            <Input
              name="email"
              placeholder="ایمیل"
              defaultValue={userInfos.email}
              onChange={setInputValue}
            />
          </div>
        </Accordion>

        <Accordion title="شماره" titleValue={userInfos?.phone}>
          <div className="flex justify-center">
            <Input
              name="phone"
              placeholder="شماره"
              value={userInfos.phone}
              onChange={setInputValue}
            />
          </div>
        </Accordion>

        <button
          className=" bg-orange w-full my-3 py-2 rounded-lg"
          onClick={editUser}
        >
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
