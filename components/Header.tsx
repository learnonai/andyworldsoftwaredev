'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Andyworld Software
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary">Services</Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-primary">Portfolio</Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary">Blog</Link>
            <Link href="/careers" className="text-gray-700 hover:text-primary">Careers</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
          </nav>

          <div className="hidden md:flex">
            <Link href="/contact" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary">
              Get Quote
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-700">Home</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700">About</Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700">Services</Link>
              <Link href="/portfolio" className="block px-3 py-2 text-gray-700">Portfolio</Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700">Blog</Link>
              <Link href="/careers" className="block px-3 py-2 text-gray-700">Careers</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}