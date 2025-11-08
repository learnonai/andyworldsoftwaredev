import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Code, Smartphone, Globe, Palette, TrendingUp, Shield, Star, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Agents & Advanced Software Solutions for
              <span className="text-primary"> Modern Businesses</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with AI-powered solutions and cutting-edge software development. 
              With 7+ years of experience since 2017, we deliver innovative AI agents and enterprise applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors">
                Get Free Quote
              </Link>
              <Link href="/portfolio" className="border-2 border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive software development solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <Code className="text-primary mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">AI Agents Development</h3>
              <p className="text-gray-600 mb-4">Intelligent AI agents and automation solutions for business processes</p>
              <Link href="/services" className="text-primary font-semibold flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <Globe className="text-primary mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray-600 mb-4">Modern, responsive websites using React, Angular, and Node.js</p>
              <Link href="/services" className="text-primary font-semibold flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <Smartphone className="text-primary mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
              <p className="text-gray-600 mb-4">Native iOS, Android, and cross-platform React Native apps</p>
              <Link href="/services" className="text-primary font-semibold flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <Code className="text-primary mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">Custom Software</h3>
              <p className="text-gray-600 mb-4">Tailored enterprise solutions for your specific business needs</p>
              <Link href="/services" className="text-primary font-semibold flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <Palette className="text-primary mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">Beautiful, user-friendly interfaces that enhance user experience</p>
              <Link href="/services" className="text-primary font-semibold flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <TrendingUp className="text-primary mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">SEO, social media, and digital strategies to grow your business</p>
              <Link href="/services" className="text-primary font-semibold flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <Shield className="text-primary mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">E-commerce</h3>
              <p className="text-gray-600 mb-4">Secure, scalable online stores with payment integration</p>
              <Link href="/services" className="text-primary font-semibold flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our clients say about us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                "Andyworld's AI agent transformed our customer service. 80% faster response times and 95% customer satisfaction. Exceptional work!"
              </p>
              <div className="font-semibold text-gray-900">Rajesh Patel</div>
              <div className="text-gray-500 text-sm">CEO, TechFlow Solutions</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                "Their AI-powered inventory management system reduced our operational costs by 40%. Outstanding technical expertise!"
              </p>
              <div className="font-semibold text-gray-900">Sneha Kulkarni</div>
              <div className="text-gray-500 text-sm">Operations Head, LogiTech Pune</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                "The web application with AI integration boosted our productivity by 60%. Professional team with cutting-edge solutions."
              </p>
              <div className="font-semibold text-gray-900">Vikram Desai</div>
              <div className="text-gray-500 text-sm">MD, InnovateTech Pvt Ltd</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with innovative software solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </Link>
            <Link href="tel:+919146639224" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Call Now: +91 91466 39224
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}