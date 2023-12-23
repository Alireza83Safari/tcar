"use client";

import { createCarType } from "@/types/car.type";
import React, { useState } from "react";
import AddCarSection from "./AddCarSection";
import AddCarForm from "./AddCarForm";
import ImageUpload from "./UploadImage";

export const initialState = {
  title: "",
  carStatus: null,
  price: null,
  company: "",
  model: "",
  years: null,
  work: null,
  platform: null,
  fuel: "",
  gearbox: null,
  color: "",
  description: "",
  firstname: "",
  lastname: "",
  phone: null,
  image: null,
  userId: "",
};

const AddCar = () => {
  const [showImage, setShowImage] = useState(false);
  const [createCarInfos, setCreateCarInfos] =
    useState<createCarType>(initialState);
  const [carId, setCarId] = useState("");

  return (
    <main className="xl:container mx-auto md:my-20 my-10 px-4 col-span-2">
      <div className="grid grid-cols-3">
        {showImage ? (
          <ImageUpload id={carId} />
        ) : (
          <>
            <AddCarForm
              setCreateCarInfos={setCreateCarInfos}
              createCarInfos={createCarInfos}
              setCarId={setCarId}
              setShowImage={setShowImage}
            />
            <AddCarSection createCarInfos={createCarInfos} />
          </>
        )}
      </div>
    </main>
  );
};

export default AddCar;
