'use client'

import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

export default function HeroSection() {
  const codeLines = [
    "import { ContentStrategy } from './ai-marketing'",
    "",
    "function createImpact() {",
    "  const strategy = new ContentStrategy({",
    "    audience: 'global',",
    "    approach: 'AI-driven',",
    "    results: 'extraordinary'",
    "  })",
    "",
    "  return strategy.transform()",
    "}"
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-bg-light to-bg-light-secondary dark:from-bg-dark dark:to-bg-dark-secondary">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 dark:bg-primary-dark/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 dark:bg-secondary-dark/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-primary/3 to-secondary/3 dark:from-primary-dark/5 dark:to-secondary-dark/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark rounded-full text-sm font-medium mb-6">
              ✨ AI Content Strategist
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-text-light dark:text-text-dark mb-6">
              Hello, I am{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark">
                Developer
              </span>
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed text-text-light-secondary dark:text-text-dark-secondary mb-8 max-w-lg">
              Transforming businesses through AI-powered content strategies. 
              Specializing in creating <strong>100 practical AI use cases</strong> that 
              make work and life more efficient for everyone.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-primary-dark text-white dark:text-bg-dark rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-cyan-500/25 dark:hover:shadow-cyan-500/40 hover:scale-105"
              >
                View My Work
                <ArrowRight size={20} />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary dark:border-primary-dark text-primary dark:text-primary-dark rounded-full font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary-dark dark:hover:text-bg-dark transition-all duration-300 hover:scale-105"
              >
                <Download size={20} />
                Download CV
              </Link>
            </div>
          </div>

          {/* Right side - Code editor mockup */}
          <div className="relative">
            <div className="relative bg-gray-900 dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-700 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm ml-4 font-mono">strategy.ts</div>
              </div>
              
              {/* Code content */}
              <div className="p-6 font-mono text-sm">
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className="flex items-center min-h-[24px] opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <span className="text-gray-500 w-8 text-right mr-4">
                      {line && (index + 1)}
                    </span>
                    <span className="text-gray-300">
                      {line.includes('import') && (
                        <>
                          <span className="text-purple-400">import</span>
                          <span className="text-gray-300"> &#123; </span>
                          <span className="text-blue-400">ContentStrategy</span>
                          <span className="text-gray-300"> &#125; </span>
                          <span className="text-purple-400">from</span>
                          <span className="text-green-400"> './ai-marketing'</span>
                        </>
                      )}
                      {line.includes('function') && (
                        <>
                          <span className="text-purple-400">function</span>
                          <span className="text-yellow-400"> createImpact</span>
                          <span className="text-gray-300">() &#123;</span>
                        </>
                      )}
                      {line.includes('const strategy') && (
                        <>
                          <span className="text-gray-300">  </span>
                          <span className="text-purple-400">const</span>
                          <span className="text-blue-400"> strategy</span>
                          <span className="text-gray-300"> = </span>
                          <span className="text-purple-400">new</span>
                          <span className="text-yellow-400"> ContentStrategy</span>
                          <span className="text-gray-300">(&#123;</span>
                        </>
                      )}
                      {line.includes('audience:') && (
                        <>
                          <span className="text-gray-300">    </span>
                          <span className="text-red-400">audience</span>
                          <span className="text-gray-300">: </span>
                          <span className="text-green-400">'global'</span>
                          <span className="text-gray-300">,</span>
                        </>
                      )}
                      {line.includes('approach:') && (
                        <>
                          <span className="text-gray-300">    </span>
                          <span className="text-red-400">approach</span>
                          <span className="text-gray-300">: </span>
                          <span className="text-green-400">'AI-driven'</span>
                          <span className="text-gray-300">,</span>
                        </>
                      )}
                      {line.includes('results:') && (
                        <>
                          <span className="text-gray-300">    </span>
                          <span className="text-red-400">results</span>
                          <span className="text-gray-300">: </span>
                          <span className="text-green-400">'extraordinary'</span>
                        </>
                      )}
                      {line.includes('  })') && (
                        <span className="text-gray-300">  &#125;)</span>
                      )}
                      {line.includes('return') && (
                        <>
                          <span className="text-gray-300">  </span>
                          <span className="text-purple-400">return</span>
                          <span className="text-gray-300"> strategy.</span>
                          <span className="text-yellow-400">transform</span>
                          <span className="text-gray-300">()</span>
                        </>
                      )}
                      {line === '}' && (
                        <span className="text-gray-300">&#125;</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating elements around code editor */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary dark:bg-primary-dark rounded-full opacity-20 animate-bounce" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary dark:bg-secondary-dark rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-text-light-secondary dark:border-text-dark-secondary rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-text-light-secondary dark:bg-text-dark-secondary rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  )
}