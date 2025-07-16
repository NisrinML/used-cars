import Home from '@/components/Home'
import React from 'react'
export const metadata = {
  title: process.env.NEXT_PUBLIC_PROJECTNAME + " | Home",
  description: "we will show you our used cars",
};
const HomePage = () => {
  return (
    <Home/>
  )
}

export default HomePage