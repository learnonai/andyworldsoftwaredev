'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react'
import { Briefcase, MapPin, Clock, Send, Users, TrendingUp } from 'lucide-react'

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null as File | null
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:andyworldsoftwaredev@gmail.com?subject=Job Application - ${formData.position}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0APosition: ${formData.position}%0D%0AExperience: ${formData.experience} years`
    window.location.href = mailtoLink
    alert('Opening your email client. Please attach your resume and send.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const openings = [
    {
      title: "AI/ML Engineer",
      location: "Pune",
      type: "Full-time",
      experience: "2-5 years",
      description: "Work on cutting-edge AI agents and machine learning projects"
    },
    {
      title: "Full Stack Developer",
      location: "Pune",
      type: "Full-time",
      experience: "1-3 years",
      description: "Build modern web applications using React, Node.js, and cloud technologies"
    },
    {
      title: "React Native Developer",
      location: "Pune",
      type: "Full-time",
      experience: "2-4 years",
      description: "Develop cross-platform mobile applications for iOS and Android"
    },
    {
      title: "UI/UX Designer",
      location: "Pune",
      type: "Full-time",
      experience: "1-3 years",
      description: "Create beautiful and intuitive user interfaces for web and mobile apps"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of an innovative team building the future of AI and software development
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Users className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">Great Team</h3>
              <p className="text-gray-600">Work with talented professionals in a collaborative environment</p>
            </div>

            <div className="text-center p-6">
              <TrendingUp className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">Learn latest technologies and advance your career</p>
            </div>

            <div className="text-center p-6">
              <Briefcase className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">Exciting Projects</h3>
              <p className="text-gray-600">Work on cutting-edge AI and software development projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openings.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{job.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase size={16} className="mr-2" />
                    <span>{job.experience}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{job.description}</p>
                <a href="#apply" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors inline-block">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apply Now</h2>
            <p className="text-xl text-gray-600">Send your resume to: andyworldsoftwaredev@gmail.com</p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Position Applied For *
                </label>
                <select
                  id="position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select position</option>
                  <option value="AI/ML Engineer">AI/ML Engineer</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="React Native Developer">React Native Developer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Years of Experience *
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                required
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., 2-3 years"
              />
            </div>

            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> After clicking Submit, your email client will open. 
                Please attach your resume (PDF format) and send the email to complete your application.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors flex items-center justify-center"
            >
              <Send size={20} className="mr-2" />
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}