"use client";
import React, { useCallback } from "react";
import toast from "react-hot-toast";
import { CldUploadButton } from "next-cloudinary";
import { revalidateWithTag } from "@/app/actions/global";

export default async function Upload({
  id,
  closeModal,
  setShowImage,
  type,
}: {
  id: string;
  closeModal: any;
  setShowImage: any;
  type: number;
}) {
  const handleUpload = useCallback(async (result: any) => {
    const data = {
      scureId: result?.info?.secure_url,
      type: type,
    };
    if (result?.event === "success") {
      const response = await fetch(`/api/upload/${id}`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        closeModal();
        setShowImage(false);
        toast.success("آپلود عکس با موفقیت انجام شد");
        revalidateWithTag(
          data?.type === 0 ? "cars" : data?.type === 1 ? "platform" :data?.type === 2 ? "company" : 'appPic'
        );
      }
    }
  }, []);
  return (
    <div className="mx-auto col-span-3 min-h-[50vh] min-w-[20vw] relative">
      <div className="min-h-[20vh] min-w-[20vw]">
        <CldUploadButton
          options={{ maxFiles:  1 }}
          onUpload={handleUpload}
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
        ></CldUploadButton>
      </div>
    </div>
  );
}
