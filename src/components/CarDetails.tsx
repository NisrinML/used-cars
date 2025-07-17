"use client"
import { Car } from '@/types/car'
import React, { useState } from 'react'
import { formatPrice, stripHtmlTags } from '@/utilities/functions';
import VechileHighlight from './shared/VechileHighlight';
import InfoContainer from './shared/InfoContainer';
import Icon from '@/ui/Icon';

const CarDetails = ({ car }: { car: Car }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const price = formatPrice(car.price);
  const strippedDescription = stripHtmlTags(car.description);
  return (
    <main className='m-8 p-4 h-fit font-sans w-[50%] self-center  bg-white rounded-lg flex flex-col items-center gap-4'>
      <h1 className='font-semibold text-lg lg:text-2xl'>{car.title}</h1>
      <h4 className='font-semibold text-sm lg:text-lg'>{car.year} {" Model | "}{car.model}</h4>
      {/* Car Thumbnails Section */}
      <section></section>
      {/* Car Highlight Section */}
      <section className='flex flex-col items-center gap-4 mt-4'>
        <h2 className='font-semibold text-base lg:text-xl'>Vechile Highlight</h2>
        <div className='flex flex-row justify-center gap-8'>
          <VechileHighlight name="Date" label="Model Year" value={car.year.toString()} />
          <VechileHighlight name="Location" label="Location" value={car.city} />
        </div>
      </section>
      {/* Car Details Section */}
      <section className='flex flex-col items-center gap-4 mt-4 w-full'>
        <h2 className='font-semibold text-base lg:text-xl'>Car Details</h2>
        <div className='grid grid-cols-2 gap-x-16 gap-y-4 '>
          <InfoContainer label="Model" value={car.model} />
          <InfoContainer label="Maker" value={car.make} />
          <InfoContainer label="Year" value={car.year} />
          <InfoContainer label="Price" value={price} />
          <InfoContainer label="City" value={car.city} />
          <InfoContainer label="Name" value={car.title} />
          <InfoContainer label="Seller" value={car.seller_name} />
          {car.whatsapp_number && <button className='text-base text-white font-semibold rounded-lg bg-contactButton 
          flex flex-row justify-center items-center gap-4 w-[50%] p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-95'>
            <Icon name="Whatsapp" w={4} h={4} />
            <h6>Whatsapp</h6>
          </button>}
        </div>
      </section>
      {/* Car Description Section */}
      <section className='flex flex-col items-start gap-4 mt-4 w-full'>
      <h2 className='font-semibold text-base lg:text-xl'>Car Description</h2>
       <p 
          className={`text-base font-sans text-foreground ${
            !isExpanded ? "line-clamp-3" : ""
          }`}
        >
          {strippedDescription}
        </p>
        {strippedDescription.length > 100 && ( 
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 hover:text-blue-700 font-medium text-sm mt-[-4px] focus:outline-none"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </section>
    </main>
  )
}

export default CarDetails