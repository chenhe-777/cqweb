'use client'

import { PortfolioItem } from '@/data/portfolio'
import Link from 'next/link'

interface TechnicalProjectDetailProps {
  item: PortfolioItem
}

export default function TechnicalProjectDetail({ item }: TechnicalProjectDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navigation */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/portfolio" 
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-all duration-200 group bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg"
              >
                <svg 
                  className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-medium text-sm">Back to Portfolio</span>
              </Link>
              
              {/* Breadcrumb */}
              <div className="hidden md:flex items-center text-sm text-gray-500">
                <Link href="/" className="hover:text-gray-800 transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/portfolio" className="hover:text-gray-800 transition-colors">Portfolio</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium truncate max-w-xs">{item.title}</span>
              </div>
            </div>
            
            {/* Project Type Badge */}
            <div className="hidden sm:block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Technical Project
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Project Header */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full mb-4">
                Technical Project
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{item.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Info Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Specs</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Technologies</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {item.technologies?.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Duration</h4>
                  <p className="text-gray-900">{item.duration}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Client</h4>
                  <p className="text-gray-900">{item.client}</p>
                </div>
                {item.metrics && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Performance</h4>
                    <div className="space-y-2">
                      {Object.entries(item.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600">{key}</span>
                          <span className="font-semibold text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="space-y-2">
                  {item.links?.demo && (
                    <a 
                      href={item.links.demo} 
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-center block hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {item.links?.github && (
                    <a 
                      href={item.links.github} 
                      className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg text-center block hover:bg-gray-900 transition-colors"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Technical Overview */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Overview</h2>
            <div className="bg-white p-8 rounded-lg border">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This technical project demonstrates advanced implementation of modern web technologies 
                and best practices in software development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Architecture</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Microservices architecture</li>
                    <li>• RESTful API design</li>
                    <li>• Database optimization</li>
                    <li>• Cloud deployment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Real-time data processing</li>
                    <li>• User authentication</li>
                    <li>• Responsive design</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Details */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend</h3>
                <p className="text-gray-600 mb-4">
                  Built with modern React patterns and TypeScript for type safety and maintainability.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Component-based architecture</li>
                  <li>• State management with Redux</li>
                  <li>• Responsive CSS Grid/Flexbox</li>
                  <li>• Automated testing</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend</h3>
                <p className="text-gray-600 mb-4">
                  Scalable server architecture with efficient data processing and API design.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Node.js/Express server</li>
                  <li>• PostgreSQL database</li>
                  <li>• JWT authentication</li>
                  <li>• Docker containerization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges & Solutions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Optimization</h3>
                <p className="text-gray-600 mb-3">
                  <strong>Challenge:</strong> Initial load times were slower than acceptable for user experience.
                </p>
                <p className="text-gray-600">
                  <strong>Solution:</strong> Implemented code splitting, lazy loading, and CDN distribution 
                  to reduce bundle size and improve loading performance by 60%.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Scalability</h3>
                <p className="text-gray-600 mb-3">
                  <strong>Challenge:</strong> System needed to handle increasing user load without performance degradation.
                </p>
                <p className="text-gray-600">
                  <strong>Solution:</strong> Implemented horizontal scaling with load balancers and database 
                  sharding to support 10x traffic increase.
                </p>
              </div>
            </div>
          </section>

          {/* Key Learnings */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Learnings</h2>
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Insights</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Early performance testing prevents costly optimizations</li>
                    <li>• TypeScript significantly reduces runtime errors</li>
                    <li>• Automated testing improves deployment confidence</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Management</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Clear requirements reduce development time</li>
                    <li>• Regular code reviews improve code quality</li>
                    <li>• Documentation is crucial for team collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 