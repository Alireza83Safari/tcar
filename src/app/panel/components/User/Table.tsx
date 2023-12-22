"use client";
import { deleteuser } from "@/app/actions/user";
import { getUserType } from "@/types/user.type";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";

export async function Table({ users }: any) {
  return (
    <div className="">
      <table className=" w-full">
        <thead>
          <tr className="sm:text-xs text-[12px] 2xl:text-lg border-y text-">
            <th className="w-[5%] py-4">#</th>
            <th className="w-[20%]">ایمیل</th>
            <th className="w-[15%]">نام</th>
            <th className="w-[15%]">نام خانوادگی</th>
            <th className="w-[15%]">نقش</th>
            <th className="w-[15%]">عضویت</th>
            <th className="w-[15%]">#</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: getUserType, index: number) => (
            <tr className="sm:text-xs text-[10px] 2xl:text-sm sm:px-4 text-center">
              <td className="py-4">{index + 1}</td>
              <td>{user.email}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.role}</td>
              <td>{user.createdAt?.slice(0, 10)}</td>
              <td className="flex items-center justify-center my-4">
                <FaTrashAlt
                  className="text-red mx-2"
                  onClick={() => deleteuser(user._id)}
                />
                <FaPenAlt
                  className="text-orange mx-2"
                  /*     onClick={() => {
                    setEditID(color._id);
                    setShowEditColor(true);
                  }} */
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
