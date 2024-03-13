"use client";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import EditPlatform from "./EditPlatform";
import { deletePlatform } from "@/actions/platform";
import Image from "next/image";
import { Platform } from "@/types/platform";

type PlatformTableProps = { platforms: Platform[] };

const PlatformTable: React.FC<PlatformTableProps> = ({ platforms }) => {
  const [editId, setEditID] = useState("");
  const [showModal, setShowEditModal] = useState(false);

  return (
    <div className="overflow-x-auto min-h-screen mt-5">
      <table className="min-w-full rounded-lg bg-white text-black-500">
        {platforms?.length ? (
          <>
            <thead>
              <tr className="lg:text-base sm:text-sm text-xs border-b [&>th]:py-3 [&>th]:px-3 [&>th]:truncate">
                <th>#</th>
                <th>پلتفرم</th>
                <th>کد پلتفرم</th>
                <th>عکس</th>
                <th>عضویت</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {platforms?.map((platform: any, index: number) => (
                <tr className="lg:text-base sm:text-sm text-xs text-center [&>td]:py-3 [&>td]:px-3 [&>td]:truncate">
                  <td>{index + 1}</td>
                  <td>{platform.name}</td>
                  <td>{platform.code}</td>
                  <td className="flex justify-center">
                    <Image
                      width="60"
                      height="60"
                      src={String(platform.image)}
                      alt={platform?.name}
                    />
                  </td>
                  <td>{platform.createdAt?.slice(0, 10)}</td>
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
};

export default PlatformTable;
