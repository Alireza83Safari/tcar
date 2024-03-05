"use client";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import EditUser from "./EditUser";
import { deleteuser } from "@/actions/user";

export async function Table({ users }: { users: any }) {
  const [editId, setEditID] = useState("");
  const [showModal, setShowEditModal] = useState(false);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full overflow-x-auto rounded-lg bg-white text-black-500">
        <thead>
          <tr className="lg:text-base sm:text-sm text-xs border-b">
            <th className="py-3 min-w-[3rem]">#</th>
            <th className="py-3 min-w-[5rem]">نام</th>
            <th className="py-3 min-w-[5rem]">نام خانوادگی</th>
            <th className="py-3 min-w-[5rem]">نام کاربری</th>
            <th className="py-3 min-w-[5rem]">عضویت</th>
            <th className="py-3 min-w-[5rem]">#</th>
          </tr>
        </thead>
        {users?.length ? (
          <tbody>
            {users?.map((user: any, index: number) => (
              <tr
                className="lg:text-base sm:text-sm text-xs text-center"
                key={user?._id}
              >
                <td className="py-3 min-w-[3rem] truncate">{index + 1}</td>
                <td className="py-3 min-w-[5rem] truncate">{user.firstname}</td>
                <td className="py-3 min-w-[5rem] truncate">{user.lastname}</td>
                <td className="py-3 min-w-[5rem] truncate">{user.username}</td>
                <td className="py-3 min-w-[5rem] truncate">
                  {user.createdAt?.slice(0, 10)}
                </td>
                <td className="py-3 min-w-[5rem] flex items-center justify-center mt-4">
                  <FaTrashAlt
                    className="text-red mx-2"
                    onClick={() => deleteuser(user?._id)}
                  />

                  <FaPenAlt
                    className="text-purple mx-2"
                    onClick={() => {
                      setEditID(user._id);
                      setShowEditModal(true);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <h3 className=" min-w-[100%] flex justify-center">
            کاربری برای نمابش وجود ندارد
          </h3>
        )}
      </table>

      <EditUser
        showModal={showModal}
        setShowEditModal={setShowEditModal}
        editId={editId}
      />
    </div>
  );
}
