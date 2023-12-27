import { CarType } from "@/types/car.type";

export async function InfoBar({ cars }: { cars: CarType[] }) {
  const newCarLength = cars?.filter(
    (car: CarType) => car.carStatus === 0
  ).length;
  const workCarLength = cars?.filter(
    (car: CarType) => car.carStatus === 1
  ).length;
  const petrolCarLenth = cars?.filter((car: CarType) => +car.fuel === 0).length;

  const datas = [
    { title: "تعداد خودرو نو", dataLength: newCarLength },
    { title: "تعداد خودرو کارکرده", dataLength: workCarLength },
    { title: "تعداد خودرو بنزینی", dataLength:petrolCarLenth },
    { title: "تعداد خودرو ها", dataLength: cars?.length  },
  ];
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 mt-12">
      {datas?.map((info) => (
        <div className="flex justify-center bg-black-200 rounded-xl max-h-[10rem] mx-4 py-2 lg:mb-0 mb-7" key={info?.title}>
          <div className="p-3 text-gray-200">
            <h2 className="text-lg text-white">{info?.title}</h2>
            <p className="text-4xl text-orange font-semibold text-center mt-5">
              {info?.dataLength}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
