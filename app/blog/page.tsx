'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BlogImage from '../../components/BlogImage'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Future of AI Agents in Business Automation",
      excerpt: "Discover how AI agents are revolutionizing business processes and improving efficiency across industries.",
      author: "Ganesh Navale",
      date: "January 15, 2024",
      category: "AI & Machine Learning",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Next.js",
      excerpt: "Learn best practices for creating high-performance, scalable web applications using Next.js framework.",
      author: "Somesh Navale",
      date: "January 10, 2024",
      category: "Web Development",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Mobile App Development Trends in 2024",
      excerpt: "Explore the latest trends in mobile app development including AI integration and cross-platform solutions.",
      author: "Trupti Dongare",
      date: "January 5, 2024",
      category: "Mobile Development",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Machine Learning for Business Intelligence",
      excerpt: "How machine learning algorithms can transform your business data into actionable insights.",
      author: "Ganesh Navale",
      date: "December 28, 2023",
      category: "AI & Machine Learning",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Best Practices for UI/UX Design in 2024",
      excerpt: "Essential UI/UX design principles to create engaging and user-friendly digital experiences.",
      author: "Trupti Dongare",
      date: "December 20, 2023",
      category: "Design",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Cloud Computing: AWS vs Azure vs Google Cloud",
      excerpt: "A comprehensive comparison of major cloud platforms to help you choose the right one for your project.",
      author: "Somesh Navale",
      date: "December 15, 2023",
      category: "Cloud & DevOps",
      readTime: "10 min read"
    }
  ]

  const categories = ["All", "AI & Machine Learning", "Web Development", "Mobile Development", "Design", "Cloud & DevOps"]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tutorials, and updates on AI, software development, and technology trends
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
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

      {/* Blog Posts */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <BlogImage id={post.id} />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-blue-100 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Link href="#" className="text-primary font-semibold flex items-center hover:text-secondary">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest articles and updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent flex-1 max-w-md"
            />
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}