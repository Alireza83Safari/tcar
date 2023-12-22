"use client";
import Modal from "@/components/Modal";
import Input from "@/components/Form/Input";
import Spinner from "@/components/Spinner/Spinner";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { editBrands } from "@/app/actions/brand";

const EditBrand = ({ showEditBrand, setShowEditBrand, editId }: any) => {
  const [initialState, setInitialState] = useState({
    id: editId,
    name: "",
    code: "",
  }) as any;

  const [loading, setLoading] = useState(false);

  const findBrand = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/company/${editId}`);
      const brand = await res.json();
      setInitialState(brand);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    findBrand();
  }, [editId]);

  const [state, formAction] = useFormState(editBrands, initialState);

  const closeModal = () => {
    setShowEditBrand(false);
  };

  useEffect(() => {
    if (state?.status === 200) {
      toast.success("ویرایش برند موفقیت آمیز بود");
      closeModal();
    }
  }, [state]);

  return (
    <Modal isOpen={showEditBrand} onClose={closeModal} title="ویرایش برند">
      {loading ? (
        <div className="min-w-[40%] min-h-[60%]">
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

export default EditBrand;
