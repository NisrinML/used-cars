"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageSliderProps {
  images: string[]
  alt?: string
  title?: string
  description?: string
}

export default function ImageSlider({
  images,
  alt = "Image",
  title = "Image Gallery",
  description = "Browse through our image collection",
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (images.length === 0) {
    return (
      <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500 text-sm sm:text-base">No images available</p>
      </div>
    )
  }


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: title,
    description: description,
    numberOfItems: images.length,
    image: images.map((img, index) => ({
      "@type": "ImageObject",
      url: img,
      name: `${alt} ${index + 1}`,
      position: index + 1,
    })),
  }

  return (
    <article className="w-full max-w-6xl mx-auto px-2 sm:px-4">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />


      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] bg-black rounded-lg overflow-hidden group shadow-lg">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${alt} ${currentIndex + 1} of ${images.length}`}
          fill
          className="object-cover"
          priority={currentIndex === 0}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
        />


        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous image"
          disabled={images.length <= 1}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next image"
          disabled={images.length <= 1}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

  
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        <h3 className="sr-only">Image thumbnails navigation</h3>
        <div className="flex gap-1.5 sm:gap-2 md:gap-3 overflow-x-auto pb-2 sm:pb-3 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                index === currentIndex
                  ? "border-blue-500 ring-2 ring-blue-200 focus:ring-blue-400"
                  : "border-gray-300 hover:border-gray-400 focus:ring-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${alt} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
              />
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}
