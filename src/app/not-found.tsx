import Button from "@/components/Form/Button";
import React from "react";

const Notfound = () => {
  return (
    <div className="m-auto mt-32">
      <h1 className="text-9xl font-black text-center">404</h1>
      <h3 className="text-3xl text-center my-10">
        متأسفیم، محتوایی که به دنبال آن هستید وجود ندارد.
      </h3>
      <div className=" flex justify-center">
        <Button href="/home">برگشت به خانه</Button>
      </div>
    </div>
  );
};

export default Notfound;
