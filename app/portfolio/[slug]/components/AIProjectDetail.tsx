'use client'

import { PortfolioItem } from '@/data/portfolio'
import Link from 'next/link'

interface AIProjectDetailProps {
  item: PortfolioItem
}

export default function AIProjectDetail({ item }: AIProjectDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navigation */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/portfolio" 
                className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all duration-200 group bg-gray-50 hover:bg-purple-50 px-4 py-2 rounded-lg"
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
                <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/portfolio" className="hover:text-purple-600 transition-colors">Portfolio</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium truncate max-w-xs">{item.title}</span>
              </div>
            </div>
            
            {/* Project Type Badge */}
            <div className="hidden sm:block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                AI Project
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full mb-4">
                AI Project • {new Date(item.publishDate).getFullYear()}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{item.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{item.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                <span>Duration: {item.duration}</span>
              </div>
            </div>

            {/* Project Info Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Info</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {item.technologies?.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">My Role</h4>
                  <p className="text-gray-900">AI Content Strategist</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Team Size</h4>
                  <p className="text-gray-900">3-5 members</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Performance</h4>
                  <div className="space-y-2">
                    {item.metrics && Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600">{key}</span>
                        <span className="font-semibold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  {item.links?.demo && (
                    <a 
                      href={item.links.demo} 
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-center block hover:bg-blue-700 transition-colors"
                    >
                      View Project
                    </a>
                  )}
                  {item.links?.github && (
                    <a 
                      href={item.links.github} 
                      className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg text-center block hover:bg-gray-900 transition-colors"
                    >
                      View Source Code
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
          {/* Project Overview */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <div className="bg-white p-6 rounded-lg border">
              <div className="prose prose-lg text-gray-600">
                <p>
                  This AI-powered content automation system was designed to streamline content creation 
                  workflows while maintaining high quality and brand consistency across multiple channels.
                </p>
                <p>
                  The project leverages advanced natural language processing and machine learning 
                  techniques to generate, optimize, and distribute content at scale.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                  <li>• Automated content generation</li>
                  <li>• Multi-channel distribution</li>
                  <li>• Performance analytics</li>
                  <li>• Brand voice consistency</li>
                  <li>• Real-time optimization</li>
                  <li>• A/B testing capabilities</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Highlights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">AI</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">NLP Integration</h3>
                </div>
                <p className="text-gray-600">
                  Advanced natural language processing for content understanding and generation
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-semibold">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">Performance</h3>
                </div>
                <p className="text-gray-600">
                  Optimized for high-throughput content processing with minimal latency
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">Analytics</h3>
                </div>
                <p className="text-gray-600">
                  Real-time performance tracking and content optimization insights
                </p>
              </div>
            </div>
          </section>

          {/* Development Process */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Development Process</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Requirements Analysis & Planning</h3>
                  <p className="text-gray-600 mt-2">
                    Defined technical requirements, content workflows, and performance benchmarks. 
                    Selected appropriate AI models and development frameworks.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Technical Architecture & Development</h3>
                  <p className="text-gray-600 mt-2">
                    Built scalable backend systems, integrated AI models, and developed content processing pipelines 
                    with robust error handling and monitoring.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Testing & Optimization</h3>
                  <p className="text-gray-600 mt-2">
                    Comprehensive testing including unit tests, integration tests, and performance optimization. 
                    Fine-tuned AI models for specific use cases.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Deployment & Monitoring</h3>
                  <p className="text-gray-600 mt-2">
                    Deployed to production with continuous monitoring, automated scaling, and regular performance 
                    analysis to ensure optimal results.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Learnings */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Learnings</h2>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Insights</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• AI model selection significantly impacts output quality</li>
                    <li>• Proper data preprocessing is crucial for accuracy</li>
                    <li>• Monitoring and feedback loops enable continuous improvement</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Impact</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Automation reduces content creation time by 70%</li>
                    <li>• Consistent brand voice across all channels</li>
                    <li>• Scalable solution for growing content demands</li>
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