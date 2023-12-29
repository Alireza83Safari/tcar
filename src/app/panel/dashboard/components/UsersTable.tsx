export async function UsersTable({ users }: any) {
  return (
    <div className="rounded-lg overflow-x-auto bg-white text-black-500">
      <p className="text-center py-3">لیست کاربران جدید</p>
      <table className="min-w-full">
        <thead>
          <tr className="sm:text-xs text-[12px] 2xl:text-lg border-y text">
            <th className="sm:w-[12%]">#</th>
            <th className="sm:w-[20%] py-4">نام</th>
            <th className="sm:w-[20%]">نام خانوادگی</th>
            <th className="sm:w-[28%]">ایمیل</th>
            <th className="sm:w-[20%]">عضویت</th>
          </tr>
        </thead>
        {users?.length ? (
          <tbody>
            {users.slice(0, 4).map((user: any, index: number) => (
              <tr
                className="sm:text-xs text-[10px] 2xl:text-sm sm:px-4 text-center my-4"
                key={index}
              >
                <td className="py-4">{index + 1}</td>
                <td className="py-4">{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.createdAt?.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td className="col-span-5 text-center py-4" colSpan={5}>
                کاربری برای نمایش وجود ندارد
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}
