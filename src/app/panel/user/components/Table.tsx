"use client";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import EditUser from "./EditUser";
import { deleteuser } from "@/app/actions/user";

export async function Table({ users }: { users: any }) {
  const [editId, setEditID] = useState("");
  const [showModal, setShowEditModal] = useState(false);

  return (
    <div className=" overflow-x-auto mt-24">
      <table className="min-w-full overflow-x-auto rounded-lg mx-4">
        <thead>
          <tr className="sm:text-xs text-[12px] 2xl:text-lg border-y">
            <th className="py-3 px-2">#</th>
            <th className="py-3 px-2">نام</th>
            <th className="py-3 px-2">نام خانوادگی</th>
            <th className="py-3 px-2">ایمیل</th>
            <th className="py-3 px-2">عضویت</th>
            <th className="py-3 px-2">#</th>
          </tr>
        </thead>
        {users?.length ? (
          <tbody>
            {users?.map((user: any, index: number) => (
              <tr
                className="sm:text-xs text-[10px] 2xl:text-sm sm:px-4 text-center"
                key={user?._id}
              >
                <td className="py-3 px-2 truncate">{index + 1}</td>
                <td className="py-3 px-2 truncate">{user.firstname}</td>
                <td className="py-3 px-2 truncate">{user.lastname}</td>
                <td className="py-3 px-2 truncate">{user.email}</td>
                <td className="py-3 px-2 truncate">
                  {user.createdAt?.slice(0, 10)}
                </td>
                <td className="py-3 px-2 flex items-center justify-center mt-4">
                  <FaTrashAlt
                    className="text-red mx-2"
                    onClick={() => deleteuser(user?._id)}
                  />

                  <FaPenAlt
                    className="text-orange mx-2"
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
