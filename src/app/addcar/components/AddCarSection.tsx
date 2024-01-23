import React from "react";
import { FaCheck } from "react-icons/fa6";
import { createCarType } from "@/types/car.type";

const ChecklistItem = ({
  isComplete,
  text,
}: {
  isComplete: boolean;
  text: string;
}) => {
  return (
    <div className="flex items-center my-2">
      <FaCheck className={`ml-2 ${isComplete ? "text-green" : ""}`} />
      <p className="">{text}</p>
    </div>
  );
};
const MemoizedChecklistItem = React.memo(ChecklistItem);

type AddCarSectionProps = {
  createCarInfos: createCarType;
};

const AddCarSection: React.FC<AddCarSectionProps> = ({ createCarInfos }) => {
  const {
    title,
    carStatus,
    price,
    company,
    model,
    years,
    work,
    fuel,
    color,
    description,
    platform,
    gearbox,
    firstname,
    lastname,
    phone,
  } = createCarInfos;

  const isBasicInfoComplete = title.length > 0 && carStatus !== null;
  const isPriceComplete = !!price;
  const isCarSpecsComplete =
    company.length > 0 && model.length > 0 && years !== null && work !== null;
  const isCarInfoComplete =
    fuel.length > 0 &&
    color.length > 0 &&
    description.length > 0 &&
    platform !== null &&
    gearbox !== null;
  const isContactComplete =
    firstname.length > 0 && lastname.length > 0 && phone !== null;

  const completionPercentage =
    ((isBasicInfoComplete ? 1 : 0) +
      (isPriceComplete ? 1 : 0) +
      (isCarSpecsComplete ? 1 : 0) +
      (isCarInfoComplete ? 1 : 0) +
      (isContactComplete ? 1 : 0)) *
    20;

  const totalPercent = React.useMemo(() => {
    switch (completionPercentage) {
      case 20:
        return "20";
      case 40:
        return "40";
      case 60:
        return "60";
      case 80:
        return "80";
      case 100:
        return "100";

      default:
        break;
    }
  }, [completionPercentage]);

  return (
    <div className="md:col-span-1 col-span-3 md:px-10 px-4 md:sticky top-24 md:block sm:flex justify-between md:mb-0 mb-10 md:order-2 order-1">
      <div>
        <p className="mb-3">
          {totalPercent ? totalPercent : 0}% محتوا تکمیل شده است.{}
        </p>
        <div className="w-64 h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full bg-green"
            style={{ width: `${completionPercentage}%` }} // Set the width dynamically
          ></div>
        </div>
      </div>

      <div className="md:mt-6 sm:mt-0 mt-6">
        <MemoizedChecklistItem
          isComplete={isBasicInfoComplete}
          text="اطلاعات پایه"
        />
        <MemoizedChecklistItem isComplete={isPriceComplete} text="قیمت" />
        <MemoizedChecklistItem
          isComplete={isCarSpecsComplete}
          text="مشخصات خودرو"
        />
        <MemoizedChecklistItem
          isComplete={isCarInfoComplete}
          text="اطلاعات خودرو"
        />
        <MemoizedChecklistItem
          isComplete={isContactComplete}
          text="تماس با ما"
        />
      </div>
    </div>
  );
};

export default AddCarSection;
