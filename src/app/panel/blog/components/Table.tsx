"use client";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import { CldImage } from "next-cloudinary";
import "../../components/Style.css";
import { deleteCompany } from "@/actions/company";
import { blogType } from "@/types/blog.type";

export async function Table({ blogs }: { blogs: blogType[] }) {
/*   const [editId, setEditID] = useState("");
  const [showEditBrand, setShowEditBrand] = useState(false); */
  return (
    <div className="mt-5 overflow-x-auto min-h-screen text-black-500">
      {/*      {blogs?.length ? (
        <table className="min-w-full px-4 rounded-lg bg-black-200 mr-4">
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
            {blogs?.map((brand: any, index: number) => (
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
      )} */}
      <h1 className="text-2xl flex justify-center items-center">
        دسترسی ندارید!
      </h1>
      {/* <EditBrand
        showEditBrand={showEditBrand}
        setShowEditBrand={setShowEditBrand}
        editId={editId}
      /> */}
    </div>
  );
}
