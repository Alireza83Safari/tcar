export async function UsersTable({ users }: any) {
  return (
    <div className="rounded-lg overflow-x-auto bg-white text-black-500">
      <h1 className="text-center py-2 font-semibold">
        لیست کاربران جدید
      </h1>
      <table className="min-w-full">
        <thead>
          <tr className="lg:text-base sm:text-sm text-xs 2xl:text-lg border-y xs:grid xs:grid-cols-5">
            <th className="min-w-[3rem] py-3">ردیف</th>
            <th className="min-w-[5rem] py-3">نام</th>
            <th className="min-w-[5rem] py-3">نام خانوادگی</th>
            <th className="min-w-[5rem] py-3">ایمیل</th>
            <th className="min-w-[5rem] py-3">عضویت</th>
          </tr>
        </thead>
        {users?.length ? (
          <tbody>
            {users.slice(0, 4).map((user: any, index: number) => (
              <tr
                className="lg:text-base sm:text-sm text-xs text-center xs:grid xs:grid-cols-5"
                key={index}
              >
                <td className="min-w-[3rem] py-3">{index + 1}</td>
                <td className="min-w-[5rem] py-3">{user.firstname}</td>
                <td className="min-w-[5rem] py-3">{user.lastname}</td>
                <td className="min-w-[5rem] py-3">{user.username}</td>
                <td className="min-w-[5rem] py-3">{user.createdAt?.slice(0, 10)}</td>
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
