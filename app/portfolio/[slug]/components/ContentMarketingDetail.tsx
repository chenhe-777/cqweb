'use client'

import { PortfolioItem } from '@/data/portfolio'
import Link from 'next/link'

interface ContentMarketingDetailProps {
  item: PortfolioItem
}

export default function ContentMarketingDetail({ item }: ContentMarketingDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navigation */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/portfolio" 
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-200 group bg-gray-50 hover:bg-blue-50 px-4 py-2 rounded-lg"
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
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium truncate max-w-xs">{item.title}</span>
              </div>
            </div>
            
            {/* Project Type Badge */}
            <div className="hidden sm:block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {item.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-4">
                {item.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
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

            {/* Project Info Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Duration</h4>
                  <p className="text-gray-900">{item.duration}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Client</h4>
                  <p className="text-gray-900">{item.client}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Key Metrics</h4>
                  <div className="space-y-2">
                    {item.metrics && Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600">{key}</span>
                        <span className="font-semibold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {item.links?.demo && (
                  <a 
                    href={item.links.demo} 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-center block hover:bg-blue-700 transition-colors"
                  >
                    View Campaign
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2 space-y-12">
            {/* Campaign Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Campaign Overview</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  This content marketing campaign was designed to increase brand awareness and drive engagement 
                  through strategic content creation and distribution across multiple channels.
                </p>
                <p>
                  Our approach combined data-driven insights with creative storytelling to deliver content 
                  that resonates with the target audience while achieving measurable business results.
                </p>
              </div>
            </section>

            {/* Strategy & Execution */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategy & Execution</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Strategy</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Audience research and persona development</li>
                    <li>• Content calendar planning</li>
                    <li>• Multi-channel distribution strategy</li>
                    <li>• Performance tracking and optimization</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Types</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Blog articles and thought leadership</li>
                    <li>• Social media content</li>
                    <li>• Video content and tutorials</li>
                    <li>• Email marketing campaigns</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Results Timeline */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Campaign Timeline</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phase 1: Research & Planning</h3>
                    <p className="text-gray-600 mt-1">Audience analysis, competitor research, and content strategy development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phase 2: Content Creation</h3>
                    <p className="text-gray-600 mt-1">Development of high-quality content across multiple formats and channels</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phase 3: Distribution & Promotion</h3>
                    <p className="text-gray-600 mt-1">Strategic content distribution and community engagement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phase 4: Results & Optimization</h3>
                    <p className="text-gray-600 mt-1">Performance analysis and campaign optimization based on data insights</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Takeaways */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <ul className="text-gray-700 space-y-3">
                  <li>• Data-driven content strategy leads to higher engagement rates</li>
                  <li>• Consistent brand voice across channels builds trust and recognition</li>
                  <li>• Regular performance analysis enables continuous improvement</li>
                  <li>• Quality content drives both traffic and conversions</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {item.technologies?.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 