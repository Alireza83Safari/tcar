"use client";
import { useEffect, useState } from "react";
import { Modal, Input, Spinner } from "@/components";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { editAppPic } from "@/actions/appPic";

const EditAppPic = ({ showEditAppPic, setShowEditAppPic, editId }: any) => {
  const initialState = {
    status: "",
    message: "",
  } as any;

  const [editValue, setEditValue] = useState({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const findBrand = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/appPic/${editId}`);

      const appPic = await res.json();
      setEditValue(appPic);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    findBrand();
  }, [editId]);

  const [state, formAction] = useFormState(editAppPic, initialState);

  const closeModal = () => {
    setShowEditAppPic(false);
  };

  useEffect(() => {
    if (state?.status === 200) {
      toast.success("ویرایش بنر موفقیت آمیز بود");
      closeModal();
    }
  }, [state]);

  return (
    <Modal isOpen={showEditAppPic} onClose={closeModal} title="ویرایش بنر">
      {loading ? (
        <div className="min-w-[16rem] min-h-[16rem]">
          <Spinner />
        </div>
      ) : (
        <form action={formAction} className="grid grid-cols-1 bg-black-00">
          <>
            <div className="mx-2 my-1">
              <input type="hidden" name="id" value={editId} />
              <Input
                label="عنوان بنر"
                name="title"
                className="border bg-black-500"
                defaultValue={editValue.title}
              />
            </div>
            <div className="mx-2 my-1">
              <Input
                label="توضیحات بنر"
                name="description"
                className="border bg-black-500"
                defaultValue={editValue.description}
              />
            </div>

            <button className="bg-orange w-[95%] rounded-lg py-2 mt-5 mx-2">
              ویرایش برند
            </button>
          </>
        </form>
      )}
    </Modal>
  );
};

export default EditAppPic;
