"use client";
import Modal from "@/components/Modal";
import Input from "@/components/Form/Input";
import Spinner from "@/components/Spinner/Spinner";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { editColors } from "@/app/actions/color";

const EditColor = ({ showColors, setShowEditColor, editId }: any) => {
  const [initialState, setInitialState] = useState({
    id: editId,
    name: "",
    code: "",
    hex: "",
  }) as any;

  const [loading, setLoading] = useState(false);

  const findColor = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/color/${editId}`);
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

  const [state, formAction] = useFormState(editColors, initialState);

  const closeModal = () => {
    setShowEditColor(false);
  };

  useEffect(() => {
    if (state?.status === 200) {
      toast.success("ویرایش رنگ موفقیت آمیز بود");
      closeModal();
    }
  }, [state]);

  return (
    <Modal isOpen={showColors} onClose={closeModal} title="ویرایش رنگ">
      {loading ? (
        <div className="min-w-[15rem] min-h-[15rem]">
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
                  label="نام رنگ"
                  name="name"
                  placeholder="نام رنگ"
                  className="border bg-black-500"
                  defaultValue={initialState.name}
                />
              </div>
              <div className="mx-2 my-1">
                <Input
                  label="کد رنگ"
                  name="code"
                  placeholder="کد رنگ"
                  className="border bg-black-500"
                  defaultValue={initialState.code}
                />
              </div>
              <div className="mx-2 my-1">
                <Input
                  label="هکس کد"
                  name="hex"
                  placeholder="هکس کد"
                  className="border bg-black-500"
                  defaultValue={initialState.hex}
                />
              </div>
              <button className="bg-orange w-[95%] rounded-lg py-2 mt-5 mx-2">
                ویرایش رنگ
              </button>
            </>
          )}
        </form>
      )}
    </Modal>
  );
};

export default EditColor;
