import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - AI Content Pro',
  description: 'Learn more about AI Content Pro - Professional AI-driven content marketing specialist',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-bg-dark pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-[#1E3A8A] dark:text-text-dark mb-6 leading-tight">
                Hello, I'm Alex Chen
              </h1>
              <h2 className="text-xl lg:text-2xl text-[#4B5563] dark:text-text-dark-secondary mb-8 font-medium">
                AI Content Marketing Strategist & Innovation Enthusiast
              </h2>
              <div className="space-y-6 text-[#111827] dark:text-text-dark text-lg leading-relaxed">
                <p>
                  I'm passionate about <strong>transforming businesses through intelligent content strategies</strong> that leverage cutting-edge AI technologies. With over 5 years of experience in digital marketing and a deep understanding of AI tools, I specialize in creating solutions that make everyday tasks more efficient and impactful.
                </p>
                <p>
                  My mission is to develop <strong>100 practical AI use cases</strong> that demonstrate the real-world applications of artificial intelligence in content creation, marketing automation, and business growth. I believe that AI should be accessible and beneficial for everyone, not just tech giants.
                </p>
                <p>
                  Having worked with Fortune 500 companies and managed multiple social media accounts reaching over <strong>500K+ combined followers</strong>, I consistently focus on delivering exceptional results using cutting-edge tools like GPT-4, Claude, Midjourney, and emerging AI technologies.
                </p>
              </div>
            </div>

            {/* Right Content - Professional Photo */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  {/* Orange background circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full transform scale-110 opacity-90"></div>
                  {/* Photo placeholder */}
                  <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-orange-300 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-8xl">👨‍💼</div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-600 rounded-full opacity-40"></div>
                  <div className="absolute top-1/2 -right-8 w-6 h-6 bg-orange-300 rounded-full opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-20 bg-gray-50 dark:bg-bg-dark-secondary">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#1E3A8A] dark:text-text-dark mb-4">
                Core Expertise
              </h2>
              <p className="text-lg text-[#4B5563] dark:text-text-dark-secondary max-w-2xl mx-auto">
                Combining strategic thinking with technical proficiency to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { skill: 'Content Strategy', level: 95, icon: '📝' },
                { skill: 'AI Tools Mastery', level: 92, icon: '🤖' },
                { skill: 'Social Media Marketing', level: 88, icon: '📱' },
                { skill: 'Data Analytics', level: 85, icon: '📊' },
                { skill: 'SEO Optimization', level: 87, icon: '🔍' },
                { skill: 'Marketing Automation', level: 90, icon: '⚡' },
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{item.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-[#111827] dark:text-text-dark">{item.skill}</span>
                        <span className="text-sm text-[#4B5563] dark:text-text-dark-secondary font-medium">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-[#1E3A8A] to-blue-600 dark:from-primary-dark dark:to-secondary-dark h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Journey */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-heading font-bold text-[#1E3A8A] dark:text-text-dark mb-6">
                  Professional Journey
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold text-[#111827] dark:text-text-dark mb-2">AI Content Strategist</h4>
                    <p className="text-[#4B5563] dark:text-text-dark-secondary mb-1">2022 - Present</p>
                    <p className="text-[#111827] dark:text-text-dark">
                      Leading AI-driven content initiatives for enterprise clients, developing automated workflows that increased content production efficiency by 300%.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="font-semibold text-[#111827] dark:text-text-dark mb-2">Digital Marketing Manager</h4>
                    <p className="text-[#4B5563] dark:text-text-dark-secondary mb-1">2020 - 2022</p>
                    <p className="text-[#111827] dark:text-text-dark">
                      Managed comprehensive digital marketing campaigns for B2B SaaS companies, achieving an average 250% ROI improvement.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-6">
                    <h4 className="font-semibold text-[#111827] dark:text-text-dark mb-2">Content Marketing Specialist</h4>
                    <p className="text-[#4B5563] dark:text-text-dark-secondary mb-1">2019 - 2020</p>
                    <p className="text-[#111827] dark:text-text-dark">
                      Created and executed content strategies that generated over 1M+ organic impressions and 50K+ leads for various startups.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-[#1E3A8A] dark:text-text-dark mb-6">
                  Key Achievements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      <strong>500K+ followers</strong> across managed social media accounts
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      <strong>100+ AI use cases</strong> documented and implemented for real-world scenarios
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      <strong>15+ Fortune 500</strong> companies served with AI content strategies
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      <strong>300% efficiency increase</strong> in content production through AI automation
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      <strong>Award-winning campaigns</strong> recognized by industry publications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-white dark:bg-bg-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#1E3A8A] dark:text-text-dark mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-lg text-[#4B5563] dark:text-text-dark-secondary mb-8 leading-relaxed">
              Let's discuss how AI-driven content strategies can revolutionize your business growth. 
              I'm always excited to explore new opportunities and collaborate on innovative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E3A8A] hover:bg-blue-800 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
                <span>→</span>
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white rounded-full font-semibold transition-all duration-300"
              >
                View My Work
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 