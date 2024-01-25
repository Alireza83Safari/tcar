"use client";
import { useEffect, useState } from "react";
import { Modal, Input, Spinner } from "@/components";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { apiUrl } from "@/services/apiUrl";
import { editCompany } from "@/actions/company";

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
      const res = await fetch(`${apiUrl}/api/brand/${editId}`);
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

  const [state, formAction] = useFormState(editCompany, initialState);

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
                  label="برند برند"
                  name="name"
                  placeholder="نام برند"
                  defaultValue={initialState.name}
                />
              </div>
              <div className="mx-2 my-1">
                <Input
                  label="کد برند"
                  name="code"
                  placeholder="کد برند"
                  defaultValue={initialState.code}
                />
              </div>

              <button className="bg-purple w-[95%] rounded-lg py-2 mt-5 mx-2 text-white hover:bg-boldPurple duration-300">
                ویرایش برند
              </button>
            </>
          )}
        </form>
      )}
    </Modal>
  );
};

export default EditBrand;
