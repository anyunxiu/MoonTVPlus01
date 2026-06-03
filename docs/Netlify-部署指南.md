# MoonTVPlus 在 Netlify 上的完整部署指南

本指南介绍如何在 Netlify 上部署 MoonTVPlus，并集成 LunaTV 的源配置。

## 📋 目录

- [前置要求](#前置要求)
- [Netlify 部署步骤](#netlify-部署步骤)
- [环境变量配置](#环境变量配置)
- [集成 LunaTV 源](#集成-lunatv-源)
- [常见问题](#常见问题)

---

## 前置要求

1. **GitHub 账号** - 用于仓库管理
2. **Netlify 账号** - 访问 [netlify.com](https://netlify.com)
3. **MoonTVPlus 源代码** - Fork 本仓库或使用官方仓库

## Netlify 部署步骤

### 第一步：Fork 仓库（可选）

如果要保留自己的修改记录，建议先 Fork：

```bash
# 访问 https://github.com/anyunxiu/MoonTVPlus01
# 点击 "Fork" 按钮
```

### 第二步：连接 Netlify

1. 访问 [Netlify](https://app.netlify.com)
2. 点击 **"New site from Git"**
3. 选择 GitHub 并授权
4. 选择 MoonTVPlus01 仓库

### 第三步：配置构建设置

在 Netlify 部署前配置以下内容：

| 设置项 | 值 |
|------|-----|
| Build command | `pnpm install && pnpm build` |
| Publish directory | `.next` 或 `out` |
| Node version | 18.x 或 20.x |

### 第四步：设置环境变量

在 Netlify 控制面板：

1. 进入 **Site settings** → **Environment variables**
2. 添加以下环境变量：

```env
# 必需
USERNAME=admin
PASSWORD=your_secure_password
NEXT_PUBLIC_STORAGE_TYPE=localstorage

# 可选（推荐用于 Netlify）
NEXT_PUBLIC_SITE_NAME=MoonTVPlus
INIT_CONFIG=<见下方说明>
```

### 第五步：部署

1. 完成配置后，点击 **"Deploy"**
2. 等待部署完成（通常 5-10 分钟）
3. 访问生成的 URL

---

## 环境变量配置

### 1. 基础配置（必需）

```env
USERNAME=admin                          # 登录用户名
PASSWORD=YourSecurePassword123!        # 登录密码（必须强密码）
NEXT_PUBLIC_STORAGE_TYPE=localstorage  # Netlify 推荐使用 localstorage
NEXT_PUBLIC_SITE_NAME=MoonTVPlus       # 站点名称
```

### 2. 初始化配置（推荐）

使用 `INIT_CONFIG` 环境变量预配置源：

```env
INIT_CONFIG={"cache_time":3600,"api_site":{"dy01":{"name":"豆瓣资源","api":"https://api.dy01.cc/api.php/provide/vod"}},"custom_category":[{"name":"热门电影","type":"movie","query":"热门"}]}
```

---

## 集成 LunaTV 源

### 方案一：自动集成（推荐）

项目已内置 LunaTV 源配置。使用以下环境变量自动加载：

```env
INIT_CONFIG={"cache_time":3600,"api_site":{"dy01":{"name":"豆瓣资源","api":"https://api.dy01.cc/api.php/provide/vod"},"yingshi":{"name":"优酷资源","api":"https://yingshi.oss-cn-beijing.aliyuncs.com/api.php/provide/vod/"},"mgtv":{"name":"芒果TV资源","api":"https://www.zycaiji.net/api.php/provide/vod/"},"dyjx":{"name":"第一角色","api":"https://www.1jx.net/api.php/provide/vod/"},"dm84":{"name":"动漫84","api":"https://www.dm84.com/api.php/provide/vod/"},"kubo":{"name":"库博资源","api":"https://api.kubo.top/api.php/provide/vod/"}},"custom_category":[{"name":"热门电影","type":"movie","query":"热门"},{"name":"美剧","type":"tv","query":"美剧"},{"name":"日本动画","type":"tv","query":"日本动画"}],"lives":{"cctv1":{"name":"CCTV1","url":"https://live.v1.mk/live.m3u8?token=TzAxOjEw"}}}
```

### 方案二：手动配置

在源代码中编辑 `src/lib/default-sources.ts`：

```typescript
export const DEFAULT_CONFIG = {
  cache_time: 3600,
  api_site: {
    dy01: {
      name: '豆瓣资源',
      api: 'https://api.dy01.cc/api.php/provide/vod'
    },
    // ... 更多源
  },
  custom_category: [
    { name: '热门电影', type: 'movie', query: '热门' },
    // ... 更多分类
  ]
};
```

### 方案三：使用配置订阅

如果配置很长，可使用 Base58 编码的配置订阅 URL：

```bash
# 第一步：编码配置
node scripts/encode-config.js config.json

# 第二步：部署编码后的配置到某个服务器
# 第三步：设置环境变量
CONFIG_SUBSCRIPTION_URL=https://your-config-url.com/config.txt
```

---

## LunaTV 源详解

项目集成的 LunaTV 源包括：

### 主要源

| 源名称 | API 地址 | 说明 |
|--------|---------|------|
| 豆瓣资源 | api.dy01.cc | 综合影视资源 |
| 优酷资源 | yingshi.oss-cn-beijing.aliyuncs.com | 优酷同步资源 |
| 芒果TV | www.zycaiji.net | 综合视频聚合 |
| 第一角色 | www.1jx.net | 电影专题 |
| 动漫84 | www.dm84.com | 动漫/漫画资源 |
| 库博资源 | api.kubo.top | 最新电视剧 |

### 直播源

- CCTV 系列频道
- 全国卫视频道
- 地方电视台

---

## 完整 Netlify 配置示例

### netlify.toml 文件

创建 `netlify.toml` 在项目根目录：

```toml
[build]
  command = "pnpm install && pnpm build"
  publish = ".next"
  functions = "api"

[build.environment]
  NODE_VERSION = "20"
  PNPM_VERSION = "10.14.0"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  condition = "!Path(/api/*)"
```

### Netlify UI 环境变量设置

```env
USERNAME=admin
PASSWORD=SecurePassword123!@
NEXT_PUBLIC_STORAGE_TYPE=localstorage
NEXT_PUBLIC_SITE_NAME=MoonTVPlus
ANNOUNCEMENT=本网站仅供学习使用，请勿商用
INIT_CONFIG={"cache_time":3600,"api_site":{...}}
```

---

## 常见问题

### Q1: Netlify 部署失败，显示 "Build time exceeded"

**解决方案：**
- 增加构建超时时间（Netlify Pro 可设置更长时间）
- 在 `netlify.toml` 中添加：
  ```toml
  [build]
    command_timeout = 600
  ```

### Q2: 部署后页面显示为空

**检查清单：**
- ✅ 确认 `NEXT_PUBLIC_STORAGE_TYPE=localstorage`
- ✅ 确认 `USERNAME` 和 `PASSWORD` 已设置
- ✅ 尝试清除浏览器缓存
- ✅ 检查浏览器控制台的错误信息

### Q3: 源无法加载

**排查步骤：**
1. 检查 `INIT_CONFIG` JSON 格式是否正确
2. 验证 API 地址是否可访问
3. 查看浏览器控制台 Network 选项卡
4. 尝试手动在 Web UI 中添加源测试

### Q4: Netlify 部署是否有免费额度？

**答案：**
- ✅ 有免费部署额度（无限制）
- ✅ 免费 SSL 证书
- ✅ 免费子域名
- ⚠️ 大型应用可能需要升级到 Pro 版本

### Q5: 如何更新源配置？

**两种方式：**

**方式一：重新部署**
1. 修改 `src/lib/default-sources.ts`
2. Push 到 GitHub
3. Netlify 自动重新部署

**方式二：修改环境变量**
1. 进入 Netlify Site settings
2. 编辑 `INIT_CONFIG` 环境变量
3. 点击 "Deploy site" 重新部署

---

## 性能优化

### 1. 启用 CDN 加速

Netlify 自动使用全球 CDN，无需额外配置。

### 2. 启用缓存策略

在 `netlify.toml` 中添加：

```toml
[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/api/*"
  [headers.values]
    Cache-Control = "no-cache"
```

### 3. 启用 Gzip 压缩

Netlify 默认启用，无需配置。

---

## 部署后维护

### 定期更新源

```bash
# 定期检查源的可用性
# 在本地修改 src/lib/default-sources.ts
git add src/lib/default-sources.ts
git commit -m "更新源配置"
git push origin main  # 自动触发 Netlify 重新部署
```

### 监控部署日志

1. 进入 Netlify 控制面板
2. 点击 "Deploys" 标签
3. 查看构建日志和错误信息

### 绑定自定义域名

1. 进入 Site settings → Domain management
2. 点击 "Add custom domain"
3. 按步骤配置 DNS 记录

---

## 相关链接

- [MoonTVPlus GitHub](https://github.com/anyunxiu/MoonTVPlus01)
- [LunaTV 源配置](https://github.com/hafrey1/LunaTV-config)
- [Netlify 官方文档](https://docs.netlify.com)
- [Next.js 部署指南](https://nextjs.org/docs/deployment)

---

## 支持和反馈

遇到问题？

- 📖 查看本项目 [文档](../docs/)
- 🐛 [提交 Issue](https://github.com/anyunxiu/MoonTVPlus01/issues)
- 💬 参考 [常见问题](#常见问题)
