export async function InfoBar({ cars }: any) {
  return (
    <div className="grid grid-cols-4 mt-12">
      <div className="flex justify-center bg-black-200 rounded-xl max-h-[10rem] mx-4">
        <div className="p-3 text-gray-200">
          <h2 className="text-lg text-white">تعداد خودرو ها</h2>
          <p className="text-sm my-4">(آگهی های فعال)</p>
          <p className="text-4xl text-orange font-semibold text-center">
            {cars?.length}
          </p>
        </div>
      </div>

      <div className="flex justify-center bg-black-200 rounded-xl max-h-[10rem] mx-4">
        <div className="p-3 text-gray-200">
          <h2 className="text-lg text-white">تعداد خودرو ها</h2>
          <p className="text-sm my-4">(آگهی های فعال)</p>
          <p className="text-4xl text-orange font-semibold">3453</p>
        </div>
      </div>

      <div className="flex justify-center bg-black-200 rounded-xl max-h-[10rem] mx-4">
        <div className="p-3 text-gray-200">
          <h2 className="text-lg text-white">تعداد خودرو ها</h2>
          <p className="text-sm my-4">(آگهی های فعال)</p>
          <p className="text-4xl text-orange font-semibold">3453</p>
        </div>
      </div>

      <div className="flex justify-center bg-black-200 rounded-xl max-h-[10rem] mx-4">
        <div className="p-3 text-gray-200">
          <h2 className="text-lg text-white">تعداد خودرو ها</h2>
          <p className="text-sm my-4">(آگهی های فعال)</p>
          <p className="text-4xl text-orange font-semibold">3453</p>
        </div>
      </div>
    </div>
  );
}
