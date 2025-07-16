import CarDetails from '@/components/CarDetails'
import React from 'react'
import type { Car } from '@/types/car';
import { notFound } from 'next/navigation';
export const metadata = {
  title: process.env.NEXT_PUBLIC_PROJECTNAME + " | Car Details",
  description: "Here you will see car details",
};

async function fetchCar(id: string): Promise<Car> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/data.json`, {
    cache: 'force-cache',
  });

  if (!res.ok) throw new Error('Failed to fetch data');
  const data = await res.json();
  const car = data.data.used_cars.find((c: Car) => c.id === parseInt(id));
  if (!car) notFound();
  return car;
}

const Details =async  ({ params }: { params: { id: string } }) => {
 const car = await fetchCar(params.id);
  return (
    <CarDetails car={car}/>
  )
}

export default Details