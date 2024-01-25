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
        className={` outline-none focus:border-boldPurple focus:border-2 ${
          !className
            ? `w-full py-2 border border-purple rounded-lg px-3`
            : className
        }`}
        onChange={onChange}
        value={value}
      >
        {defaultValue && <option value="">{String(defaultValue)}</option>}
        {options?.map((item: any) => (
          <option
            key={item?._id || item?.value}
            value={item?._id || item?.value}
          >
            {item?.name || item?.code}
          </option>
        ))}
      </select>
      <p className="text-red">{error}</p>
    </>
  );
};

export default Select;
