import React from "react";
import Skeleton from "./Skeleton";

const FilterSkeleton = () => {
  return (
    <div className="flex justify-between w-full my-4">
      <Skeleton width="90vw" height={40} />
    </div>
  );
};

export default FilterSkeleton;
