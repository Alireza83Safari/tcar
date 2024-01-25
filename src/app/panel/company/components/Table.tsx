"use client";
import { useState } from "react";
import { companiesType } from "@/types/brand.type";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import EditBrand from "./EditCompany";
import { CldImage } from "next-cloudinary";
import "../../components/Style.css";
import { deleteCompany } from "@/actions/company";

export async function Table({ brands }: { brands: companiesType[] }) {
  const [editId, setEditID] = useState("");
  const [showEditBrand, setShowEditBrand] = useState(false);
  return (
    <div className="mt-5 overflow-x-auto mr-4 min-h-screen">
      {brands?.length ? (
        <table className="min-w-full rounded-lg bg-white text-black-500">
          <thead>
            <tr className="sm:text-xs text-[12px] 2xl:text-lg border-b">
              <th className="py-3 px-2">#</th>
              <th className="py-3 px-2">برند</th>
              <th className="py-3 px-2">کد برند</th>
              <th className="py-3 px-2">عکس برند</th>
              <th className="py-3 px-2">عضویت</th>
              <th className="py-3 px-2">#</th>
            </tr>
          </thead>
          <tbody>
            {brands?.map((brand: companiesType, index: number) => (
              <tr className="sm:text-xs text-[10px] 2xl:text-sm sm:px-4 text-center">
                <td className="py-3 px-2">{index + 1}</td>
                <td className="py-3 px-2">{brand.name}</td>
                <td className="py-3 px-2">{brand.code}</td>
                <td className="flex justify-center items-center py-3 px-2">
                  <CldImage
                    width="50"
                    height="50"
                    src={String(brand.image)}
                    alt="Description of my image"
                  />
                </td>
                <td className="py-3 px-2">{brand.createdAt?.slice(0, 10)}</td>
                <td className="py-3 px-2">
                  <td className="flex items-center justify-center">
                    <FaTrashAlt
                      className="text-red mx-2"
                      onClick={() => deleteCompany(brand._id)}
                    />
                    <FaPenAlt
                      className="text-purple mx-2"
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
      ) : (
        <h2 className=" min-w-full h-[20rem] flex justify-center items-center">
          برندی برای نمایش وجود ندارد
        </h2>
      )}
      <EditBrand
        showEditBrand={showEditBrand}
        setShowEditBrand={setShowEditBrand}
        editId={editId}
      />
    </div>
  );
}
