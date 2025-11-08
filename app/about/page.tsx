'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TeamImage from '../../components/TeamImage'
import { Users, Target, Award, MapPin } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Andyworld Software</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2017, we are a team of 12 passionate AI specialists and software developers 
              based in Pune, with 7+ years of experience in delivering cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Target className="text-primary mr-4" size={48} />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To revolutionize businesses through AI-powered solutions and innovative software development. 
                We transform complex challenges into intelligent, automated solutions that drive 
                unprecedented growth and efficiency.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Award className="text-primary mr-4" size={48} />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To be India's premier AI and software development company, pioneering 
                intelligent solutions that shape the future of business automation and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The talented individuals behind our success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <TeamImage name="ganesh-navale" alt="Ganesh Navale" />
              <h3 className="text-xl font-semibold mb-2">Ganesh Navale</h3>
              <p className="text-primary font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600">
                7+ years in AI and software development with expertise in AI agents, 
                full-stack development, and innovative business solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <TeamImage name="somesh-navale" alt="Somesh Navale" />
              <h3 className="text-xl font-semibold mb-2">Somesh Navale</h3>
              <p className="text-primary font-medium mb-3">CTO & Co-founder</p>
              <p className="text-gray-600">
                Expert in AI technologies, system architecture, and modern web development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <TeamImage name="trupti-dongare" alt="Trupti Dongare" />
              <h3 className="text-xl font-semibold mb-2">Trupti Dongare</h3>
              <p className="text-primary font-medium mb-3">Lead Engineer</p>
              <p className="text-gray-600">
                Senior software engineer specializing in full-stack development and AI integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client-Centric</h3>
              <p className="text-gray-600">We put our clients first, understanding their needs.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every project.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">We embrace new technologies and creative approaches.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">We conduct business with honesty and transparency.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}