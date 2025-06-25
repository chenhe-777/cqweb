'use client';

import { useState, useMemo } from 'react'
import { portfolioItems, categories } from '@/data/portfolio'

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return portfolioItems
    }
    return portfolioItems.filter(item => item.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="min-h-screen bg-white dark:bg-bg-dark pt-20">
      {/* Header Section */}
      <section className="py-16 bg-white dark:bg-bg-dark">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-[#111827] dark:text-text-dark mb-6">
              My Portfolio
            </h1>
            <p className="text-lg text-[#4B5563] dark:text-text-dark-secondary leading-relaxed">
              A showcase of AI-driven content marketing projects, innovative solutions, and successful case studies 
              that demonstrate the power of artificial intelligence in modern marketing.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const isActive = activeCategory === category.id
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${isActive 
                      ? 'bg-[#3B82F6] text-white shadow-lg transform scale-105' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105'
                    }
                  `}
                >
                  {category.label}
                  <span className={`ml-2 text-xs ${isActive ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                    ({category.count})
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Simple Grid */}
      <section className="py-8 bg-gray-50 dark:bg-bg-dark-secondary">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {filteredItems.map((item, index) => (
                 <div
                   key={item.id}
                   className="group bg-white dark:bg-bg-dark rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden opacity-0 animate-fadeInUp"
                   style={{
                     animationDelay: `${index * 100}ms`,
                     animationFillMode: 'forwards'
                   }}
                 >
                   {/* Thumbnail */}
                   <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center">
                     <div className="text-6xl group-hover:scale-105 transition-transform duration-300">
                       {item.thumbnail}
                     </div>
                     {item.featured && (
                       <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                         Featured
                       </div>
                     )}
                   </div>

                   {/* Content */}
                   <div className="p-6">
                     {/* Category & Date */}
                     <div className="flex items-center justify-between mb-3">
                       <span className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
                         {item.category.replace('-', ' ')}
                       </span>
                       <span className="text-xs text-gray-500 dark:text-gray-400">
                         {new Date(item.publishDate).toLocaleDateString('en-US', { 
                           year: 'numeric', 
                           month: 'short' 
                         })}
                       </span>
                     </div>

                     {/* Title */}
                     <h3 className="text-lg font-semibold text-[#111827] dark:text-text-dark mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                       {item.title}
                     </h3>

                     {/* Description */}
                     <p className="text-sm text-[#4B5563] dark:text-text-dark-secondary mb-4 line-clamp-3">
                       {item.description}
                     </p>

                     {/* Tags */}
                     <div className="flex flex-wrap gap-2 mb-4">
                       {item.tags.slice(0, 3).map((tag) => (
                         <span
                           key={tag}
                           className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                         >
                           {tag}
                         </span>
                       ))}
                       {item.tags.length > 3 && (
                         <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                           +{item.tags.length - 3}
                         </span>
                       )}
                     </div>

                     {/* Metrics */}
                     {item.metrics && (
                       <div className="flex items-center gap-4 mb-4 text-xs text-gray-600 dark:text-gray-400">
                         {item.metrics.views && (
                           <span className="flex items-center gap-1">
                             👁️ {item.metrics.views.toLocaleString()} views
                           </span>
                         )}
                         {item.metrics.roi && (
                           <span className="flex items-center gap-1">
                             📈 {item.metrics.roi}
                           </span>
                         )}
                       </div>
                     )}

                     {/* Footer */}
                     <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                       {/* Links */}
                       <div className="flex items-center gap-3">
                         {item.links?.github && (
                           <a
                             href={item.links.github}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors hover:rotate-12 transform duration-200"
                             aria-label="GitHub Repository"
                           >
                             💻
                           </a>
                         )}
                         {item.links?.demo && (
                           <a
                             href={item.links.demo}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                             aria-label="Live Demo"
                           >
                             🔗
                           </a>
                         )}
                         {item.links?.article && (
                           <a
                             href={item.links.article}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                             aria-label="Read Article"
                           >
                             📄
                           </a>
                         )}
                       </div>

                       {/* View Details */}
                       <a
                         href={`/portfolio/${item.slug}`}
                         className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors hover:underline"
                       >
                         View Details →
                       </a>
                     </div>
                   </div>
                 </div>
               ))}
                         </div>
           </div>
         </div>
       </section>

       {/* Call to Action */}
       <section className="py-16 bg-white dark:bg-bg-dark">
         <div className="container-custom">
           <div className="text-center max-w-3xl mx-auto">
             <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#111827] dark:text-text-dark mb-6">
               Ready to Start Your Next Project?
             </h2>
             <p className="text-lg text-[#4B5563] dark:text-text-dark-secondary mb-8">
               Let's collaborate on innovative AI-driven content strategies that deliver exceptional results.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a
                 href="/contact"
                 className="inline-flex items-center gap-2 px-8 py-4 bg-[#3B82F6] hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
               >
                 Start a Project
                 <span>→</span>
               </a>
               <a
                 href="/about"
                 className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white rounded-lg font-semibold transition-all duration-300"
               >
                 Learn More About Me
                 <span>↗</span>
               </a>
             </div>
           </div>
         </div>
       </section>
     </div>
   )
 } 