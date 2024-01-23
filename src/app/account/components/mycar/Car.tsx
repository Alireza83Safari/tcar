"use client";
import { useEffect } from "react";
import { CarTemplate } from "@/components";
import { CarType } from "@/types/car.type";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default async function Car({ cars }: { cars: CarType[] }) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/home");
    }
  }, [session]);
  return (
    <div className="grid md:grid-cols-2 mx-2 md:col-span-8">
      {cars?.length ? (
        cars?.map((car: CarType) => <CarTemplate {...car} />)
      ) : (
        <h2>خودرویی یافت نشد!</h2>
      )}
    </div>
  );
}
