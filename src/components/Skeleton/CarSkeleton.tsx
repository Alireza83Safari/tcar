import React from "react";
import Skeleton from "./Skeleton";

const CarSkeleton = () => {
  return (
    <div className="my-3 flex justify-center">
      <Skeleton width={300} height={170} />
    </div>
  );
};

export default CarSkeleton;
