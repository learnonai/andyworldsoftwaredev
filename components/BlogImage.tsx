'use client'
import { useState } from 'react'

export default function BlogImage({ id }: { id: number }) {
  const [imgSrc, setImgSrc] = useState(`/images/blog/post-${id}.jpg`)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (imgSrc.endsWith('.jpg')) {
      setImgSrc(`/images/blog/post-${id}.jpeg`)
    } else if (imgSrc.endsWith('.jpeg')) {
      setImgSrc(`/images/blog/post-${id}.png`)
    } else {
      setHasError(true)
    }
  }

  return (
    <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
      {hasError ? (
        <span className="text-gray-500 text-sm">Blog Post Image</span>
      ) : (
        <img 
          src={imgSrc} 
          alt={`Blog post ${id}`} 
          className="w-full h-full object-cover"
          onError={handleError}
        />
      )}
    </div>
  )
}