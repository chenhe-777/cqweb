'use client';

import { useState } from 'react'

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacyPolicy: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        privacyPolicy: false
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-bg-dark pt-20">
      {/* Header Section */}
      <section className="py-16 bg-white dark:bg-bg-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-[#1E3A8A] dark:text-text-dark mb-6">
              Contact Me
            </h1>
            <p className="text-lg text-[#4B5563] dark:text-text-dark-secondary leading-relaxed">
              Ready to transform your content strategy with AI? Let's discuss your project and explore how we can achieve your goals together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 bg-gray-50 dark:bg-bg-dark-secondary">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information Section */}
              <div className="bg-white dark:bg-bg-dark p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-heading font-bold text-[#1E3A8A] dark:text-text-dark mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  {/* Email Information */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827] dark:text-text-dark mb-2">Email</h3>
                      <p className="text-[#4B5563] dark:text-text-dark-secondary">
                        contact@alexchen.dev
                      </p>
                      <p className="text-sm text-[#4B5563] dark:text-text-dark-secondary mt-1">
                        Best for project inquiries
                      </p>
                    </div>
                  </div>

                  {/* Phone Information */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827] dark:text-text-dark mb-2">Phone</h3>
                      <p className="text-[#4B5563] dark:text-text-dark-secondary">
                        +1 (234) 567-890
                      </p>
                      <p className="text-sm text-[#4B5563] dark:text-text-dark-secondary mt-1">
                        Available Mon-Fri, 9AM-6PM EST
                      </p>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827] dark:text-text-dark mb-2">Location</h3>
                      <p className="text-[#4B5563] dark:text-text-dark-secondary">
                        Beijing, China
                      </p>
                      <p className="text-sm text-[#4B5563] dark:text-text-dark-secondary mt-1">
                        Remote work worldwide
                      </p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827] dark:text-text-dark mb-2">Response Time</h3>
                      <p className="text-[#4B5563] dark:text-text-dark-secondary">
                        Within 24 hours
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                          Available for new projects
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-[#E5E7EB] dark:border-gray-700">
                  <h3 className="font-semibold text-[#111827] dark:text-text-dark mb-4">
                    Connect on Social
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#1E3A8A]/10 hover:bg-[#1E3A8A]/20 dark:bg-primary-dark/10 dark:hover:bg-primary-dark/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <span className="text-xl">💼</span>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#1E3A8A]/10 hover:bg-[#1E3A8A]/20 dark:bg-primary-dark/10 dark:hover:bg-primary-dark/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <span className="text-xl">🐦</span>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#1E3A8A]/10 hover:bg-[#1E3A8A]/20 dark:bg-primary-dark/10 dark:hover:bg-primary-dark/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <span className="text-xl">💻</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Message Form Section */}
              <div className="bg-white dark:bg-bg-dark p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-heading font-bold text-[#1E3A8A] dark:text-text-dark mb-8">
                  Send a Message
                </h2>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-700 dark:text-green-400 font-medium">
                      ✅ Message sent successfully! I'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-700 dark:text-red-400 font-medium">
                      ❌ Failed to send message. Please try again or contact me directly via email.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#111827] dark:text-text-dark mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-white dark:bg-bg-dark border border-[#E5E7EB] dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-primary-dark focus:border-transparent text-[#111827] dark:text-text-dark transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#111827] dark:text-text-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email"
                      className="w-full px-4 py-3 bg-white dark:bg-bg-dark border border-[#E5E7EB] dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-primary-dark focus:border-transparent text-[#111827] dark:text-text-dark transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#111827] dark:text-text-dark mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Message subject"
                      className="w-full px-4 py-3 bg-white dark:bg-bg-dark border border-[#E5E7EB] dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-primary-dark focus:border-transparent text-[#111827] dark:text-text-dark transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#111827] dark:text-text-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message"
                      rows={6}
                      className="w-full px-4 py-3 bg-white dark:bg-bg-dark border border-[#E5E7EB] dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-primary-dark focus:border-transparent text-[#111827] dark:text-text-dark transition-all duration-300 resize-none"
                      required
                    />
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacyPolicy"
                      name="privacyPolicy"
                      checked={formData.privacyPolicy}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-[#1E3A8A] border-[#E5E7EB] rounded focus:ring-[#1E3A8A] dark:focus:ring-primary-dark"
                      required
                    />
                    <label htmlFor="privacyPolicy" className="text-sm text-[#4B5563] dark:text-text-dark-secondary">
                      I agree to the website's privacy policy and terms of service *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.privacyPolicy}
                    className="w-full px-8 py-4 bg-[#1E3A8A] hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-bg-dark">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#1E3A8A] dark:text-text-dark mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#4B5563] dark:text-text-dark-secondary">
                Get quick answers to common questions about my services and process
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "What types of projects do you work on?",
                  answer: "I specialize in AI-driven content marketing strategies, social media management, content automation, SEO optimization, and marketing technology implementation. I work with startups, SMBs, and enterprise clients."
                },
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on scope and complexity. Content strategy projects typically take 2-4 weeks, while comprehensive marketing automation setups can take 6-8 weeks. I provide detailed timelines during our initial consultation."
                },
                {
                  question: "Do you offer ongoing support and maintenance?",
                  answer: "Yes! I offer monthly retainer packages for ongoing content creation, strategy optimization, performance monitoring, and AI tool maintenance. This ensures your marketing stays current and effective."
                },
                {
                  question: "What AI tools do you use in your work?",
                  answer: "I work with cutting-edge AI tools including GPT-4, Claude, Midjourney, Canva AI, HubSpot AI, Jasper, and various automation platforms. I stay updated with the latest AI developments to provide the best solutions."
                },
                {
                  question: "Can you work with my existing marketing team?",
                  answer: "Absolutely! I often collaborate with in-house marketing teams, providing AI expertise, training, and strategic guidance. I can work as an extension of your team or lead specific AI initiatives."
                },
                {
                  question: "What's your approach to measuring success?",
                  answer: "I focus on data-driven results including engagement rates, conversion metrics, lead generation, brand awareness, and ROI. I provide detailed analytics reports and regular performance reviews to track progress against your goals."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 dark:bg-bg-dark-secondary p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#111827] dark:text-text-dark mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[#4B5563] dark:text-text-dark-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Contact CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
              <h3 className="text-xl font-semibold text-[#111827] dark:text-text-dark mb-2">
                Still have questions?
              </h3>
              <p className="text-[#4B5563] dark:text-text-dark-secondary mb-4">
                I'm here to help! Feel free to reach out for a free consultation.
              </p>
              <a
                href="mailto:contact@alexchen.dev"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A8A] hover:bg-blue-800 text-white rounded-lg font-semibold transition-all duration-300"
              >
                Schedule a Call
                <span>📞</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 