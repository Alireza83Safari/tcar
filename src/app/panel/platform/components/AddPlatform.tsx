"use client";
import Modal from "@/components/Modal";
import Input from "@/components/Form/Input";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { createPlatform } from "@/actions/platform";
import Upload from "../../components/Upload";

const AddPlatform = () => {
  const initialState = {
    message: "",
    status: null,
  } as any;
  const [showImage, setShowImage] = useState(false);
  const [state, formAction] = useFormState(createPlatform, initialState);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    <div>
      <div className="w-full mt-10 mb-4">
        <button
          className=" bg-orange flex items-center py-2 px-4 rounded-md md:text-base text-sm"
          onClick={() => openModal()}
        >
          <p>افزودن پلتفرم جدید</p>
          <FaPlus />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="افزودن پلتفرم">
        {!showImage ? (
          <form action={formAction} className="grid grid-cols-1 bg-black-00">
            <div className="mx-2 my-3">
              <Input
                label="نام پلتفرم"
                name="name"
                className="border bg-gradient-to-r from-zinc-900 to-slate-800"
              />
            </div>
            <div className="mx-2 my-3">
              <Input
                label="کد پلتفرم"
                name="code"
                className="border bg-gradient-to-r from-zinc-900 to-slate-800"
              />
            </div>

            <button className="bg-orange w-[95%] rounded-lg py-2 mt-6 mx-2">
              افزودن پلتفرم
            </button>
          </form>
        ) : (
          <Upload
            id={state?.message?._id}
            closeModal={closeModal}
            setShowImage={setShowImage}
            type={1}
          />
        )}
      </Modal>
    </div>
  );
};

export default AddPlatform;
