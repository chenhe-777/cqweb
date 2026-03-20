import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我 - 陈琦',
  description: 'AI 用户理解与内容策略专家，10年内容经验，3年AI创业实战，探索AI在真实场景中的内容表达与用户理解。',
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
                AI 用户理解与内容策略 · 10年内容经验 · 3年 AI 创业实战
              </h2>
              <div className="space-y-6 text-[#111827] dark:text-text-dark text-lg leading-relaxed">
                <p>
                  我专注于 AI 在真实场景中的内容表达与用户理解。
                  过去 10 年，我一直在做一件事：把复杂的东西讲给普通人听。
                </p>
                <p>
                  2023 年加入 AI 创业公司后，我发现了一个反复出现的问题：
                  技术团队能做出很好的产品，但普通用户看不懂、不会用、不相信它有用。
                  这不是技术问题，而是理解与表达的问题——而这恰好是我最擅长的事。
                </p>
                <p>
                  10 年内容运营经验，让我积累了一种核心能力：
                  理解用户在哪里卡住，然后用内容帮他们跨过去。
                  现在，我将这种能力用于 AI 场景，持续探索 AI 工具在职场与日常中的真实用法。
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
                { skill: 'AI 内容策划', level: 95, icon: '📝' },
                { skill: 'AI 应用内容表达', level: 92, icon: '📱' },
                { skill: '多平台内容运营', level: 90, icon: '🌸' },
                { skill: '用户理解与内容转化', level: 88, icon: '💡' },
                { skill: '内容 SOP 体系搭建', level: 85, icon: '🎙️' },
                { skill: 'AI 工具实战应用', level: 87, icon: '📊' },
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
                    <p className="text-[#4B5563] dark:text-text-dark-secondary mb-1">2023.04 - 2026.03</p>
                    <p className="text-[#111827] dark:text-text-dark">
                      深度参与 AI 创业公司转型，聚焦大模型与 Agent 在职场/政企场景的落地应用。
                      负责 AI 产品的对外表达与商业叙事，将复杂的 AI 产品逻辑转化为普通人可理解的内容。
                      主导路演 PPT、产品介绍、解决方案文档等关键材料，同时建立 AI 辅助内容生产 SOP。
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
                    <h4 className="font-semibold text-[#111827] dark:text-text-dark mb-2">吴晓波频道·九零门 · 新媒体主编</h4>
                    <p className="text-[#4B5563] dark:text-text-dark-secondary mb-1">2021.10 - 2022.02</p>
                    <p className="text-[#111827] dark:text-text-dark">
                      统筹图文、短视频、直播多元内容矩阵，打通"内容引流—私域沉淀—服务转化"全链路。
                      通过数据复盘与流程优化，直播场均引流客户翻倍。
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
                      ✅ 3年 AI 创业公司实战，深度参与大模型产品的内容表达与商业化落地
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      ✅ 10年内容运营经验，覆盖新媒体矩阵、商业转化、直播 SOP 完整链路
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      ✅ 建立 AI 辅助内容生产 SOP，大幅提升多渠道营销物料产出效能
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      ✅ 个人 AI 应用类内容创作持续输出，聚焦普通用户的 AI 使用路径
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#111827] dark:text-text-dark">
                      ✅ 浙江大学应用生物本科，CET6，熟练运用主流 AI 大模型与工具
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
                      <strong>浙江大学</strong> · 应用生物专业（本科）<br/>
                      2012.08 - 2016.07 · 大三学年优秀学业奖学金
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
              如果你在寻找能理解用户、能把 AI 讲清楚的内容策略伙伴，欢迎联系我。
              让我们一起探讨 AI 内容如何真正帮助你的用户从"看懂"到"用起来"。
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
