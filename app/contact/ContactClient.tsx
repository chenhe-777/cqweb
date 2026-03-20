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

  const [isSubmittingSubject, setIsSubmittingSubject] = useState(false)
  const [submitStatusSubject, setSubmitStatusSubject] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingSubject(true)

    // 模拟表单提交
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatusSubject('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        privacyPolicy: false
      })
    } catch (error) {
      setSubmitStatusSubject('error')
    } finally {
      setIsSubmittingSubject(false)
      setTimeout(() => setSubmitStatusSubject('idle'), 5000)
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
              如果你在寻找能理解用户、能把 AI 讲清楚的内容策略伙伴，欢迎联系我。
              无论是 AI 内容策划、AI 产品表达，还是单纯想交流想法，都可以找我聊聊。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50 dark:bg-bg-dark-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Contact Methods */}
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-bold text-[#1E3A8A] dark:text-text-dark mb-6">
                  联系方式
                </h2>

                {/* Email */}
                <div className="bg-white dark:bg-bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827] dark:text-text-dark mb-1">邮箱</h3>
                      <p className="text-[#4B5563] dark:text-text-dark-secondary">
                        chenhe27@foxmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white dark:bg-bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827] dark:text-text-dark mb-1">电话</h3>
                      <p className="text-[#4B5563] dark:text-text-dark-secondary">
                        18868852007
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white dark:bg-bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827] dark:text-text-dark mb-1">地点</h3>
                      <p className="text-[#4B5563] dark:text-text-dark-secondary">
                        浙江杭州
                      </p>
                      <p className="text-sm text-[#4B5563] dark:text-text-dark-secondary mt-1">
                        支持远程协作
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Status */}
                <div className="bg-white dark:bg-bg-dark p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827] dark:text-text-dark mb-2">回复状态</h3>
                      <p className="text-[#4B5563] dark:text-text-dark-secondary">
                        接受新项目
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                          欢迎交流合作
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Social Media */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-[#1E3A8A] dark:text-text-dark mb-6">
                  社交媒体
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {/* WeChat */}
                  <div
                    className="bg-white dark:bg-bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center"
                  >
                    <span className="text-4xl mb-3">💬</span>
                    <span className="font-medium text-[#111827] dark:text-text-dark">微信</span>
                    <span className="text-sm text-[#4B5563] dark:text-text-dark-secondary">扫码添加</span>
                  </div>

                  {/* Public Account */}
                  <a
                    href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5MjAzMzYgMjM5NDc="
                    target="_blank"
                    className="bg-white dark:bg-bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center"
                  >
                    <span className="text-4xl mb-3">📱</span>
                    <span className="font-medium text-[#111827] dark:text-text-dark">公众号</span>
                    <span className="text-sm text-[#4B5563] dark:text-text-dark-secondary">橘师傅的AI手记</span>
                  </a>

                  {/* Xiaohongshu */}
                  <div
                    className="bg-white dark:bg-bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center"
                  >
                    <span className="text-4xl mb-3">📕</span>
                    <span className="font-medium text-[#111827] dark:text-text-dark">小红书</span>
                    <span className="text-sm text-[#4B5563] dark:text-text-dark-secondary">@悬疑控陈河</span>
                  </div>

                  {/* Zhihu */}
                  <div
                    className="bg-white dark:bg-bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center"
                  >
                    <span className="text-4xl mb-3">🎓</span>
                    <span className="font-medium text-[#111827] dark:text-text-dark">知乎</span>
                    <span className="text-sm text-[#4B5563] dark:text-text-dark-secondary">@陈河</span>
                  </div>
                </div>

                {/* Direct Contact Note */}
                <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200 text-center">
                    最直接的方式是发邮件或打电话，我会在24小时内回复。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
