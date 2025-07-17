import React from 'react'
interface InfoProps {
    label: string,
    value:string | number
}
const InfoContainer = ({label,value}:InfoProps) => {
  return (
 <div className='flex flex-row justify-start items-center p-2 border-b-2 border-cardBorder whitespace-nowrap text-foreground text-sm lg:text-base gap-8 lg:gap-16'>
            <label className='w-[15%]'>{label} </label>
            <h6 className='font-semibold '>{value}</h6>
</div>
  )
}

export default InfoContainer