"use client";
import Modal from "@/components/Modal";
import Input from "@/components/Form/Input";
import Spinner from "@/components/Spinner/Spinner";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { createPlatform } from "@/app/actions/platform";

const AddPlatform = () => {
  const initialState = {
    name: "",
    code: "",
    image: null,
  } as any;

  const [state, formAction] = useFormState(createPlatform, initialState);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (state?.status === 200) {
      toast.success("ساخت پلتفرم موفقت آمیز بود");
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
          <p>افزودن پلتفرم جدید</p>
          <FaPlus />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="افزودن پلتفرم">
        <form action={formAction} className="grid grid-cols-1 bg-black-00">
          {false ? (
            <div className="min-w-[40%] min-h-[60%]">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="mx-2 my-1">
                <Input
                  label="نام پلتفرم"
                  name="name"
                  placeholder="نام پلتفرم"
                  className="border bg-black-500"
                />
              </div>
              <div className="mx-2 my-1">
                <Input
                  label="کد پلتفرم"
                  name="code"
                  placeholder="کد پلتفرم"
                  className="border bg-black-500"
                />
              </div>

              <button className="bg-orange w-[95%] rounded-lg py-2 mt-5 mx-2">
                افزودن پلتفرم
              </button>
            </>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default AddPlatform;
