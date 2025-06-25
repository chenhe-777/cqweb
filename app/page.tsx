export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark pt-20">
      {/* Hero Section */}
      <div className="container-custom py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light dark:text-text-dark mb-6">
            Hello, I am{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark">
              Developer
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto mb-8">
            Transforming businesses through AI-powered content strategies. 
            Specializing in creating <strong>100 practical AI use cases</strong> that 
            make work and life more efficient for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-primary-dark text-white dark:text-bg-dark rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
              <span>→</span>
            </a>
            
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary dark:border-primary-dark text-primary dark:text-primary-dark rounded-full font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary-dark dark:hover:text-bg-dark transition-all duration-300"
            >
              <span>↓</span>
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      {/* Expertise Section */}
      <div className="section-padding bg-bg-light-secondary dark:bg-bg-dark-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
              My Expertise
            </h2>
            <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
              Combining technical skills with creative vision to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary-dark/20 transition-colors">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                AI Development
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                Building intelligent solutions with machine learning and natural language processing
              </p>
            </div>
            
            <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary-dark/20 transition-colors">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                Content Strategy
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                Creating compelling narratives that resonate with target audiences
              </p>
            </div>
            
            <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary-dark/20 transition-colors">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                Process Automation
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                Streamlining workflows with AI-powered automation tools
              </p>
            </div>
            
            <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary-dark/20 transition-colors">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                Digital Marketing
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                Scaling reach through data-driven digital marketing campaigns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="section-padding bg-bg-light dark:bg-bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
              Showcasing some of my most impactful AI-driven content marketing projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-bg-light-secondary dark:bg-bg-dark-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary-dark/20 dark:to-secondary-dark/20 flex items-center justify-center">
                <div className="text-primary dark:text-primary-dark text-4xl">🚀</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                  Enterprise AI Strategy
                </h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4">
                  Developed comprehensive AI content strategy for Fortune 500 company, resulting in 300% engagement increase
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    AI Strategy
                  </span>
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    Analytics
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-bg-light-secondary dark:bg-bg-dark-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary-dark/20 dark:to-secondary-dark/20 flex items-center justify-center">
                <div className="text-primary dark:text-primary-dark text-4xl">📱</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                  Social Media Growth
                </h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4">
                  Managed 3 social media accounts with AI-assisted content creation, achieving 150K+ followers
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    Social Media
                  </span>
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    AI Content
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-bg-light-secondary dark:bg-bg-dark-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary-dark/20 dark:to-secondary-dark/20 flex items-center justify-center">
                <div className="text-primary dark:text-primary-dark text-4xl">🎯</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                  AI Use Case Library
                </h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4">
                  Created 100+ practical AI use cases for everyday scenarios, downloaded by 10K+ users
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    AI Research
                  </span>
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    Documentation
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-primary-dark text-white dark:text-bg-dark rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View More Projects
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 