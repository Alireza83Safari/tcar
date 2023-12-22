"use server";

export async function getUserCars(id: string) {
  const userCar = await fetch(`http://localhost:3000/api/profile/car/${id}`);
  const data = await userCar.json();
  return data;
}
