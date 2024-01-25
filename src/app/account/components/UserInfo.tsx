"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Accordion, Input } from "@/components";
import { getUserType } from "@/types/user.type";
import toast from "react-hot-toast";

interface UserInfosState {
  firstname: string;
  lastname: string;
  email: string;
  phone: any;
}

const UserInfo = ({ user }: { user: getUserType }) => {
  const { data: session, update } = useSession();
  const [userInfos, setUserInfos] = useState<UserInfosState>({
    firstname: "",
    lastname: "",
    email: "",
    phone: 0,
  });

  useEffect(() => {
    if (user) {
      setUserInfos({
        ...userInfos,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
      });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfos({
      ...userInfos,
      [name]: value,
    });
  };

  const editUserInfo = async () => {
    const res = await fetch(`/api/user/${(session as any)?.id}`, {
      body: JSON.stringify(userInfos),
      method: "PUT",
    });
    if (res?.status === 200) {
      update(userInfos);
      toast.success("ویرایش با موفقیت انجام شد");
    } else {
      toast.error("Failed to edit user information");
    }
  };

  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session]);

  return (
    <div className="col-span-8 mx-5 grid grid-cols-11">
      <form action={editUserInfo} className="col-span-11">
        <h1 className="text-2xl font-semibold mb-5">اطلاعات فردی</h1>
        <Accordion title="نام" titleValue={userInfos?.firstname}>
          <div className="flex justify-center">
            <Input
              name="firstname"
              placeholder="نام"
              value={userInfos.firstname}
              onChange={handleInputChange}
            />
          </div>
        </Accordion>

        <Accordion title="نام خانوادگی" titleValue={userInfos?.lastname}>
          <div className="flex justify-center">
            <Input
              name="lastname"
              placeholder="نام خانوادگی"
              value={userInfos.lastname}
              onChange={handleInputChange}
            />
          </div>
        </Accordion>

        <Accordion title="ایمیل" titleValue={userInfos?.email}>
          <div className="flex justify-center">
            <Input
              name="email"
              placeholder="ایمیل"
              value={userInfos.email}
              onChange={handleInputChange}
            />
          </div>
        </Accordion>

        <Accordion title="شماره" titleValue={userInfos?.phone || "ثبت نشده"}>
          <div className="flex justify-center">
            <Input
              name="phone"
              placeholder="شماره"
              value={userInfos.phone}
              onChange={handleInputChange}
            />
          </div>
        </Accordion>

        <button className="bg-purple text-white w-full my-3 py-2 rounded-lg hover:bg-boldPurple duration-300">
          ثبت تغییرات
        </button>
      </form>

      {/*    <div className="col-span-3 mx-4">
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
      </div> */}
    </div>
  );
};

export default UserInfo;
