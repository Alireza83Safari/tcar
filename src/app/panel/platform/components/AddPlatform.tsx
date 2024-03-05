"use client";
import { Input } from "@/components";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { createPlatform } from "@/actions/platform";
import Upload from "../../components/Upload";

const AddPlatform = () => {
  const initialState = {
    message: "",
    status: null,
  } as any;
  const [showImage, setShowImage] = useState(false);
  const [state, formAction] = useFormState(createPlatform, initialState);

  useEffect(() => {
    if (state?.status === 201) {
      setShowImage(true);
      toast.success("ساخت پلتفرم موفقت آمیز بود");
    } else {
      if (state?.message) {
        toast.error(state?.message);
      }
    }
  }, [state]);

  return (
    <div className="bg-white p-2 pb-5 rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-2">افزودن پلتفرم</h1>
      {!showImage ? (
        <form action={formAction} className="sm:grid sm:grid-cols-2 gap-x-3">
          <div className="my-3">
            <Input label="نام پلتفرم" name="name" />
          </div>
          <div className="my-3">
            <Input label="کد پلتفرم" name="code" />
          </div>

          <button className="bg-purple rounded-lg py-2 mt-3 text-white hover:bg-boldPurple duration-300 min-w-full col-span-2">
            افزودن پلتفرم
          </button>
        </form>
      ) : (
        <Upload id={state?.message?._id} setShowImage={setShowImage} type={1} />
      )}
    </div>
  );
};

export default AddPlatform;
