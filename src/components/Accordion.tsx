"use client";

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";

export type AccordionPropsType = {
  title: string;
  titleValue?: string;
  children?: React.ReactNode;
};

const Accordion = ({ title, titleValue, children }: AccordionPropsType) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full border border-borderColor py-4 px-2 rounded-lg">
      <div
        className="accordion-title"
        onClick={() => setIsActive((prevIsActive) => !prevIsActive)}
      >
        <div className="grid grid-cols-12">
          <div className="grid grid-cols-2 col-span-11">
            <div>{title}</div>
            <div>{titleValue?.length ? titleValue : ""}</div>
          </div>
          <div className="col-span-1">
            {isActive ? <FaAngleDown /> : <FaAngleLeft />}
          </div>
        </div>
      </div>
      {isActive && <div className="mt-4 text-gray-200">{children}</div>}
    </div>
  );
};

export default Accordion;
