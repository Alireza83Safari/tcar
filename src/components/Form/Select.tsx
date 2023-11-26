import { selectProps } from "@/types/form.type";
import React from "react";

const Input = ({
  label,
  name,
  error,
  className,
  onChange,
  options,
  value,
}: selectProps) => {
  return (
    <>
      <label className="bolck text-sm mb-2 px-1">{label}</label>
      <select
        name={name}
        id={name}
        className={`w-full py-2 bg-black-100 border border-borderColor rounded-lg px-3 ${className}`}
        onChange={onChange}
        value={value}
      >
        <option value=""></option>
        {options?.map((item: any) => (
          <option value={item.value}>{item?.name}</option>
        ))}
      </select>
      <p className="text-red">{error}</p>
    </>
  );
};

export default Input;
