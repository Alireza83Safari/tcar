"use client";

import { deleteColor } from "@/actions/color";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import EditColor from "./EditColor";
import { Color } from "@/types/color";

type ColorTableProps = {
  colors: Color[];
};

const ColorTable: React.FC<ColorTableProps> = ({ colors }) => {
  const [editId, setEditID] = useState("");
  const [showColors, setShowEditColor] = useState(false);
  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full rounded-lg bg-white text-black-500">
        <thead>
          <tr className="lg:text-base sm:text-sm text-xs 2xl:text-lg border-b [&>th]:py-3 [&>th]:px-3 [&>th]:truncate">
            <th>ردیف</th>
            <th>رنگ</th>
            <th>کد رنگ</th>
            <th>هکس کد</th>
            <th>عضویت</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {colors?.map((color, index) => (
            <tr
              className="lg:text-base sm:text-sm text-xs 2xl:text-sm text-center [&>td]:py-3 [&>td]:px-3 [&>td]:truncate"
              key={color?._id}
            >
              <td>{index + 1}</td>
              <td>{color.name}</td>
              <td>{color.code}</td>
              <td>{color.hex}</td>
              <td>{color.createdAt?.slice(0, 10)}</td>
              <td className="flex items-center justify-center">
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
};

export default ColorTable;
