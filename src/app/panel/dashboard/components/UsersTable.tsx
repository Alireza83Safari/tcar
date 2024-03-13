export async function UsersTable({ users }: any) {
  return (
    <div className="rounded-lg overflow-x-auto bg-white text-black-500">
      <h1 className="text-center py-2 font-semibold">لیست کاربران جدید</h1>
      <table className="min-w-full">
        <thead>
          <tr className="lg:text-base sm:text-sm text-xs 2xl:text-lg border-y md:grid md:grid-cols-5 [&>th]:py-3 [&>th]:px-3 [&>th]:truncate">
            <th>ردیف</th>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>ایمیل</th>
            <th>عضویت</th>
          </tr>
        </thead>
        {users?.length ? (
          <tbody>
            {users.slice(0, 4).map((user: any, index: number) => (
              <tr
                className="lg:text-base sm:text-sm text-xs text-center md:grid md:grid-cols-5 [&>td]:py-3 [&>td]:px-3 [&>td]:truncate"
                key={index}
              >
                <td>{index + 1}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
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
