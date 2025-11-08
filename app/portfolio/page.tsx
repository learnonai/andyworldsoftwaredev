import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ExternalLink, Github } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "AI Customer Support Agent",
      category: "AI Solution",
      description: "Intelligent chatbot handling 1000+ daily queries with 95% accuracy for e-commerce platform.",
      technologies: ["Python", "TensorFlow", "NLP", "React"],
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Smart Inventory Management System",
      category: "Enterprise AI",
      description: "AI-powered inventory system with predictive analytics reducing waste by 40% for manufacturing client.",
      technologies: ["Python", "Machine Learning", "PostgreSQL", "React"],
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Automated HR Recruitment Bot",
      category: "AI Automation",
      description: "AI agent screening 500+ resumes daily, scheduling interviews, and providing candidate insights.",
      technologies: ["Python", "AI/ML", "Natural Language Processing", "MongoDB"],
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "EduLearn Learning Platform",
      category: "Web App",
      description: "Online learning platform with video streaming, quizzes, progress tracking, and certification system.",
      technologies: ["Next.js", "Express.js", "MySQL", "AWS S3"],
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "RestaurantPro POS System",
      category: "Desktop App",
      description: "Point of sale system for restaurants with order management, billing, and inventory tracking.",
      technologies: ["Electron", "React", "SQLite", "Thermal Printer API"],
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "FitTracker Fitness App",
      category: "Mobile App",
      description: "Fitness tracking app with workout plans, nutrition tracking, and social features.",
      technologies: ["Flutter", "Firebase", "Google Fit API", "Nutrition API"],
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const categories = ["All", "Web App", "Mobile App", "E-commerce", "Enterprise", "Desktop App"]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our successful projects and the innovative solutions we've delivered for our clients
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Project Screenshot</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary bg-blue-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-primary hover:text-secondary font-medium"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-gray-600 hover:text-gray-800 font-medium"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Detailed case studies of our most impactful projects</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">TechMart E-commerce Success</h3>
              <div className="space-y-4 text-gray-600">
                <p><strong>Challenge:</strong> Client needed a complete e-commerce solution to replace their outdated system.</p>
                <p><strong>Solution:</strong> Built a modern, scalable platform with advanced features and mobile optimization.</p>
                <p><strong>Results:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>200% increase in online sales</li>
                  <li>50% reduction in cart abandonment</li>
                  <li>Mobile traffic increased by 300%</li>
                  <li>Page load time improved by 60%</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">HealthCare Plus App Impact</h3>
              <div className="space-y-4 text-gray-600">
                <p><strong>Challenge:</strong> Healthcare provider needed a mobile solution for patient management.</p>
                <p><strong>Solution:</strong> Developed a comprehensive mobile app with telemedicine capabilities.</p>
                <p><strong>Results:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>50,000+ app downloads in 6 months</li>
                  <li>40% reduction in missed appointments</li>
                  <li>95% patient satisfaction rate</li>
                  <li>30% increase in patient engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600">Cutting-edge tools and frameworks for modern solutions</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Python", "TensorFlow", "PyTorch", "OpenAI GPT", "Machine Learning", "NLP",
              "React", "Node.js", "MongoDB", "PostgreSQL", "AI Agents", "Chatbots",
              "AWS", "Docker", "Kubernetes", "Firebase", "FastAPI", "LangChain"
            ].map((tech) => (
              <div key={tech} className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg mb-2 h-16 flex items-center justify-center">
                  <span className="font-medium text-gray-700">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something amazing together. Contact us to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}