
"use client";
import React, { useEffect, useState } from 'react'
import CarCard from './shared/CarCard'
import type { Car } from "@/types/car"
import Icon from '@/ui/Icon';


async function fetchUsedCars(): Promise<Car[]> {
  const res = await fetch('/data/data.json', {
    cache: 'force-cache',
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  const data = await res.json();
  return data.data.used_cars;
}

const Home = () => {
  const [usedCars, setUsedCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function loadCars() {
      try {
        const cars = await fetchUsedCars();
        setUsedCars(cars);
        setLoading(false);
      } catch (err) {
        setError('Failed to load used cars');
        setLoading(false);
        console.log("Data didnot fetch becouse of: ",err);
      }
    }
    loadCars();
  }, []);
  if (loading) return <div className="fixed z-[100] top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
          <Icon name="Loading" w={96} h={96}/>
        </div>;
  if (error) return <div className="w-full h-screen text-4xl text-red-500">{error}</div>;
  const isOdd = usedCars.length % 2 !== 0;
  return (
    <main className='flex- flex-col items-center p-4 md:p-8'>
      <section className='flex flex-col w-full items-center gap-2 md:gap-4'>
        <h1 className='font-sans font-semibold text-lg lg:text-2xl'>Used Coupe cars for sale in UAE</h1>
        <h4 className='text-sm lg:text-base font-sans text-center '>{usedCars?.length} used cars for sale found. Check Certified Pre-owned, New, and Used cars on YallaMotor</h4>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-4 lg:mt-8">
         {usedCars.map((car, index) => (
            <article
              key={car.id}
              className={
                isOdd && index === usedCars?.length - 1 && usedCars?.length % 3 === 1
                  ? 'lg:col-start-2'
                  : ''
              }
            >
              <CarCard car={car}/>
            </article>
          ))}
        </div>
      

    </main>
  )
}

export default Home