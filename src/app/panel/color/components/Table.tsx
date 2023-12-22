"use client";

import { deleteColor } from "@/app/actions/color";
import { getColorType } from "@/types/color.type";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import EditColor from "./EditColor";

export async function Table({ colors }: { colors: getColorType[] }) {
  const [editId, setEditID] = useState("");
  const [showColors, setShowEditColor] = useState(false);
  return (
    <div className="mt-">
      <table className=" w-full">
        <thead>
          <tr className="sm:text-xs text-[12px] 2xl:text-lg border-y text-">
            <th className="w-[15%] py-4">#</th>
            <th className="w-[15%]">رنگ</th>
            <th className="w-[15%]">کد رنگ</th>
            <th className="w-[15%]">هکس کد</th>
            <th className="w-[15%]">عضویت</th>
            <th className="w-[15%]">#</th>
          </tr>
        </thead>
        <tbody>
          {colors?.map((color: getColorType, index: number) => (
            <tr
              className="sm:text-xs text-[10px] 2xl:text-sm sm:px-4 text-center"
              key={color?._id}
            >
              <td className="py-4">{index + 1}</td>
              <td>{color.name}</td>
              <td>{color.code}</td>
              <td>{color.hex}</td>
              <td>{color.createdAt?.slice(0, 10)}</td>
              <td className="flex items-center justify-center my-4">
                <FaTrashAlt
                  className="text-red mx-2"
                  onClick={() => deleteColor(color._id)}
                />
                <FaPenAlt
                  className="text-orange mx-2"
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
