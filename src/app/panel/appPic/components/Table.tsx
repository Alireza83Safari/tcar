"use client";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import { CldImage } from "next-cloudinary";
import "../../components/Style.css";
import EditAppPic from "./EditAppPic";
import { appPicType } from "@/types/appPic.type";
import { deleteAppPic } from "@/actions/appPic";

export async function Table({ appPics }: { appPics: appPicType[] }) {
  const [editId, setEditID] = useState("");
  const [showEditAppPic, setShowEditAppPic] = useState(false);
  return (
    <div className="mt-5 overflow-x-auto min-h-screen">
      {appPics?.length ? (
        <table className="min-w-full px-4 rounded-lg bg-white text-black-500 mr-4">
          <thead>
            <tr className="sm:text-xs text-[12px] 2xl:text-lg border-b">
              <th className="py-3 px-2">#</th>
              <th className="py-3 px-2">عنوان</th>
              <th className="py-3 px-2">توضیحات</th>
              <th className="py-3 px-2">عکس</th>
              <th className="py-3 px-2">عضویت</th>
              <th className="py-3 px-2">#</th>
            </tr>
          </thead>
          <tbody>
            {appPics?.map((appPic: appPicType, index: number) => (
              <tr
                className="sm:text-xs text-[10px] 2xl:text-sm sm:px-4 text-center"
                key={appPic?._id}
              >
                <td className="py-3 px-2">{index + 1}</td>
                <td className="py-3 px-2 truncate">
                  {appPic.title?.slice(0, 40)}...
                </td>
                <td className="py-3 px-2 truncate">
                  {appPic.description?.slice(0, 50)}...
                </td>
                <td className="flex justify-center items-center py-3 px-2">
                  <CldImage
                    width="50"
                    height="50"
                    src={String(appPic.image)}
                    alt="Description of my image"
                  />
                </td>
                <td className="py-3 px-2">{appPic.createdAt?.slice(0, 10)}</td>
                <td className="py-3 px-2">
                  <td className="flex items-center justify-center">
                    <FaTrashAlt
                      className="text-red mx-2"
                      onClick={() => deleteAppPic(appPic._id)}
                    />
                    <FaPenAlt
                      className="text-purple mx-2"
                      onClick={() => {
                        setEditID(appPic._id);
                        setShowEditAppPic(true);
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
          بنری برای نمایش وجود ندارد
        </h2>
      )}
      <EditAppPic
        showEditAppPic={showEditAppPic}
        setShowEditAppPic={setShowEditAppPic}
        editId={editId}
      />
    </div>
  );
}
