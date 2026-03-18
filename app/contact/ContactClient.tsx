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
              联系我
            </h1>
            <p className="text-lg text-[#4B5563] dark:text-text-dark-secondary leading-relaxed">
              如果你有内容营销、账号孵化或直播运营的需求，欢迎联系我。
              让我们一起探讨如何通过内容策略实现你的业务增长。
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
                  联系方式
                </h2>

                <div className="space-y-6">
                  {/* Email Information */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827] dark:text-text-dark mb-2">邮箱</h3>
                      <p className="text-[#4B5563] dark:text-text-dark-secondary">
                        your-email@example.com
                      </p>
                      <p className="text-sm text-[#4B5563] dark:text-text-dark-secondary mt-1">
                        最适合项目咨询
                      </p>
                    </div>
                  </div>

                  {/* Phone Information */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827] dark:text-text-dark mb-2">电话</h3>
                      <p className="text-[#4B5563] dark:text-text-dark-secondary">
                        18868852007
                      </p>
                      <p className="text-sm text-[#4B5563] dark:text-text-dark-secondary mt-1">
                        工作日 9:00-18:00
                      </p>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827] dark:text-text-dark mb-2">地点</h3>
                      <p className="text-[#4B5563] dark:text-text-dark-secondary">
                        浙江杭州
                      </p>
                      <p className="text-sm text-[#4B5563] dark:text-text-dark-secondary mt-1">
                        支持远程协作
                      </p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827] dark:text-text-dark mb-2">回复时间</h3>
                      <p className="text-[#4B5563] dark:text-text-dark-secondary">
                        24小时内
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                          接受新项目
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-[#E5E7EB] dark:border-gray-700">
                  <h3 className="font-semibold text-[#111827] dark:text-text-dark mb-4">
                    社交媒体
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
                  发送消息
                </h2>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-700 dark:text-green-400 font-medium">
                      ✅ 消息发送成功！我会在24小时内回复。
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-700 dark:text-red-400 font-medium">
                      ❌ 消息发送失败，请重试或直接通过邮件联系我。
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#111827] dark:text-text-dark mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="你的姓名"
                      className="w-full px-4 py-3 bg-white dark:bg-bg-dark border border-[#E5E7EB] dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-primary-dark focus:border-transparent text-[#111827] dark:text-text-dark transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#111827] dark:text-text-dark mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="你的邮箱"
                      className="w-full px-4 py-3 bg-white dark:bg-bg-dark border border-[#E5E7EB] dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-primary-dark focus:border-transparent text-[#111827] dark:text-text-dark transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#111827] dark:text-text-dark mb-2">
                      主题 *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="消息主题"
                      className="w-full px-4 py-3 bg-white dark:bg-bg-dark border border-[#E5E7EB] dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-primary-dark focus:border-transparent text-[#111827] dark:text-text-dark transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#111827] dark:text-text-dark mb-2">
                      消息内容 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="你的消息"
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
                      我同意网站隐私政策和服务条款 *
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
                        发送中...
                      </span>
                    ) : (
                      '发送消息'
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
                常见问题
              </h2>
              <p className="text-lg text-[#4B5563] dark:text-text-dark-secondary">
                快速了解关于我的服务和流程的常见问题
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { question: "你主要做哪些类型的项目？", answer: "我专注于内容营销增长策略、社交账号管理、内容自动化、SEO优化和营销技术实施。与初创公司、中小企业和企业客户合作。" },
                { question: "典型项目需要多长时间？", answer: "项目时间范围取决于规模和复杂度。内容策略项目通常需要2-4周，而完整的营销自动化设置可能需要6-8周。在初始咨询期间提供详细的时间表。" },
                { question: "你提供持续支持吗？", answer: "是的！我提供月度套餐，用于持续内容创作、策略优化、性能监控和AI工具维护。这确保您的营销保持当前和有效。" },
                { question: "你在工作中使用哪些AI工具？", answer: "我使用前沿的AI工具，包括GPT-4、Claude、Midjourney、Canva AI、HubSpot AI、Jasper和各种自动化平台。我及时了解最新的AI发展以提供最佳解决方案。" },
                { question: "你能与我的现有营销团队合作吗？", answer: "当然！我经常与内部营销团队协作，提供AI专业知识、培训和战略指导。我可以作为您团队的扩展或领导特定的AI倡议。" },
                { question: "你如何衡量成功？", answer: "我专注于数据驱动结果，包括参与率、转化指标、潜在客户生成、品牌知名度和ROI。我提供详细的分析报告和定期的绩效审查，以根据您的目标跟踪进度。" }
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
                还有疑问？
              </h3>
              <p className="text-[#4B5563] dark:text-text-dark-secondary mb-4">
                我在这里帮助你！随时联系我进行免费咨询。
              </p>
              <a
                href="mailto:your-email@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A8A] hover:bg-blue-800 text-white rounded-lg font-semibold transition-all duration-300"
              >
                预约电话
                <span>📞</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
