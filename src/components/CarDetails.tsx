import { Car } from '@/types/car'
import React from 'react'
import { stripHtmlTags } from '@/utilities/functions';

const CarDetails = ({ car }: { car: Car }) => {
  return (
    <div className='p-8 text-lg font-sans text-foreground'>{stripHtmlTags(car.description)}</div>
  )
}

export default CarDetails