'use client'
import { useState } from 'react'

export default function HomeImage({ name, alt, className }: { name: string; alt: string; className?: string }) {
  const [imgSrc, setImgSrc] = useState(`/images/home/${name}.jpg`)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (imgSrc.endsWith('.jpg')) {
      setImgSrc(`/images/home/${name}.jpeg`)
    } else if (imgSrc.endsWith('.jpeg')) {
      setImgSrc(`/images/home/${name}.png`)
    } else {
      setHasError(true)
    }
  }

  if (hasError) {
    return null
  }

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className}
      onError={handleError}
    />
  )
}