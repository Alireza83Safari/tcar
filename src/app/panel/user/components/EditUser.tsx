"use client";

import Modal from "@/components/Modal";
import Input from "@/components/Form/Input";
import Spinner from "@/components/Spinner/Spinner";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { editUser } from "@/actions/user";
import toast from "react-hot-toast";
import { apiUrl } from "@/services/apiUrl";

const EditUser = ({ showModal, setShowEditModal, editId }: any) => {
  const [initialState, setInitialState] = useState({
    status: null,
    message: "",
  }) as any;

  const [loading, setLoading] = useState(false);

  const findUser = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/user/${editId}`);
      const user = await res.json();
      setInitialState(user[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (editId) {
      findUser();
    }
  }, [editId]);

  const [state, formAction] = useFormState(editUser, initialState);

  const closeModal = () => {
    setShowEditModal(false);
  };

  useEffect(() => {
    if (state?.status === 200) {
      toast.success("ویرایش رنگ موفقیت آمیز بود");
      closeModal();
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <Modal isOpen={showModal} onClose={closeModal} title="ویرایش کاربر">
      {loading ? (
        <div className="min-w-[24vw] min-h-[24vh]">
          <Spinner />
        </div>
      ) : (
        <form action={formAction} className="grid grid-cols-1 bg-black-00">
          {false ? (
            <div className="min-w-[40%] min-h-[60%]">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="mx-2 my-1">
                <input type="hidden" name="id" value={editId} />
                <Input
                  label="نام "
                  name="firstname"
                  placeholder="نام"
                  className="border bg-black-500"
                  defaultValue={initialState?.firstname}
                />
              </div>
              <div className="mx-2 my-1">
                <Input
                  label="نام خانوادگی"
                  name="lastname"
                  placeholder="نام خانوادگی"
                  className="border bg-black-500"
                  defaultValue={initialState?.lastname}
                />
              </div>
              <div className="mx-2 my-1">
                <Input
                  label="ایمیل"
                  name="email"
                  placeholder="ایمیل"
                  className="border bg-black-500"
                  defaultValue={initialState?.email}
                />
              </div>
              <button className="bg-orange w-[95%] rounded-lg py-2 mt-5 mx-2">
                ویرایش کاربر
              </button>
            </>
          )}
        </form>
      )}
    </Modal>
  );
};

export default EditUser;
