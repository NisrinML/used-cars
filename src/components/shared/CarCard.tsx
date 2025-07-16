
import React from 'react'
import type { Car } from "@/types/car"
import Image from 'next/image'
import Icon from '@/ui/Icon'
import { formatPrice } from '@/utilities/functions'
import { useRouter } from 'next/navigation'
interface CarCardProps {
    car: Car
}


const CarCard = ({ car }: CarCardProps) => {
    const router = useRouter()
    
    const price = formatPrice(car.price)
    return (
        <section
        onClick={() => router.push(`/home/${car?.id}`) }
        className='overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer bg-white border-2 border-cardBorder min-h-40 rounded-md 
    flex flex-row font-sans gap-2 p-2 md:gap-4 md:p-4
    ' >
            <div className='flex flex-col justify-center items-start gap-1 h-full '>
                <Image
                    width={70}
                    height={40}
                    src={car?.slideshow_picture}
                    alt={car?.picture_title}
                    className='m-2 lg:m-4 rounded-md w-[90px] h-[60px] md:w-[120px] md:h-[90px]  lg:w-[150px] lg:h-[100px]  xl:w-[150px] xl:h-[100px] object-cover'
                />
                <div className='bg-slideImage flex flex-row justify-center items-center gap-1 rounded-md ml-[10%]  w-12 h-8 lg:w-14 '>
                    <Icon name="Images" w={8} h={8} />
                    <h6 className='text-white text-[10px] lg:text-sm '>{car?.pictures.length}</h6>
                </div>

            </div>
            <div className='flex flex-col justify-center items-start gap-2 m-2 lg:m-4'>
                <h1 className='text-foreground text-lg lg:text-xl font-semibold'>{price}</h1>
                <h4 className='text-title text-sm md:whitespace-nowrap'>{car?.title}</h4>
                <h2 className='text-foreground text-sm lg:text-base '>{car?.make}{" "}/{" "}{car?.model}</h2>
                <div className='flex flex-row  text-foreground gap-2 lg:gap-4 text-sm lg:text-base font-semibold mt-2'>
                    <div className='flex flex-row gap-2 '>
                        <Icon name="Location" w={4} h={4} />
                        <h2 >{car?.city}</h2>
                    </div>
                    <span>|</span>
                    <div className='flex flex-row gap-2 '>
                        <Icon name="Date" w={4} h={4} />
                        <h2 >{car?.year}</h2>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default CarCard