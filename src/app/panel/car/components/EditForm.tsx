import { fetcher } from "@/actions/fetcher";
import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select";
import React, { useState } from "react";
import useSWR from "swr";
import { useEffect } from "react";
import Spinner from "@/components/Spinner/Spinner";
import { yearsItem } from "@/data/data"; 
import { useFormState } from "react-dom";
import { editCar } from "@/actions/car";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const EditForm = ({ editCarId, closeModal }: any) => {
  const { data: session } = useSession();

  const initialState = {
    title: "",
    price: null,
    model: "",
    work: null,
    description: "",
    firstname: "",
    lastname: "",
    phone: null,
    image: null,
    company: "",
    years: null,
    platform: null,
    gearbox: null,
    color: "",
    fuel: "",
    carStatus: null,
  } as any;

  const [isLoading, setLoading] = useState(false);
  const [editCarValue, setEditCarValue] = useState(initialState);
  const { data: colors } = useSWR("color", fetcher);
  const { data: companies } = useSWR("company", fetcher);
  const { data: platform } = useSWR("platform", fetcher);

  const getCarWithId = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/car/${editCarId}`);
      const data = await res.json();

      setEditCarValue(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (editCarId) {
      getCarWithId();
    }
  }, [editCarId]);

  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditCarValue({ ...editCarValue, [name]: value });
  };

  const errorState = {
    message: "",
    status: null,
  } as any;
  const [state, formAction] = useFormState(editCar, errorState);

  useEffect(() => {
    if (state?.status === 200) {
      toast.success("ویراش خودرو موفقیت آمیز بود");
      closeModal();
    } else if (state?.message) {
      toast.error(state?.message);
    }
  }, [state]);

  return (
    <div>
      {isLoading ? (
        <div className="min-w-[27rem] min-h-[27rem] flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <form className="grid grid-cols-2" action={formAction}>
          <input type="hidden" name="userId" value={(session as any)?.id} />
          <input type="hidden" name="id" value={editCarId} />

          <div className="mx-2 my-1">
            <Input
              label="عنوان"
              name="title"
              placeholder="عنوان"
              onChange={setInputValue}
              value={editCarValue?.title}
              className="border bg-black-500"
            />
          </div>
          <div className="mx-2 my-1">
            <Input
              type="number"
              label="قیمت"
              name="price"
              placeholder="قیمت"
              onChange={setInputValue}
              value={editCarValue?.price}
              className="border bg-black-500"
            />
          </div>
          <div className="mx-2 my-1">
            <Input
              label="مدل"
              name="model"
              placeholder="مدل"
              onChange={setInputValue}
              value={editCarValue?.model}
              className="border bg-black-500"
            />
          </div>
          <div className="mx-2 my-1">
            <Input
              label="کارکرد"
              name="work"
              placeholder="کارکرد"
              onChange={setInputValue}
              value={editCarValue?.work}
              className="border bg-black-500"
            />
          </div>
          <div className="mx-2 my-1">
            <Input
              label="توضیخات"
              name="description"
              placeholder="توضیخات"
              onChange={setInputValue}
              value={editCarValue?.description}
              className="border bg-black-500"
            />
          </div>
          <div className="mx-2 my-1">
            <Input
              label="نام"
              name="firstname"
              placeholder="نام"
              onChange={setInputValue}
              value={editCarValue?.firstname}
              className="border bg-black-500"
            />
          </div>
          <div className="mx-2 my-1">
            <Input
              label="نام خانوادگی"
              name="lastname"
              placeholder="نام خانوادگی"
              onChange={setInputValue}
              value={editCarValue?.lastname}
              className="border bg-black-500"
            />
          </div>
          <div className="mx-2 my-1">
            <Input
              label="شماره تماس"
              name="phone"
              placeholder="شماره تماس"
              onChange={setInputValue}
              value={editCarValue?.phone}
              className="border bg-black-500"
            />
          </div>
          <div className="mx-2 my-1">
            <Select
              label="رنگ"
              name="color"
              onChange={setInputValue}
              value={editCarValue?.color?._id}
              className="w-full py-[.34rem] bg-black-500 border border-borderColor rounded-lg px-3"
              options={colors}
            />
          </div>
          <div className="mx-2 my-1">
            <Select
              label="کمپانی"
              name="company"
              onChange={setInputValue}
              value={editCarValue?.company?._id}
              className="w-full py-[.34rem] bg-black-500 border border-borderColor rounded-lg px-3"
              options={companies}
            />
          </div>
          <div className="mx-2 my-1">
            <Select
              label="پلتفرم"
              name="platform"
              onChange={setInputValue}
              value={editCarValue?.platform?._id}
              className="w-full py-[.34rem] bg-black-500 border border-borderColor rounded-lg px-3"
              options={platform}
            />
          </div>
          <div className="mx-2 my-1">
            <Select
              label="سال"
              name="years"
              onChange={setInputValue}
              value={editCarValue?.years}
              className="w-full py-[.34rem] bg-black-500 border border-borderColor rounded-lg px-3"
              options={yearsItem}
            />
          </div>
          <div className="mx-2 my-1">
            <Select
              label="گیربکس"
              name="gearbox"
              onChange={setInputValue}
              value={editCarValue?.gearbox}
              className="w-full py-[.34rem] bg-black-500 border border-borderColor rounded-lg px-3"
              options={[0, 1]}
            />
          </div>
          <div className="mx-2 my-1">
            <Select
              label="وضعیت"
              name="carStatus"
              onChange={setInputValue}
              value={editCarValue?.carStatus}
              className="w-full py-[.34rem] bg-black-500 border border-borderColor rounded-lg px-3"
              options={[
                { name: "نو", value: 0 },
                { name: "دست دوم", value: 1 },
              ]}
            />
          </div>

          <button className="col-span-2 bg-orange py-2 rounded-lg mt-3">
            ویرایش خودرو
          </button>
        </form>
      )}
    </div>
  );
};

export default EditForm;
