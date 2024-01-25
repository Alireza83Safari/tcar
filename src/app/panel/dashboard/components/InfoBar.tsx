interface InfoBarProps {
  cars: number;
  colors: number;
  platforms: number;
  companies: number;
  users: number;
}

export async function InfoBar({
  cars,
  colors,
  platforms,
  companies,
  users,
}: InfoBarProps) {
  const cartData = [
    {
      title: "تعداد رنگ ها",
      lengthData: colors || 0,
    },
    {
      title: "تعداد خودرو ها",
      lengthData: cars || 0,
    },
    {
      title: "تعداد کمپانی ها",
      lengthData: platforms || 0,
    },
    {
      title: "تعداد پلتفرم ها",
      lengthData: companies || 0,
    },
    {
      title: "تعداد کاربران",
      lengthData: users || 0,
    },
  ];

  return (
    <div className="grid grid-cols-1 mt-10 col-span-1">
      {cartData?.map((car) => (
        <div className="flex justify-center bg-white rounded-xl max-h-[8rem] md:mx-4 my-2 py-3">
          <div className="p-3 text-black-500 font-semibold">
            <h2 className="lg:text-lg md:text-base text-xl">{car?.title}</h2>
            <p className="text-4xl text-purple font-semibold text-center mt-5">
              {car?.lengthData}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
