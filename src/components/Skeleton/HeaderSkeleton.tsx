import React from "react";
import Skeleton from "./Skeleton";

const HeaderSkeleton = () => {
  return (
    <div className="flex justify-between w-full my-4">
      <Skeleton width={400} height={40} />
      <Skeleton width={200} height={40} />
      <Skeleton width={330} height={40} />
    </div>
  );
};

export default HeaderSkeleton;
