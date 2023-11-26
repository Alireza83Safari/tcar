import { inputProps } from "@/types/form.type";
import React from "react";

const Input = ({
  label,
  name,
  error,
  className,
  placeholder,
  type,
  onChange,
  value,
}: inputProps) => {
  return (
    <>
      <label htmlFor="" className="bolck text-sm mb-2 px-1">
        {label}
      </label>
      <input
        type={type ? type : "text"}
        name={name}
        className={`w-full py-2 bg-black-100 border border-borderColor rounded-lg px-3 ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <p className="text-red">{error}</p>
    </>
  );
};

export default Input;
