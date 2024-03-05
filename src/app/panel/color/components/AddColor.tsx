"use client";
import { useEffect } from "react";
import { Input, Spinner } from "@/components";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { createColors } from "@/actions/color";
import "../../components/Style.css";

const AddColor = () => {
  const initialState = {
    message: "",
    status: null,
  } as any;
  const [state, formAction] = useFormState(createColors, initialState);

  useEffect(() => {
    if (state?.status === 201) {
      toast.success("ساخت رنگ موفقت آمیز بود");
    } else {
      if (state?.message) {
        toast.error(state?.message);
      }
    }
  }, [state]);

  return (
    <div className="bg-white xs:p-4 p-2 rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-2">افزودن رنگ</h1>
      <form action={formAction} className="xs:grid xs:grid-cols-2 gap-x-2">
        {false ? (
          <div className="min-w-[40%] min-h-[60%]">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="my-3">
              <Input label="نام رنگ" name="name" />
            </div>
            <div className="my-3">
              <Input label="کد رنگ" name="code" />
            </div>
            <div className="my-3 col-span-2">
              <Input label="هکس کد" name="hex" />
            </div>
            <button className="bg-purple rounded-lg py-2 xs:mt-6 mt-3 text-white hover:bg-boldPurple duration-300 min-w-full col-span-2">
              افزودن رنگ
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default AddColor;
