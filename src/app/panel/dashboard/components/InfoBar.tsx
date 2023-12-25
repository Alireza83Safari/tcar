export async function InfoBar({ cars, colors, platforms, brands, users }: any) {
  const cartData = [
    {
      title: "تعداد رنگ ها",
      lengthData: cars?.length || 0,
    },
    {
      title: "تعداد خودرو ها",
      lengthData: colors?.length || 0,
    },
    {
      title: "تعداد کمپانی ها",
      lengthData: platforms?.length || 0,
    },
    {
      title: "تعداد پلتفرم ها",
      lengthData: brands?.length || 0,
    },
    {
      title: "تعداد کاربران",
      lengthData: users?.length || 0,
    },
  ];

  return (
    <div className="grid grid-cols-1 mt-10 col-span-1">
      {cartData?.map((car) => (
        <div className="flex justify-center bg-black-200 rounded-xl max-h-[8rem] md:mx-4 my-2 py-3">
          <div className="p-3 text-white font-semibold">
            <h2 className="lg:text-lg md:text-base text-xl">{car?.title}</h2>
            <p className="text-4xl text-orange font-semibold text-center mt-5">
              {car?.lengthData}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
