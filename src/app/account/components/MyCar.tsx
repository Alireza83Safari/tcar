"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { CarTemplate } from "@/components";
import { CarType } from "@/types/car";

interface MyCarProps {
  cars: CarType[];
}

const MyCar: React.FC<MyCarProps> = ({ cars }) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(session as any)?.id) {
      router.push("/home");
    }
  }, [session]);

  return (
    <div className="grid md:grid-cols-2 mx-2 md:col-span-8">
      {!!cars?.length ? (
        cars?.map((car: CarType) => (
          <CarTemplate car={car} dataAos="fade-left" />
        ))
      ) : (
        <h2>خودرویی یافت نشد!</h2>
      )}
    </div>
  );
};

export default MyCar;
