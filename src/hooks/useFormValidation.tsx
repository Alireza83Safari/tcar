import axiosInstance from "@/services/axios/axios";
import React, { useState } from "react";

export const useFormValidation = async ({ schema, data }: any) => {
  const [validationResponse, setValidationResponse] = useState<number>();
  const [errors, setErrors] = useState<any>();
  console.log("run!!");

  const validationForm = async () => {
    try {
      const isValid = await schema.validate(data, {
        abortEarly: false,
      });

      if (isValid) {
        const res = await axiosInstance.post("/api/car", data);
        if (res.status === 201) {
          setValidationResponse(201);
          //  setCreateCarInfos(initialState);
          // setShowImage(true);
          //  setCarId(res?.data?._id);
          //toast.success("آگهی با موفقیت اضافه شد!");
        } else {
          // toast.error("خطا!!");
        }
      }
    } catch (error: any) {
      let errors = error?.inner?.reduce(
        (acc: any, error: any) => ({
          ...acc,
          [error.path]: error.message,
        }),
        {}
      );
      setErrors(errors);
    }
  };

  return { validationResponse, errors, setErrors, validationForm } as any;
};
