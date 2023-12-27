"use client";
import { deleteBrand } from "@/app/actions/company";
import { companiesType } from "@/types/brand.type";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import EditBrand from "./EditCompany";
import { CldImage } from "next-cloudinary";

export async function Table({ brands }: { brands: companiesType[] }) {
  const [editId, setEditID] = useState("");
  const [showEditBrand, setShowEditBrand] = useState(false);
  return (
    <div className="mt-5 overflow-x-auto">
      {brands?.length ? (
        <table className="min-w-full overflow-x-auto px-4 rounded-lg bg-black-200 mr-4">
          <thead>
            <tr className="sm:text-xs text-[12px] 2xl:text-lg border-y text-">
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
                <td className="py-3 px-2 truncate">{index + 1}</td>
                <td className="py-3 px-2 truncate">{brand.name}</td>
                <td className="py-3 px-2 truncate">{brand.code}</td>
                <td className="flex justify-center items-center">
                  <CldImage
                    width="50"
                    height="50"
                    src={String(brand.image)}
                    sizes="10vw"
                    alt="Description of my image"
                  />
                </td>
                <td className="py-3 px-2 truncate">
                  {brand.createdAt?.slice(0, 10)}
                </td>
                <td className="py-3 px-2 truncate">
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
