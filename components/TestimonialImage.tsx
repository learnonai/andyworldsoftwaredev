'use client'
import { useState } from 'react'

export default function TestimonialImage({ id }: { id: number }) {
  const [imgSrc, setImgSrc] = useState(`/images/testimonials/client-${id}.jpg`)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (imgSrc.endsWith('.jpg')) {
      setImgSrc(`/images/testimonials/client-${id}.jpeg`)
    } else if (imgSrc.endsWith('.jpeg')) {
      setImgSrc(`/images/testimonials/client-${id}.png`)
    } else {
      setHasError(true)
    }
  }

  if (hasError) {
    return <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
  }

  return (
    <img 
      src={imgSrc} 
      alt={`Client ${id}`} 
      className="w-16 h-16 rounded-full object-cover"
      onError={handleError}
    />
  )
}