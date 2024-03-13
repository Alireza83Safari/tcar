"use client";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import "../../components/Style.css";
import EditBanner from "./EditBanner";
import { deleteBanner } from "@/actions/banner";
import Image from "next/image";
import { Banner } from "@/types/banner";

export async function Table({ banners }: { banners: Banner[] }) {
  const [editId, setEditID] = useState("");
  const [showEditBanner, setShowEditBanner] = useState(false);
  return (
    <div className="overflow-x-auto mt-5">
      {!!banners?.length ? (
        <table className="min-w-full rounded-lg bg-white text-black-500">
          <thead>
            <tr className="lg:text-base sm:text-sm text-xs 2xl:text-lg border-b">
              <th className="py-3 px-2">#</th>
              <th className="py-3 px-2">عنوان</th>
              <th className="py-3 px-2">توضیحات</th>
              <th className="py-3 px-2">عکس</th>
              <th className="py-3 px-2">عضویت</th>
              <th className="py-3 px-2">#</th>
            </tr>
          </thead>
          <tbody>
            {banners?.map((banner, index) => (
              <tr
                className="lg:text-base sm:text-sm text-xs 2xl:text-sm sm:px-4 text-center"
                key={banner?._id}
              >
                <td className="py-3 px-2">{index + 1}</td>
                <td className="py-3 px-2 truncate">
                  {banner.title?.slice(0, 40)}...
                </td>
                <td className="py-3 px-2 truncate">
                  {banner.description?.slice(0, 50)}...
                </td>
                <td className="flex justify-center items-center py-3 px-2">
                  <Image
                    width="50"
                    height="50"
                    src={String(banner.image)}
                    alt={banner?.title}
                  />
                </td>
                <td className="py-3 px-2">
                  {/* {banner.createdAt?.slice(0, 10)} */}{" "}
                </td>
                <td className="py-3 px-2">
                  <div className="flex items-center justify-center">
                    <FaTrashAlt
                      className="text-red mx-2"
                      onClick={() => deleteBanner(banner._id)}
                    />
                    <FaPenAlt
                      className="text-purple mx-2"
                      onClick={() => {
                        setEditID(banner._id);
                        setShowEditBanner(true);
                      }}
                    />
                  </div>
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
      <EditBanner
        showEditBanner={showEditBanner}
        setShowEditBanner={setShowEditBanner}
        editId={editId}
      />
    </div>
  );
}
