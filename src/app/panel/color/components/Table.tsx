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
    <div className="mt-5 overflow-x-auto min-h-screen">
      <table className="min-w-full rounded-lg bg-white text-black-500 mr-4">
        <thead>
          <tr className="sm:text-xs text-[12px] 2xl:text-lg border-b">
            <th className="py-3 px-2">#</th>
            <th className="py-3 px-2">رنگ</th>
            <th className="py-3 px-2">کد رنگ</th>
            <th className="py-3 px-2">هکس کد</th>
            <th className="py-3 px-2">عضویت</th>
            <th className="py-3 px-2">#</th>
          </tr>
        </thead>
        <tbody>
          {colors?.map((color: getColorType, index: number) => (
            <tr
              className="sm:text-xs text-[10px] 2xl:text-sm sm:px-4 text-center"
              key={color?._id}
            >
              <td className="py-3 px-2 truncate">{index + 1}</td>
              <td className="py-3 px-2 truncate">{color.name}</td>
              <td className="py-3 px-2 truncate">{color.code}</td>
              <td className="py-3 px-2 truncate">{color.hex}</td>
              <td className="py-3 px-2 truncate">
                {color.createdAt?.slice(0, 10)}
              </td>
              <td className="py-3 px-2 flex items-center justify-center my-2">
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
