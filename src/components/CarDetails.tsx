"use client"
import { Car } from '@/types/car'
import React, { useState } from 'react'
import { formatPrice, stripHtmlTags } from '@/utilities/functions';
import VechileHighlight from './shared/VechileHighlight';
import InfoContainer from './shared/InfoContainer';
import Icon from '@/ui/Icon';
import ImageSlider from './shared/ImageSlider';
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

const CarDetails = ({ car }: { car: Car }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const price = formatPrice(car.price);
  const strippedDescription = stripHtmlTags(car.description);
  const router = useRouter()
  return (
    <div className='w-full h-fit flex items-center relative'>
      {/* Back Button Definition */}
      <button
        onClick={() => router.back()}
        className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-foreground p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-cardBorder hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-linkColor focus:ring-offset-2"
        aria-label="Go back to previous page"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      
      <main className=' h-fit font-sans self-center  bg-white rounded-lg flex flex-col items-center gap-2 m-4 p-2 lg:gap-4 lg:m-8 lg:p-4  w-[90%] xl:min-w-[50%] xl:max-w-[70%] overflow-hidden'>
        <h1 className='font-semibold text-lg lg:text-2xl'>{car.title}</h1>
        <h4 className='font-semibold text-sm lg:text-lg'>{car.year} {" Model | "}{car.model}</h4>
        {/* Car Thumbnails Section */}
        <section className='w-full'>
          <ImageSlider
            images={car.pictures}
            alt="Premium car interior and exterior views"
            title="Premium Car Image Gallery"
            description="High-quality images showcasing vehicle interior and exterior details"
          />
        </section>
        {/* Car Highlight Section */}
        <section className='flex flex-col items-center gap-2 mt-4 lg:gap-4 '>
          <h2 className='font-semibold text-base lg:text-xl'>Vechile Highlight</h2>
          <div className='flex flex-row justify-center gap-8'>
            <VechileHighlight name="Date" label="Model Year" value={car.year.toString()} />
            <VechileHighlight name="Location" label="Location" value={car.city} />
          </div>
        </section>
        {/* Car Details Section */}
        <section className='flex flex-col items-start pl-8 sm:pl-0 sm:items-center gap-2 mt-4 lg:gap-4 w-full'>
          <h2 className='font-semibold text-base lg:text-xl'>Car Details</h2>
          <div className='grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-16 md:gap-y-4 '>
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
        <section className='flex flex-col items-start gap-2 mt-4 px-8 lg:px-8 lg:gap-4 w-full '>
          <h2 className='font-semibold text-base lg:text-xl'>Car Description</h2>
          <p
            className={`text-base font-sans text-foreground ${!isExpanded ? "line-clamp-3" : ""
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
    </div>
  )
}

export default CarDetails