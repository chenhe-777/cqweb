import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我 - 陈琦',
  description: '内容运营专家，专注于内容营销增长、用户运营、账号孵化',
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
                你好，我是陈琦
              </h1>
              <h2 className="text-xl lg:text-2xl text-[#4B5563] dark:text-text-dark-secondary mb-8 font-medium">
                内容运营专家 · 8年实战经验
              </h2>
              <div className="space-y-6 text-[#111827] dark:text-text-dark text-lg leading-relaxed">
                <p>
                  我是一名专注于<strong>内容营销增长</strong>的运营专家，拥有8年一线实战经验。我擅长通过内容策略帮助企业实现用户增长和品牌影响力的提升。
                </p>
                <p>
                  我的核心理念是<strong>"内容驱动增长"</strong>。通过深入理解用户需求，结合数据分析和创意策略，打造出能够真正打动用户的内容。我曾在多家公司担任内容运营相关职位，积累了从个人账号孵化到企业内容体系搭建的完整经验。
                </p>
                <p>
                  我对小红书、知乎、公众号等主流平台有深入研究，曾成功孵化多个<strong>万粉账号</strong>，并帮助企业建立完善的内容生产SOP体系。我相信优质的内容是连接品牌与用户的最佳桥梁。
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
                核心技能
              </h2>
              <p className="text-lg text-[#4B5563] dark:text-text-dark-secondary max-w-2xl mx-auto">
                结合实战经验与专业能力，为企业创造价值
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { skill: '内容策略', level: 95, icon: '📝' },
                { skill: '账号孵化', level: 92, icon: '📱' },
                { skill: '小红书运营', level: 90, icon: '🌸' },
                { skill: '知乎运营', level: 88, icon: '💡' },
                { skill: '直播SOP', level: 85, icon: '🎙️' },
                { skill: '数据分析', level: 87, icon: '📊' },
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
                  工作经历
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold text-[#111827] dark:text-text-dark mb-2">浙江深佳科技 · 企划部总监</h4>
                    <p className="text-[#4B5563] dark:text-text-dark-secondary mb-1">2023.03 - 至今</p>
                    <p className="text-[#111827] dark:text-text-dark">
                      负责公司内容营销战略制定与执行，统筹小红书、知乎、公众号等多平台运营工作。
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="font-semibold text-[#111827] dark:text-text-dark mb-2">光华赋能 · 内容运营负责人</h4>
                    <p className="text-[#4B5563] dark:text-text-dark-secondary mb-1">2021ATER05 - 2023.02</p>
                    <p className="text-[#111827] dark:text-text-dark">
                      搭建内容SOP体系，管理内容团队，实现内容产出效率提升300%。
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-6">
                    <h4 className="font-semibold text-[#111827] dark:text-text-dark mb-2">友笑信息科技 · 内容运营</h4>
                    <p className="text-[#4B5563] dark:text-text-dark-secondary mb-1">2019.10 - 2021.04</p>
                    <p className="text-[#111827] dark:text-text-dark">
                      负责抖音账号孵化与运营，实现账号从0到50万粉丝增长。
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-200 pl-6">
                    <h4 className="font-semibold text-[#111827] dark:text-text-dark mb-2">九零门 · 运营经理</h4>
                    <p className="text-[#4B5563] dark:text-text-dark-secondary mb-1">2017.06 - 2019.09</p>
                    <p className="text-[#111827] dark:text-text-dark">
                      负责课程产品运营与内容营销，实现变现GMV破百万。
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-100 pl-6">
                    <h4 className="font-semibold text-[#111827] dark:text-text-dark mb-2">初橙资本 · 实习生</h4>
                    <p className="text-[#4B5563] dark:text-text-dark-secondary mb-1">2017.03 - 2017.05</p>
                    <p className="text-[#111827] dark:text-text-dark">
                      协助撰写公众号文章，学习内容运营基础知识。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-[#1E3A8A] dark:text-text-dark mb-6">
                  个人成就
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      <strong>成功孵化</strong>多个万粉账号（知乎、小红书）
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      <strong>打造多篇</strong>爆款内容，单篇笔记点赞破万
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      <strong>搭建完整</strong>内容SOP体系，提升团队效率300%
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      <strong>8年</strong>内容运营一线实战经验
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      <strong>接受过</strong>多家媒体报道（初橙资本专访、九零门案例）
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#1E3A8A] dark:text-text-dark mb-6 mt-12">
                  教育背景
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      <strong>宁波财经学院</strong> · 市场营销专业
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
            <h2 className="text-3xl lg:text-4xl font font-heading font-bold text-[#1E3A8A] dark:text-text-dark mb-6">
              期待与你的合作
            </h2>
            <p className="text-lg text-[#4B5563] dark:text-text-dark-secondary mb-8 leading-relaxed">
              如果你有内容营销、账号孵化或直播运营的需求，欢迎联系我。
              让我们一起探讨如何通过内容策略实现你的业务增长。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E3A8A] hover:bg-blue-800 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                联系我
                <span>→</span>
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white rounded-full font-semibold transition-all duration-300"
              >
                查看作品
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
