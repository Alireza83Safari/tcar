"use client";

import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import { Modal } from "@/components";
import EditForm from "./EditForm";
import { CarType } from "@/types/car.type";
import { deleteCar } from "@/actions/car";

export async function CarTable({ cars }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCarId, setEditCarId] = useState("");

  const openModal = (id: string) => {
    setIsModalOpen(true);
    setEditCarId(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-5 overflow-x-auto rounded-lg bg-white text-black-500">
      <Modal isOpen={isModalOpen} onClose={closeModal} title="ویرایش خودرو">
        <EditForm editCarId={editCarId} closeModal={closeModal} />
      </Modal>

      {!!cars?.length ? (
        <table className="min-w-full">
          <thead>
            <tr className="md:text-sm text-xs text-center border-b">
              <th className="py-3 px-2">ردیف</th>
              <th className="py-3 px-2">عنوان</th>
              <th className="py-3 px-2">قیمت</th>
              <th className="py-3 px-2">رنگ</th>
              <th className="py-3 px-2">برند</th>
              <th className="py-3 px-2">گیربکس</th>
              <th className="py-3 px-2">عضویت</th>
              <th className="py-3 px-2">وضعیت</th>
              <th className="py-3 px-2">#</th>
            </tr>
          </thead>
          <tbody>
            {cars?.map((car: CarType, index: number) => (
              <tr className="2xl:text-sm text-xs text-center" key={car?._id}>
                <td className="py-3 px-2 truncate">{index + 1}</td>
                <td className="py-3 px-2 truncate">
                  {car?.title?.slice(0, 25)}
                </td>
                <td className="py-3 px-2 truncate">{car?.price}</td>
                <td className="py-3 px-2 truncate">
                  {(car?.color as any)?.name}
                </td>
                <td className="py-3 px-2 truncate">
                  {(car?.company as any)?.name}
                </td>
                <td className="py-3 px-2 truncate text-white">
                  <button
                    className={` px-3 py-1 rounded-md ${
                      car.gearbox === 0 ? "bg-purple" : `bg-green`
                    }`}
                  >
                    {car.gearbox === 0 ? `دنده ای` : `اتومات`}
                  </button>
                </td>
                <td className="py-3 px-2 truncate">
                  {car.createdAt?.slice(0, 10)}
                </td>

                <td className="py-3 px-2 truncate text-white">
                  <button
                    className={` px-3 py-1 rounded-md ${
                      car.carStatus === 0 ? "bg-purple" : `bg-green`
                    }`}
                  >
                    {car.carStatus === 0 ? `نو` : `کارکرده`}
                  </button>
                </td>
                <td className="flex justify-center py-3 px-2 truncate">
                  <FaTrashAlt
                    className="text-red mx-2"
                    onClick={() => deleteCar(car?._id)}
                  />
                  <FaPenAlt
                    className="text-purple mx-2"
                    onClick={() => openModal(car?._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className=" min-w-full h-[20rem] flex justify-center items-center">
          برندی برای نمایش وجود ندارد
        </h2>
      )}
    </div>
  );
}
