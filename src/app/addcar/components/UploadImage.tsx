"use client";
import { useCallback } from "react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { CldUploadButton } from "next-cloudinary";
import { revalidateWithTag } from "@/actions/revalidateWithTag";

export default function ImageUpload({ id }: { id: string }) {
  const handleUpload = useCallback(async (result: any) => {
    const data = {
      scureId: result?.info?.secure_url,
      type: 0,
    };
    if (result?.event === "success") {
      const response = await fetch(`/api/upload/${id}`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const res = await response.json();

      if (res.status === 201) {
        toast.success("آپلود عکس با موفقیت انجام شد");
        revalidateWithTag("cars");
        revalidateWithTag("userCar");
        redirect("/home");
      }
    }
  }, []);

  return (
    <div className="min-w-full mx-auto col-span-3 mt-12">
      <h1 className="text-2xl text-center">آپلود عکس خودرو</h1>
      <div className="flex justify-center mt-20">
        <CldUploadButton
          options={{ maxFiles: 1 }}
          onUpload={handleUpload}
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
        >
          <button className=" w-full bg-orange py-3 rounded-lg min-w-[10rem]">
            آپلود
          </button>
        </CldUploadButton>
      </div>
    </div>
  );
}
