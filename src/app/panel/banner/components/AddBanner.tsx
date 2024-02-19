"use client";
import { useState, useEffect } from "react";
import { Modal, Input, Spinner } from "@/components";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
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
      revalidateWithTag("banner");
      toast.success("ساخت بنر موفقت آمیز بود");
    }
  }, [state]);

  return (
    <div>
      <div className="w-full mt-10 mb-4">
        <button
          className=" bg-purple flex items-center py-2 px-4 rounded-md md:text-base text-sm mr-4 text-white"
          onClick={() => openModal()}
        >
          <p>افزودن بنر جدید</p>
          <FaPlus />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="افزودن بنر">
        {!showImage ? (
          <form action={formAction} className="grid grid-cols-1">
            {false ? (
              <div className="min-w-[40%] min-h-[60%]">
                <Spinner />
              </div>
            ) : (
              <>
                <div className="mx-2 my-3">
                  <Input label="عنوان بنر" name="title" />
                </div>
                <div className="mx-2 my-3">
                  <Input label="توضیحات بنر" name="description" />
                </div>

                <button className="bg-purple w-[95%] rounded-lg py-2 mt-6 mx-2 text-white hover:bg-boldPurple duration-300">
                  افزودن بنر
                </button>
              </>
            )}
          </form>
        ) : (
          <Upload
            id={state?.message?._id}
            closeModal={closeModal}
            setShowImage={setShowImage}
            type={3}
          />
        )}
      </Modal>
    </div>
  );
};

export default AddBanner;
