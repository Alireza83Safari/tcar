"use client";
import { useEffect, useState } from "react";
import { Modal, Input, Spinner } from "@/components";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { editBanner } from "@/actions/banner";

const EditBanner = ({ showEditBanner, setShowEditBanner, editId }: any) => {
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
      const res = await fetch(`/api/banner/${editId}`);

      const banner = await res.json();
      setEditValue(banner);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    findBrand();
  }, [editId]);

  const [state, formAction] = useFormState(editBanner, initialState);

  const closeModal = () => {
    setShowEditBanner(false);
  };

  useEffect(() => {
    if (state?.status === 200) {
      toast.success("ویرایش بنر موفقیت آمیز بود");
      closeModal();
    }
  }, [state]);

  return (
    <Modal isOpen={showEditBanner} onClose={closeModal} title="ویرایش بنر">
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
                defaultValue={editValue.title}
              />
            </div>
            <div className="mx-2 my-1">
              <Input
                label="توضیحات بنر"
                name="description"
                defaultValue={editValue.description}
              />
            </div>

            <button className="bg-purple w-[95%] rounded-lg py-2 mt-5 mx-2 text-white hover:bg-boldPurple duration-300">
              ویرایش برند
            </button>
          </>
        </form>
      )}
    </Modal>
  );
};

export default EditBanner;
