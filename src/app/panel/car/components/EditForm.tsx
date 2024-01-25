import { useState } from "react";
import { fetcher } from "@/actions/fetcher";
import { Input, Spinner } from "@/components";
import { useEffect } from "react";
import { yearsItem } from "@/data/data";
import { useFormState } from "react-dom";
import { editCar } from "@/actions/car";
import { useSession } from "next-auth/react";
import Select from "@/components/Form/Select";
import useSWR from "swr";
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
            />
          </div>
          <div className="mx-2 my-1">
            <Input
              label="مدل"
              name="model"
              placeholder="مدل"
              onChange={setInputValue}
              value={editCarValue?.model}
            />
          </div>
          <div className="mx-2 my-1">
            <Input
              label="کارکرد"
              name="work"
              placeholder="کارکرد"
              onChange={setInputValue}
              value={editCarValue?.work}
            />
          </div>
          <div className="mx-2 my-1">
            <Input
              label="توضیخات"
              name="description"
              placeholder="توضیخات"
              onChange={setInputValue}
              value={editCarValue?.description}
            />
          </div>
          <div className="mx-2 my-1">
            <Input
              label="نام"
              name="firstname"
              placeholder="نام"
              onChange={setInputValue}
              value={editCarValue?.firstname}
            />
          </div>
          <div className="mx-2 my-1">
            <Input
              label="نام خانوادگی"
              name="lastname"
              placeholder="نام خانوادگی"
              onChange={setInputValue}
              value={editCarValue?.lastname}
            />
          </div>
          <div className="mx-2 my-1">
            <Input
              label="شماره تماس"
              name="phone"
              placeholder="شماره تماس"
              onChange={setInputValue}
              value={editCarValue?.phone}
            />
          </div>
          <div className="mx-2 my-1">
            <Select
              label="رنگ"
              name="color"
              onChange={setInputValue}
              value={editCarValue?.color?._id}
              options={colors}
            />
          </div>
          <div className="mx-2 my-1">
            <Select
              label="کمپانی"
              name="company"
              onChange={setInputValue}
              value={editCarValue?.company?._id}
              options={companies}
            />
          </div>
          <div className="mx-2 my-1">
            <Select
              label="پلتفرم"
              name="platform"
              onChange={setInputValue}
              value={editCarValue?.platform?._id}
              options={platform}
            />
          </div>
          <div className="mx-2 my-1">
            <Select
              label="سال"
              name="years"
              onChange={setInputValue}
              value={editCarValue?.years}
              options={yearsItem}
            />
          </div>
          <div className="mx-2 my-1">
            <Select
              label="گیربکس"
              name="gearbox"
              onChange={setInputValue}
              value={editCarValue?.gearbox}
              options={[0, 1]}
            />
          </div>
          <div className="mx-2 my-1">
            <Select
              label="وضعیت"
              name="carStatus"
              onChange={setInputValue}
              value={editCarValue?.carStatus}
              options={[
                { name: "نو", value: 0 },
                { name: "دست دوم", value: 1 },
              ]}
            />
          </div>

          <button className="col-span-2 bg-purple text-white hover:bg-boldPurple duration-300 py-2 rounded-lg mt-3">
            ویرایش خودرو
          </button>
        </form>
      )}
    </div>
  );
};

export default EditForm;
