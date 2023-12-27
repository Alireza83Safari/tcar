"use client";

import CarTemplate from "@/components/Car/CarTemplate";
import { CarType } from "@/types/car.type";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export async function Car({ cars }: { cars: CarType[] }) {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session]);
  return (
    <div className="grid grid-cols-1 mx-5 col-span-8">
      {cars.length ? (
        cars?.map((car: CarType) => <CarTemplate {...car} />)
      ) : (
        <h2>خودرویی یافت نشد!</h2>
      )}
    </div>
  );
}
