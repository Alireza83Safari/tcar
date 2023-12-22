"use client";
import { deleteBrand } from "@/app/actions/brand";
import { getBrandsType } from "@/types/brand.type";
import Image from "next/image";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import EditBrand from "./EditBrand";

export async function Table({ brands }: { brands: getBrandsType[] }) {
  const [editId, setEditID] = useState("");
  const [showEditBrand, setShowEditBrand] = useState(false);
  return (
    <div className="">
      <table className=" w-full">
        <thead>
          <tr className="sm:text-xs text-[12px] 2xl:text-lg border-y text-">
            <th className="w-[10%] py-4">#</th>
            <th className="w-[20%]">برند</th>
            <th className="w-[15%]">کد برند</th>
            <th className="w-[15%]">عکس برند</th>
            <th className="w-[15%]">عضویت</th>
            <th className="w-[15%]">#</th>
          </tr>
        </thead>
        <tbody>
          {brands?.map((brand: getBrandsType, index: number) => (
            <tr className="sm:text-xs text-[10px] 2xl:text-sm sm:px-4 text-center">
              <td className="py-4">{index + 1}</td>
              <td>{brand.name}</td>
              <td>{brand.code}</td>
              <td>
                <Image
                  src={`/uploads/${brand.image}`}
                  alt="img"
                  width={30}
                  height={30}
                />
              </td>
              <td>{brand.createdAt?.slice(0, 10)}</td>
              <td>
                <td className="flex items-center justify-center mt-4">
                  <FaTrashAlt
                    className="text-red mx-2"
                    onClick={() => deleteBrand(brand._id)}
                  />
                  <FaPenAlt
                    className="text-orange mx-2"
                    onClick={() => {
                      setEditID(brand._id);
                      setShowEditBrand(true);
                    }}
                  />
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditBrand
        showEditBrand={showEditBrand}
        setShowEditBrand={setShowEditBrand}
        editId={editId}
      />
    </div>
  );
}
