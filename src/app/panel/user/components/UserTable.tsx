"use client";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import EditUser from "./EditUser";
import { deleteuser } from "@/actions/user";
import { User } from "@/types/user";

type UserTableProps = {
  users: User[];
};

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [editId, setEditID] = useState("");
  const [showModal, setShowEditModal] = useState(false);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full overflow-x-auto rounded-lg bg-white text-black-500">
        <thead>
          <tr className="lg:text-base sm:text-sm text-xs border-b [&>th]:py-3 [&>th]:px-3 [&>th]:truncate">
            <th>#</th>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>نام کاربری</th>
            <th>عضویت</th>
            <th>#</th>
          </tr>
        </thead>
        {users?.length ? (
          <tbody>
            {users?.map((user: any, index: number) => (
              <tr
                className="lg:text-base sm:text-sm text-xs text-center [&>td]:py-3 [&>td]:px-3 [&>td]:truncate"
                key={user?._id}
              >
                <td>{index + 1}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
                <td>{user.createdAt?.slice(0, 10)}</td>
                <td className="flex items-center justify-center">
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
};

export default UserTable;
