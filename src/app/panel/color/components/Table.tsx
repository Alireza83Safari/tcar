"use client";

import { deleteColor } from "@/actions/color";
import { getColorType } from "@/types/color.type";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import EditColor from "./EditColor";

export async function Table({ colors }: { colors: getColorType[] }) {
  const [editId, setEditID] = useState("");
  const [showColors, setShowEditColor] = useState(false);
  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full rounded-lg bg-white text-black-500">
        <thead>
          <tr className="lg:text-base sm:text-sm text-xs 2xl:text-lg border-b">
            <th className="py-3 min-w-[2rem]">ردیف</th>
            <th className="py-3 min-w-[4rem]">رنگ</th>
            <th className="py-3 min-w-[4rem]">کد رنگ</th>
            <th className="py-3 min-w-[4rem]">هکس کد</th>
            <th className="py-3 min-w-[4rem]">عضویت</th>
            <th className="py-3 min-w-[4rem]">#</th>
          </tr>
        </thead>
        <tbody>
          {colors?.map((color: getColorType, index: number) => (
            <tr
              className="lg:text-base sm:text-sm text-xs 2xl:text-sm sm:px-4 text-center"
              key={color?._id}
            >
              <td className="py-3 min-w-[2rem] truncate">{index + 1}</td>
              <td className="py-3 min-w-[4rem] truncate">{color.name}</td>
              <td className="py-3 min-w-[4rem] truncate">{color.code}</td>
              <td className="py-3 min-w-[4rem] truncate">{color.hex}</td>
              <td className="py-3 min-w-[4rem] truncate">
                {color.createdAt?.slice(0, 10)}
              </td>
              <td className="py-3 min-w-[4rem] flex items-center justify-center my-2">
                <FaTrashAlt
                  className="text-red mx-2"
                  onClick={() => deleteColor(color._id)}
                />
                <FaPenAlt
                  className="text-purple mx-2"
                  onClick={() => {
                    setEditID(color._id);
                    setShowEditColor(true);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditColor
        showColors={showColors}
        setShowEditColor={setShowEditColor}
        editId={editId}
      />
    </div>
  );
}
