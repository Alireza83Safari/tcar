"use client";
import Modal from "@/components/Modal";
import Input from "@/components/Form/Input";
import Spinner from "@/components/Spinner/Spinner";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import ImageUpload from "./AddBrandImage";
import { createBrand } from "@/app/actions/brand";

const AddBrand = () => {
  const [showImage, setShowImage] = useState(false);
  const initialState = {
    name: "",
    code: "",
    image: null,
  } as any;

  const [state, formAction] = useFormState(createBrand, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (state?.status === 200) {
      setShowImage(true);
      toast.success("ساخت برند موفقت آمیز بود");
    }
  }, [state]);

  return (
    <div>
      <div className="w-full mt-10 mb-4">
        <button
          className=" bg-orange flex items-center py-2 px-4 rounded-md"
          onClick={() => openModal()}
        >
          <p>افزودن برند جدید</p>
          <FaPlus />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="افزودن رنگ">
        {!showImage ? (
          <form action={formAction} className="grid grid-cols-1 bg-black-00">
            {false ? (
              <div className="min-w-[40%] min-h-[60%]">
                <Spinner />
              </div>
            ) : (
              <>
                <div className="mx-2 my-1">
                  <Input
                    label="نام برند"
                    name="name"
                    placeholder="نام برند"
                    className="border bg-black-500"
                  />
                </div>
                <div className="mx-2 my-1">
                  <Input
                    label="کد برند"
                    name="code"
                    placeholder="کد برند"
                    className="border bg-black-500"
                  />
                </div>

                <button className="bg-orange w-[95%] rounded-lg py-2 mt-5 mx-2">
                  افزودن برند
                </button>
              </>
            )}
          </form>
        ) : (
          <ImageUpload
            id={state?.message?._id}
            closeModal={closeModal}
            setShowImage={setShowImage}
          />
        )}
      </Modal>
    </div>
  );
};

export default AddBrand;
