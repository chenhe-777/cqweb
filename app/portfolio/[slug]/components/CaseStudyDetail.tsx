'use client'

import { PortfolioItem } from '@/data/portfolio'
import Link from 'next/link'

interface CaseStudyDetailProps {
  item: PortfolioItem
}

export default function CaseStudyDetail({ item }: CaseStudyDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navigation */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/portfolio" 
                className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-all duration-200 group bg-gray-50 hover:bg-green-50 px-4 py-2 rounded-lg"
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
                <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/portfolio" className="hover:text-green-600 transition-colors">Portfolio</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium truncate max-w-xs">{item.title}</span>
              </div>
            </div>
            
            {/* Project Type Badge */}
            <div className="hidden sm:block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Case Study
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full mb-4">
              Case Study
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{item.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{item.description}</p>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Executive Summary</h2>
              <div className="bg-white p-8 rounded-lg border">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This case study examines the implementation and results of a comprehensive content marketing 
                  strategy that significantly improved brand visibility and customer engagement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {item.metrics && Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{value}</div>
                      <div className="text-sm text-gray-600 uppercase tracking-wide">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Challenge */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <div className="bg-white p-8 rounded-lg border">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The client faced significant challenges in reaching their target audience effectively. 
                  Their content strategy lacked focus, and they struggled with:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Low brand awareness in the target market
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Inconsistent messaging across channels
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Poor engagement rates on social media
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Limited content production capacity
                  </li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-lg border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Approach</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We developed a comprehensive content strategy that aligned with business objectives 
                    and addressed each challenge systematically.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Content Planning</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Audience research and segmentation</li>
                        <li>• Content calendar development</li>
                        <li>• Channel-specific strategies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Execution</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• High-quality content creation</li>
                        <li>• Cross-platform distribution</li>
                        <li>• Performance monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Results Achieved</h2>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
                <p className="text-lg text-gray-700 mb-6">
                  The implemented strategy delivered exceptional results across all key metrics:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Quantitative Results</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 150% increase in website traffic</li>
                      <li>• 200% growth in social media followers</li>
                      <li>• 75% improvement in engagement rates</li>
                      <li>• 300% increase in lead generation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Qualitative Impact</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Enhanced brand recognition</li>
                      <li>• Improved customer trust</li>
                      <li>• Stronger market positioning</li>
                      <li>• Better customer relationships</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Client</h4>
                    <p className="text-gray-900">{item.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Duration</h4>
                    <p className="text-gray-900">{item.duration}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Industry</h4>
                    <p className="text-gray-900">Technology</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Services</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 