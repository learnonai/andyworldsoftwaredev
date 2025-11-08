import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Andyworld Software</h3>
            <p className="text-gray-300 mb-4">
              Leading software development company in Pune, delivering innovative solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} className="hover:text-primary cursor-pointer" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} className="hover:text-primary cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="hover:text-primary cursor-pointer" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} className="hover:text-primary cursor-pointer" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services" className="hover:text-white">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-white">Mobile Apps</Link></li>
              <li><Link href="/services" className="hover:text-white">Custom Software</Link></li>
              <li><Link href="/services" className="hover:text-white">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+91 91466 39224</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>andyworldsoftwaredev@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Andyworld Software Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}