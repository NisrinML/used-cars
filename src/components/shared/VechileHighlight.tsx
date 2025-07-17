import Icon from '@/ui/Icon'
import React from 'react'
interface Vechile {
    name: string,
    label: string,
    value:string
}

const VechileHighlight = ({name,label,value}:Vechile) => {
  return (
    <div className='flex flex-col items-center h-fit w-40 bg-background p-4'>
      <Icon name={name} w={8} h={8}/>
      <h6 className='text-[10px] text-gray-500'>{label}</h6>
      <h4 className='text-sm font-semibold text-linkColor'>{value}</h4>
    </div>
  )
}

export default VechileHighlight