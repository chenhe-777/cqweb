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
          <p className="text-lg lg:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto mb-8">
            8年内容运营经验，专注内容营销增长、用户运营、账号孵化。
            曾打造多个<strong>万粉账号</strong>，擅长小红书、知乎、公众号等多平台内容运营。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-primary-dark text-white dark:text-bg-dark rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              查看作品集
              <span>→</span>
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary dark:border-primary-dark text-primary dark:text-primary-dark rounded-full font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary-dark dark:hover:text-bg-dark transition-all duration-300"
            >
              <span>↓</span>
              联系我
            </a>
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
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                内容营销
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                多平台内容策略、选题策划、爆文打造
              </p>
            </div>
            
            <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary-dark/20 transition-colors">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                账号孵化
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                从0到1打造万粉账号，提升品牌影响力
              </p>
            </div>
            
            <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary-dark/20 transition-colors">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                直播运营
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                直播SOP设计、会销转化、数据复盘
              </p>
            </div>
            
            <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary-dark/20 transition-colors">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                数据分析
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                内容数据监控、效果分析、策略优化
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
              展示部分内容营销与用户增长实战案例
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-bg-light-secondary dark:bg-bg-dark-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary-dark/20 dark:to-secondary-dark/20 flex items-center justify-center">
                <div className="text-primary dark:text-primary-dark text-4xl">🚀</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                  知乎万粉账号增长
                </h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4">
                  从0到万粉的知乎账号运营，建立个人IP，提升行业影响力
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    知乎
                  </span>
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    冷启动
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
                  小红书爆文打造
                </h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4">
                  打造多篇爆款笔记，单篇笔记点赞破万，带动账号快速增长
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    小红书
                  </span>
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text:text-dark text-sm rounded-full">
                    爆文策略
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
                  直播SOP体系搭建
                </h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4">
                  从0到1搭建直播运营SOP，规范流程，提升转化效率
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    直播策划
                  </span>
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-sm rounded-full">
                    SOP固化
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
              查看更多项目
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 