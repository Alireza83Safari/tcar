"use client";
import { useState, useEffect } from "react";
import { Input, Spinner } from "@/components";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { createCompany } from "@/actions/company";
import Upload from "../../components/Upload";

const AddBrand = () => {
  const [showImage, setShowImage] = useState(false);
  const initialState = {
    message: "",
    status: "",
  } as any;

  const [state, formAction] = useFormState(createCompany, initialState);

  useEffect(() => {
    if (state?.status === 200) {
      setShowImage(true);
      toast.success("ساخت برند موفقت آمیز بود");
    }
  }, [state]);

  return (
    <div className="bg-white p-2 pb-5 rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-2">افزودن پلتفرم</h1>

      {!showImage ? (
        <form action={formAction} className="sm:grid sm:grid-cols-2 gap-x-3">
          {false ? (
            <div className="min-w-[40%] min-h-[60%]">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="my-3">
                <Input label="نام برند" name="name" />
              </div>
              <div className="my-3">
                <Input label="کد برند" name="code" />
              </div>

              <button className="bg-purple rounded-lg py-2 mt-3 text-white hover:bg-boldPurple duration-300 col-span-2 min-w-full">
                افزودن برند
              </button>
            </>
          )}
        </form>
      ) : (
        <Upload id={state?.message?._id} setShowImage={setShowImage} type={2} />
      )}
    </div>
  );
};

export default AddBrand;
