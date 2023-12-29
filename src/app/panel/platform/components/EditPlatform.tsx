"use client";

import Modal from "@/components/Modal";
import Input from "@/components/Form/Input";
import Spinner from "@/components/Spinner/Spinner";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { editPlatform } from "@/actions/platform";
import { apiUrl } from "@/services/apiUrl";

const EditPlatform = ({ showModal, setShowEditModal, editId }: any) => {
  const [initialState, setInitialState] = useState({
    id: editId,
    name: "",
    code: "",
    image: null,
  }) as any;

  const [loading, setLoading] = useState(false);

  const findColor = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/platform/${editId}`);
      const color = await res.json();
      setInitialState(color);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (editId) {
      findColor();
    }
  }, [editId]);

  const [state, formAction] = useFormState(editPlatform, initialState);

  const closeModal = () => {
    setShowEditModal(false);
  };

  useEffect(() => {
    if (state?.status === 200) {
      toast.success("ویرایش پلتفرم موفقیت آمیز بود");
      closeModal();
    }
  }, [state]);

  return (
    <Modal isOpen={showModal} onClose={closeModal} title="ویراش پلتفرم">
      <form action={formAction} className="grid grid-cols-1">
        {false ? (
          <div className="min-w-[40%] min-h-[60%]">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="mx-2 my-1">
              <input type="hidden" name="id" value={editId} />
              <Input
                label="نام پلتفرم"
                name="name"
                placeholder="نام پلتفرم"
                className="border bg-black-500"
                defaultValue={initialState.name}
              />
            </div>
            <div className="mx-2 my-1">
              <Input
                label="کد پلتفرم"
                name="code"
                placeholder="کد پلتفرم"
                className="border bg-black-500"
                defaultValue={initialState.code}
              />
            </div>
            <button className="bg-orange w-[95%] rounded-lg py-2 mt-5 mx-2">
              ویرایش پلتفرم
            </button>
          </>
        )}
      </form>
    </Modal>
  );
};

export default EditPlatform;
