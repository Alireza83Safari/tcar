"use client";
import { getPlatformType } from "@/types/platform";
import Image from "next/image";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import EditPlatform from "./EditPlatform";
import { deletePlatform } from "@/app/actions/platform";

export async function Table({ platforms }: { platforms: getPlatformType[] }) {
  const [editId, setEditID] = useState("");
  const [showModal, setShowEditModal] = useState(false);

  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="sm:text-xs text-[12px] 2xl:text-lg border-y text-">
            <th className="w-[15%] py-4">#</th>
            <th className="w-[15%]">پلتفرم</th>
            <th className="w-[15%]">کد پلتفرم</th>
            <th className="w-[20%]">عکس</th>
            <th className="w-[15%]">عضویت</th>
            <th className="w-[15%]">#</th>
          </tr>
        </thead>
        <tbody>
          {platforms?.map((platform: any, index: number) => (
            <tr className="sm:text-xs text-[10px] 2xl:text-sm sm:px-4 text-center my-4">
              <td className="py-4">{index + 1}</td>
              <td>{platform.name}</td>
              <td>{platform.code}</td>
              <td className="flex justify-center">
                {platform.image !== null && (
                  <Image
                    src={platform.image}
                    alt="platform"
                    width={70}
                    height={70}
                  />
                )}
              </td>
              <td>{platform.createdAt?.slice(0, 10)}</td>
              <td className="flex items-center justify-center mt-4">
                <FaTrashAlt
                  className="text-red mx-2"
                  onClick={() => deletePlatform(platform?._id)}
                />

                <FaPenAlt
                  className="text-orange mx-2"
                  onClick={() => {
                    setEditID(platform._id);
                    setShowEditModal(true);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditPlatform
        showModal={showModal}
        setShowEditModal={setShowEditModal}
        editId={editId}
      />
    </>
  );
}
