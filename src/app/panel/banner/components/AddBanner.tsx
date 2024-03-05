"use client";
import { useState, useEffect } from "react";
import { Input, Spinner } from "@/components";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import Upload from "../../components/Upload";
import { createBanner } from "@/actions/banner";
import { revalidateWithTag } from "@/actions/revalidateWithTag";

const AddBanner = () => {
  const [showImage, setShowImage] = useState(false);
  const initialState = {
    message: "",
    status: "",
  } as any;

  const [state, formAction] = useFormState(createBanner, initialState);
  useEffect(() => {
    if (state?.status === 200) {
      setShowImage(true);
      revalidateWithTag("banner");
      toast.success("ساخت بنر موفقت آمیز بود");
    }
  }, [state]);

  return (
    <div className="bg-white xs:p-4 p-2 rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-2">افزودن بنر</h1>
      {!showImage ? (
        <form action={formAction} className="sm:grid sm:grid-cols-2 gap-x-3">
          {false ? (
            <div className="min-w-[40%] min-h-[60%]">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="my-3">
                <Input label="عنوان بنر" name="title" />
              </div>
              <div className="my-3">
                <Input label="توضیحات بنر" name="description" />
              </div>

              <button className="bg-purple min-w-full rounded-lg py-2 mt-3 text-white hover:bg-boldPurple duration-300 sm:col-span-2">
                افزودن بنر
              </button>
            </>
          )}
        </form>
      ) : (
        <Upload id={state?.message?._id} setShowImage={setShowImage} type={3} />
      )}
    </div>
  );
};

export default AddBanner;
