# 🚀 个人品牌网站

一个现代化的Next.js个人品牌网站，专为AI内容策略师设计。

## ✨ 功能特性

- 🎨 现代化UI设计，支持暗黑模式
- 📱 完全响应式布局
- 🚀 优化的性能和SEO
- 📝 博客系统（可选Notion集成）
- 🎯 作品集展示
- 📞 联系表单
- 🌙 自动主题切换

## 🛠️ 技术栈

- **框架**: Next.js 15.3.4
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **字体**: Google Fonts (Montserrat, Inter, Fira Code)
- **动画**: CSS Transitions + Tailwind Animations
- **类型检查**: TypeScript

## 🚀 快速开始

### 本地开发

1. **克隆仓库**
   ```bash
   git clone <your-repo-url>
   cd cqweb
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **配置环境变量**
   ```bash
   cp env.example .env.local
   # 编辑 .env.local 文件，填入你的配置
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   ```

5. **访问** http://localhost:3000

### 生产构建

```bash
npm run build
npm start
```

## 📦 部署指南

### Vercel 部署（推荐）

1. **推送代码到GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **连接Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 导入GitHub仓库
   - 配置环境变量
   - 自动部署完成！

### Netlify 部署

1. 连接GitHub仓库到Netlify
2. 构建设置：
   - 构建命令：`npm run build`
   - 发布目录：`.next`

### 自托管服务器

1. 构建项目：`npm run build`
2. 启动应用：`npm start`
3. 配置反向代理（推荐nginx）

## ⚙️ 配置说明

### 环境变量

| 变量名 | 描述 | 必需 |
|--------|------|------|
| `NEXT_PUBLIC_SITE_URL` | 网站域名 | 是 |
| `NEXT_PUBLIC_SITE_NAME` | 网站名称 | 是 |
| `NOTION_TOKEN` | Notion API密钥 | 否 |
| `CONTACT_EMAIL` | 联系邮箱 | 否 |

### 自定义配置

1. **个人信息** - 编辑 `/data/portfolio.ts` 和 `/data/blog.ts`
2. **样式主题** - 修改 `tailwind.config.ts`
3. **内容更新** - 更新各页面组件

## 📁 项目结构

```
cqweb/
├── app/                 # Next.js App Router
│   ├── about/          # 关于页面
│   ├── blog/           # 博客页面
│   ├── contact/        # 联系页面
│   ├── portfolio/      # 作品集页面
│   └── globals.css     # 全局样式
├── components/         # 可复用组件
├── data/              # 静态数据
├── lib/               # 工具函数
└── public/            # 静态资源
```

## 🔧 维护指南

### 更新内容

1. **添加博客文章** - 编辑 `/data/blog.ts`
2. **添加项目案例** - 编辑 `/data/portfolio.ts`
3. **更新个人信息** - 修改各页面组件

### 性能优化

- ✅ 已配置图片优化
- ✅ 已启用静态生成
- ✅ 已优化CSS加载
- ✅ 已配置字体优化

## 🎯 SEO优化

- ✅ 结构化数据
- ✅ Meta标签优化
- ✅ OpenGraph支持
- ✅ 响应式图片
- ✅ 语义化HTML

## 📞 支持

如果遇到问题，请检查：

1. Node.js版本 >= 18
2. 依赖是否正确安装
3. 环境变量配置
4. 构建日志输出

## 📄 许可证

MIT License

---

**🎉 恭喜！你的个人品牌网站已准备就绪！**

现在可以开始部署和推广你的网站了。记得定期更新内容，保持网站活跃度。 