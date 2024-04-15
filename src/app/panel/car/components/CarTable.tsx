"use client";

import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import { Modal } from "@/components";
import EditForm from "./EditForm";
import { CarType } from "@/types/car";
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
            <tr className="md:text-sm text-xs text-center border-b [&>th]:py-3 [&>th]:px-2">
              <th>ردیف</th>
              <th>عنوان</th>
              <th>قیمت</th>
              <th>رنگ</th>
              <th>برند</th>
              <th>گیربکس</th>
              <th>عضویت</th>
              <th>وضعیت</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {cars?.map((car: CarType, index: number) => (
              <tr className="2xl:text-sm text-xs text-center [&>td]:py-3 [&>td]:px-2 [&>td]:truncate" key={car?._id}>
                <td>{index + 1}</td>
                <td>
                  {car?.title?.slice(0, 25)}
                </td>
                <td>{car?.price}</td>
                <td>
                  {(car?.color as any)?.name}
                </td>
                <td>
                  {(car?.company as any)?.name}
                </td>
                <td className="text-white">
                  <button
                    className={`px-3 py-1 rounded-md ${
                      car.gearbox === 0 ? "bg-purple" : `bg-green`
                    }`}
                  >
                    {car.gearbox === 0 ? `دنده ای` : `اتومات`}
                  </button>
                </td>
                <td>
                  {car.createdAt?.slice(0, 10)}
                </td>

                <td className="text-white">
                  <button
                    className={`rounded-md px-3 py-1 ${
                      car.carStatus === 0 ? "bg-purple" : `bg-green`
                    }`}
                  >
                    {car.carStatus === 0 ? `نو` : `کارکرده`}
                  </button>
                </td>
                <td className="flex justify-center">
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
