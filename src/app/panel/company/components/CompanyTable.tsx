"use client";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import EditBrand from "./EditCompany";
import { CldImage } from "next-cloudinary";
import "../../components/Style.css";
import { deleteCompany } from "@/actions/company";
import { Company } from "@/types/company";

type CompanyTableProps = {
  companies: Company[];
};
const CompanyTable: React.FC<CompanyTableProps> = ({ companies }) => {
  const [editId, setEditID] = useState("");
  const [showEditBrand, setShowEditBrand] = useState(false);
  return (
    <div className="mt-5 overflow-x-auto min-h-screen">
      {companies?.length ? (
        <table className="min-w-full rounded-lg bg-white text-black-500">
          <thead>
            <tr className="lg:text-base sm:text-sm text-xs border-b [&>th]:py-3 [&>th]:px-3 [&>th]:truncate">
              <th>#</th>
              <th>برند</th>
              <th>کد برند</th>
              <th>عکس برند</th>
              <th>عضویت</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {companies?.map((brand, index) => (
              <tr className="lg:text-base sm:text-sm text-xs text-center [&>td]:py-3 [&>td]:px-3 [&>td]:truncate">
                <td>{index + 1}</td>
                <td>{brand.name}</td>
                <td>{brand.code}</td>
                <td className="flex justify-center items-center">
                  <CldImage
                    width="50"
                    height="50"
                    src={String(brand.image)}
                    alt="Description of my image"
                  />
                </td>
                <td>{brand.createdAt?.slice(0, 10)}</td>
                <td>
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
};

export default CompanyTable;
