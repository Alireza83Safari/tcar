"use client";
import { getPlatformType } from "@/types/platform";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import EditPlatform from "./EditPlatform";
import { deletePlatform } from "@/actions/platform";
import { CldImage } from "next-cloudinary";

export async function Table({ platforms }: { platforms: getPlatformType[] }) {
  const [editId, setEditID] = useState("");
  const [showModal, setShowEditModal] = useState(false);

  return (
    <div className="mt-5 overflow-x-auto min-h-screen">
      <table className="min-w-full px-4 rounded-lg bg-white text-black-500">
        {platforms?.length ? (
          <>
            <thead>
              <tr className="md:text-sm text-xs text-center border-b">
                <th className="py-3 px-2">#</th>
                <th className="py-3 px-2">پلتفرم</th>
                <th className="py-3 px-2">کد پلتفرم</th>
                <th className="py-3 px-2">عکس</th>
                <th className="py-3 px-2">عضویت</th>
                <th className="py-3 px-2">#</th>
              </tr>
            </thead>
            <tbody>
              {platforms?.map((platform: any, index: number) => (
                <tr className="sm:text-xs text-[10px] 2xl:text-sm sm:px-4 text-center my-3">
                  <td className="py-3 px-2">{index + 1}</td>
                  <td className="py-3 px-2">{platform.name}</td>
                  <td className="py-3 px-2">{platform.code}</td>
                  <td className="py-3 px-2 flex justify-center">
                    <CldImage
                      width="60"
                      height="60"
                      src={String(platform.image)}
                      alt="Description of my image"
                    />
                  </td>
                  <td className="py-3 px-2 truncate">
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
