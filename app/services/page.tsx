import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Globe, Smartphone, Code, Palette, TrendingUp, Shield, Check } from 'lucide-react'

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* AI Agents Development */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <Code className="text-primary mb-6" size={64} />
              <h2 className="text-2xl font-bold mb-4">AI Agents Development</h2>
              <p className="text-gray-600 mb-6">
                Intelligent AI agents and automation solutions for business processes and customer service
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Custom AI Chatbots</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Process Automation Agents</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />AI Customer Support</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Machine Learning Integration</li>
              </ul>
              <div className="bg-white p-4 rounded">
                <h4 className="font-semibold mb-2">Flexible Pricing</h4>
                <p className="text-sm text-gray-600">Custom quotes based on requirements</p>
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <Globe className="text-primary mb-6" size={64} />
              <h2 className="text-2xl font-bold mb-4">Web Development</h2>
              <p className="text-gray-600 mb-6">
                Modern, responsive websites and web applications using cutting-edge technologies
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />React & Next.js Applications</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Angular Development</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Node.js Backend</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Progressive Web Apps</li>
              </ul>
              <div className="bg-white p-4 rounded">
                <h4 className="font-semibold mb-2">Market Competitive Pricing</h4>
                <p className="text-sm text-gray-600">Flexible rates based on project scope</p>
              </div>
            </div>

            {/* Mobile App Development */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <Smartphone className="text-primary mb-6" size={64} />
              <h2 className="text-2xl font-bold mb-4">Mobile App Development</h2>
              <p className="text-gray-600 mb-6">
                Native and cross-platform mobile applications for iOS and Android
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />React Native Apps</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Native iOS Development</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Native Android Development</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />App Store Deployment</li>
              </ul>
              <div className="bg-white p-4 rounded">
                <h4 className="font-semibold mb-2">Competitive Market Rates</h4>
                <p className="text-sm text-gray-600">Pricing varies by complexity and features</p>
              </div>
            </div>

            {/* Custom Software */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <Code className="text-primary mb-6" size={64} />
              <h2 className="text-2xl font-bold mb-4">Custom Software Solutions</h2>
              <p className="text-gray-600 mb-6">
                Tailored enterprise software solutions for your specific business requirements
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Enterprise Applications</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Database Design</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />API Development</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />System Integration</li>
              </ul>
              <div className="bg-white p-4 rounded">
                <h4 className="font-semibold mb-2">Custom Pricing</h4>
                <p className="text-sm text-gray-600">Tailored quotes for enterprise solutions</p>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <Palette className="text-primary mb-6" size={64} />
              <h2 className="text-2xl font-bold mb-4">UI/UX Design</h2>
              <p className="text-gray-600 mb-6">
                Beautiful, user-friendly interfaces that enhance user experience and engagement
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />User Research & Analysis</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Wireframing & Prototyping</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Visual Design</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Usability Testing</li>
              </ul>
              <div className="bg-white p-4 rounded">
                <h4 className="font-semibold mb-2">Starting from ₹15,000</h4>
                <p className="text-sm text-gray-600">Complete UI/UX design package</p>
              </div>
            </div>

            {/* E-commerce Development */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <Shield className="text-primary mb-6" size={64} />
              <h2 className="text-2xl font-bold mb-4">E-commerce Development</h2>
              <p className="text-gray-600 mb-6">
                Secure, scalable online stores with integrated payment gateways
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Shopping Cart Development</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Payment Gateway Integration</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Inventory Management</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Order Management System</li>
              </ul>
              <div className="bg-white p-4 rounded">
                <h4 className="font-semibold mb-2">Starting from ₹40,000</h4>
                <p className="text-sm text-gray-600">Complete e-commerce solution</p>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <TrendingUp className="text-primary mb-6" size={64} />
              <h2 className="text-2xl font-bold mb-4">Digital Marketing</h2>
              <p className="text-gray-600 mb-6">
                Comprehensive digital marketing strategies to grow your online presence
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />SEO Optimization</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Social Media Marketing</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />Content Marketing</li>
                <li className="flex items-center"><Check className="text-green-500 mr-2" size={16} />PPC Advertising</li>
              </ul>
              <div className="bg-white p-4 rounded">
                <h4 className="font-semibold mb-2">Starting from ₹20,000/month</h4>
                <p className="text-sm text-gray-600">Monthly digital marketing package</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-gray-600">Understanding your requirements and business goals</p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-gray-600">Creating detailed project roadmap and timeline</p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-gray-600">Building your solution with regular updates</p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-3">Delivery</h3>
              <p className="text-gray-600">Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project requirements and provide you with a custom quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Quote
            </a>
            <a href="tel:+919876543210" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Call: +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}