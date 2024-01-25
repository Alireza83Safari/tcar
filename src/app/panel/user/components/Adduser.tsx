/* "use client";
import Modal from "@/components/Modal";
import Input from "@/components/Form/Input";
import Spinner from "@/components/Spinner/Spinner";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { createUser } from "@/app/actions/user";

const AddUser = () => {
  const initialState = {
    status: null,
    message: "",
  } as any;

  const [state, formAction] = useFormState(createUser, initialState);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (state?.status === 200) {
      toast.success(state.message);
      closeModal();
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div>
      <div className="w-full mt-10 mb-4">
        <button
          className=" bg-purple flex items-center py-2 px-4 rounded-md"
          onClick={() => openModal()}
        >
          <p>افزودن کاربر جدید</p>
          <FaPlus />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="افزودن کاربر">
        <form action={formAction} className="grid grid-cols-1 bg-black-00">
          {false ? (
            <div className="min-w-[40%] min-h-[60%]">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="mx-2 my-1">
                <Input
                  label="نام"
                  name="firstname"
                  placeholder="نام"
                  className="border bg-black-500"
                />
              </div>
              <div className="mx-2 my-1">
                <Input
                  label="نام خانوادگی"
                  placeholder="نام خانوادگی"
                  name="lastname"
                  className="border bg-black-500"
                />
              </div>
              <div className="mx-2 my-1">
                <Input
                  label="ایمیل"
                  name="email"
                  placeholder="ایمیل"
                  className="border bg-black-500"
                />
              </div>
              <button className="bg-purple w-[95%] rounded-lg py-2 mt-5 mx-2">
                افزودن کاربر
              </button>
            </>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default AddUser;
 */