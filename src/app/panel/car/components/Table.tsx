"use client";

import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../../../../components/Modal";
import EditForm from "./EditForm";
import axiosInstance from "@/services/axios/axios";

export async function Table({ cars }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCarId, setEditCarId] = useState("");
  const openModal = (id: string) => {
    setIsModalOpen(true);
    setEditCarId(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteCarHandler = async (id: string) => {
    const res = await axiosInstance.delete(`/car/${id}`);
    ////
  };

  const editCarHandler = (id: string) => {
    ////
  };
  return (
    <div className="mt-20">
      <Modal isOpen={isModalOpen} onClose={closeModal} title="ویراش خودرو.">
        <EditForm editCarId={editCarId} />
      </Modal>

      <table className=" w-full">
        <thead>
          <tr className="sm:text-xs text-[12px] 2xl:text-lg border-y text-">
            <th className="w-[5%] py-4">#</th>
            <th className="w-[10%]">عنوان</th>
            <th className="w-[10%]">قیمت</th>
            <th className="w-[10%]">رنگ</th>
            <th className="w-[10%]">برند</th>
            <th className="w-[10%]">عضویت</th>
            <th className="w-[10%]">گیربکس</th>
            <th className="w-[10%]">وضعیت</th>
            <th className="w-[10%]">#</th>
          </tr>
        </thead>
        <tbody>
          {cars?.map((car: any, index: number) => (
            <tr className="sm:text-xs text-[10px] 2xl:text-sm sm:px-4 text-center">
              <td className="py-4">{index + 1}</td>
              <td>{car.title}</td>
              <td>{car.price}</td>
              <td>{car.color.name}</td>
              <td>{car.company.name}</td>
              {/*    <td>{car.createdAt?.slice(0, 10)}</td> */}
              <td>
                <button
                  className={` px-3 py-1 rounded-md ${
                    car.gearbox === 0 ? "bg-orange" : `bg-green`
                  }`}
                >
                  {car.gearbox === 0 ? `دنده ای` : `اتومات`}
                </button>
              </td>
              <td>
                <button
                  className={` px-3 py-1 rounded-md ${
                    car.carStatus === 0 ? "bg-orange" : `bg-green`
                  }`}
                >
                  {car.carStatus === 0 ? `نو` : `کارکرده`}
                </button>
              </td>
              <td className="flex items-center justify-center mt-4">
                <FaTrashAlt
                  className="text-red mx-2"
                  onClick={() => deleteCarHandler(car?._id)}
                />
                <FaPenAlt
                  className="text-orange mx-2"
                  onClick={() => openModal(car?._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
