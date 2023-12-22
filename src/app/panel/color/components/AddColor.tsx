"use client";
import Modal from "@/components/Modal";
import Input from "@/components/Form/Input";
import Spinner from "@/components/Spinner/Spinner";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { createColors } from "@/app/actions/color";
import { FaPlus } from "react-icons/fa6";

const AddColor = () => {
  const initialState = {
    name: "",
    code: "",
    hex: "",
  } as any;
  const [state, formAction] = useFormState(createColors, initialState);

  

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(state);

  useEffect(() => {
    if (state?.status === 200) {
      toast.success("ساهت رنگ موفقت آمیز بود");
      closeModal();
    }
  }, [state]);

  return (
    <div>
      <div className="w-full mt-10 mb-4">
        <button
          className=" bg-orange flex items-center py-2 px-4 rounded-md"
          onClick={() => openModal()}
        >
          <p>افزودن رنگ جدید</p>
          <FaPlus />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="افزودن رنگ">
        <form action={formAction} className="grid grid-cols-1 bg-black-00">
          {false ? (
            <div className="min-w-[40%] min-h-[60%]">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="mx-2 my-1">
                <Input
                  label="نام رنگ"
                  name="name"
                  placeholder="نام رنگ"
                  className="border bg-black-500"
                />
              </div>
              <div className="mx-2 my-1">
                <Input
                  label="کد رنگ"
                  name="code"
                  placeholder="کد رنگ"
                  className="border bg-black-500"
                />
              </div>
              <div className="mx-2 my-1">
                <Input
                  label="هکس کد"
                  name="hex"
                  placeholder="هکس کد"
                  className="border bg-black-500"
                />
              </div>
              <button className="bg-orange w-[95%] rounded-lg py-2 mt-5 mx-2">
                افزودن رنگ
              </button>
            </>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default AddColor;
