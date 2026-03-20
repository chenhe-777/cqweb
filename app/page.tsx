import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark pt-20">
      {/* Hero Section */}
      <div className="container-custom py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light dark:text-text-dark mb-6">
            你好，我是{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark">
              陈琦
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-text-light-secondary dark:text-text-text-dark-secondary max-w-2xl mx-auto mb-8">
            10年内容运营经验，近3年深度参与 AI 创业公司转型。
            专注于 AI 在真实业务场景中的内容表达，帮助普通用户从"看懂 AI"到"用起来"。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-primary-dark text-white dark:text-bg-dark rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              查看我的内容与作品
              <span>→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary dark:border-primary-dark text-primary dark:text-primary-dark rounded-full font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary-dark dark:hover:text-bg-dark transition-all duration-300"
            >
              <span>↓</span>
              联系我
            </Link>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="section-padding bg-bg-light-secondary dark:bg-bg-dark-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
              我的专长
            </h2>
            <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
              结合专业技能与创意思维，提供卓越成果
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary-dark/20 transition-colors">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                AI 内容策划
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                AI 应用场景拆解、工具教程、用户认知引导
              </p>
            </div>

            <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary-dark/20 transition-colors">
                <span className="text-2xl">🎯</span>
              </div>
                           <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                内容转化转化策略
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                内容驱动用户从"看懂"到"愿意行动"的完整链路
              </p>
            </div>

            <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary-dark/20 transition-colors">
                <span className="text-2xl">📐</span>
              </div>
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                内容 SOP 体系
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                建立可复用的内容生产流程，提升多渠道产出效能
              </p>
            </div>

            <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary-dark/20 transition-colors">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                多平台内容运营
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                公众号、知乎、小红书等平台的选题、分发与数据优化
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
              精选项目
            </h2>
            <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
              AI 内容创作与内容策略实战案例
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-bg-light-secondary dark:bg-bg-dark-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary-dark/20 dark:to-secondary-dark/20 flex items-center justify-center">
                <div className="text-primary dark:text-primary-dark text-4xl">🤖</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                  AI 应用类内容创作
                </h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4">
                  面向普通用户的 AI 工具教程与应用场景拆解，持续输出于公众号
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    AI内容
                  </span>
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    公众号
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-bg-light-secondary dark:bg-bg-dark-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary-dark/20 dark:to-secondary-dark/20 flex items-center justify-center">
                <div className="text-primary dark:text-primary-dark text-4xl">🚀</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                  AI 创业实战
                </h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4">
                  3年 AI 创业公司企划总监，负责大模型产品的对外表达与内容营销落地
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    AI产品
                  </span>
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    商业化内容
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
                  内容策略与转化实践
                </h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4">
                  吴晓波频道·九零门商业推文项目，单篇推文引导客户转化30+
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    商业内容
                  </span>
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    转化策略
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-primary-dark text-white dark:text-bg-dark rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              查看更多内容
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
