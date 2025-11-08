'use client'
import { useState } from 'react'

export default function ProjectImage({ id, title }: { id: number; title: string }) {
  const [imgSrc, setImgSrc] = useState(`/images/projects/project-${id}.jpg`)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (imgSrc.endsWith('.jpg')) {
      setImgSrc(`/images/projects/project-${id}.jpeg`)
    } else if (imgSrc.endsWith('.jpeg')) {
      setImgSrc(`/images/projects/project-${id}.png`)
    } else {
      setHasError(true)
    }
  }

  return (
    <div className="h-48 bg-gray-300 flex items-center justify-center overflow-hidden">
      {hasError ? (
        <span className="text-gray-600">Project Screenshot</span>
      ) : (
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-full object-cover"
          onError={handleError}
        />
      )}
    </div>
  )
}