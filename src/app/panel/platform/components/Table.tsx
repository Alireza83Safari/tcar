"use client";
import { getPlatformType } from "@/types/platform";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import EditPlatform from "./EditPlatform";
import { deletePlatform } from "@/actions/platform";
import Image from "next/image";

export async function Table({ platforms }: { platforms: getPlatformType[] }) {
  const [editId, setEditID] = useState("");
  const [showModal, setShowEditModal] = useState(false);

  return (
    <div className="overflow-x-auto min-h-screen mt-5">
      <table className="min-w-full rounded-lg bg-white text-black-500">
        {platforms?.length ? (
          <>
            <thead>
              <tr className="lg:text-base sm:text-sm text-xs border-b">
                <th className="py-3 min-w-[3rem]">#</th>
                <th className="py-3 min-w-[5rem]">پلتفرم</th>
                <th className="py-3 min-w-[5rem]">کد پلتفرم</th>
                <th className="py-3 min-w-[5rem]">عکس</th>
                <th className="py-3 min-w-[5rem]">عضویت</th>
                <th className="py-3 min-w-[5rem]">#</th>
              </tr>
            </thead>
            <tbody>
              {platforms?.map((platform: any, index: number) => (
                <tr className="lg:text-base sm:text-sm text-xs text-center">
                  <td className="py-3 min-w-[3rem]">{index + 1}</td>
                  <td className="py-3 min-w-[5rem]">{platform.name}</td>
                  <td className="py-3 min-w-[5rem]">{platform.code}</td>
                  <td className="py-3 min-w-[5rem] flex justify-center">
                    <Image
                      width="60"
                      height="60"
                      src={String(platform.image)}
                      alt={platform?.name}
                    />
                  </td>
                  <td className="py-3 min-w-[5rem] truncate">
                    {platform.createdAt?.slice(0, 10)}
                  </td>
                  <td className="flex items-center justify-center">
                    <FaTrashAlt
                      className="text-red mx-2"
                      onClick={() => deletePlatform(platform?._id)}
                    />

                    <FaPenAlt
                      className="text-purple mx-2"
                      onClick={() => {
                        setEditID(platform._id);
                        setShowEditModal(true);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        ) : (
          <h2 className=" min-w-full h-[20rem] flex justify-center items-center">
            پلتفرمی وجود ندارد
          </h2>
        )}
      </table>

      <EditPlatform
        showModal={showModal}
        setShowEditModal={setShowEditModal}
        editId={editId}
      />
    </div>
  );
}
