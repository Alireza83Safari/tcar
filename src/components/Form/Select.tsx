import { selectProps } from "@/types/form.type";
import React from "react";

const Select = ({
  label,
  name,
  error,
  className,
  onChange,
  options = [],
  defaultValue,
  value,
}: selectProps) => {
  return (
    <>
      {label && <label className="block text-sm mb-2 px-1">{label}</label>}
      <select
        name={name}
        id={name}
        className={`${
          !className
            ? `w-full py-2 bg-black-100 border border-borderColor rounded-lg px-3`
            : className
        }`}
        onChange={onChange}
        value={value}
      >
        <option value={defaultValue?.value || ""}>
          {defaultValue?.name || ""}
        </option>
        {options?.map((item: any) => (
          <option
            key={item?._id || item?.value}
            value={item?._id || item?.value}
          >
            {item?.name}
          </option>
        ))}
      </select>
      <p className="text-red">{error}</p>
    </>
  );
};

export default Select;
