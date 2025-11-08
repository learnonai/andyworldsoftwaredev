'use client'
import { useState } from 'react'

export default function TeamImage({ name, alt }: { name: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(`/images/team/${name}.jpg`)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (imgSrc.endsWith('.jpg')) {
      setImgSrc(`/images/team/${name}.jpeg`)
    } else if (imgSrc.endsWith('.jpeg')) {
      setImgSrc(`/images/team/${name}.png`)
    } else {
      setHasError(true)
    }
  }

  if (hasError) {
    return <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
  }

  return (
    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 overflow-hidden">
      <img 
        src={imgSrc} 
        alt={alt} 
        className="w-full h-full object-cover"
        onError={handleError}
      />
    </div>
  )
}