# OffBuddy 独立官网

官网源码只维护在本目录。AhaKnowSite 是产品集合官网，只展示 OffBuddy 的产品介绍并链接到 https://offbuddy.ahaknow.com/ 。

## 本地运行

```sh
cd website
npm ci
npm run dev
```

静态构建：`npm run lint && npm run build`。产物在 `website/out/`，可用 `python3 -m http.server 8813 --directory out` 查看。

## GitHub 与 Vercel

- GitHub：`IHKYoung/OffBuddy`，分支 `baseline`。
- 推荐 Vercel Root Directory 为仓库根目录（留空或 `.`）。根目录 `vercel.json` 已指定依赖安装、构建命令与 `website/out` 输出目录。
- 也可以把 Root Directory 设为 `website`，此时使用本目录的 `vercel.json`。
- Production Branch 选择 `baseline`，不要手工覆盖构建命令和输出目录。
- 首页直接位于 `/`；帮助页 `/support/`；隐私页 `/privacy/`。无需域名重写到 `/offbuddy/`。
- 域名：`offbuddy.ahaknow.com`；Vercel 默认域名也直接打开同一首页。

App Store 截图和中英文文案工作台保留在本地 `../store/`，本次 Git 提交不包含这些素材。直接打开 `../store/index.html` 使用。

## 当前内容边界

网页标注 1.0 上架准备中。支持页仍待所有者提供真实公开联系方式，未虚构邮箱。没有添加分析追踪、登录或服务器。

## 迁移和回退

原 `AhaKnowSite/app/offbuddy/` 已迁移为这里的 `app/`，原产品静态资源位于 `public/offbuddy/`。删除了 AhaKnowSite 本地的产品子域重写；集合官网中的产品卡片仍指向独立域名。

回退独立官网发布可在 Vercel 选择上一部署，或在 Git 新建 revert 提交；不要改写 `baseline` 历史。AhaKnowSite 的本地迁移未在本次推送中发布。

字体沿用原官网的 LXGW WenKai Screen，许可见 `assets/OFL.txt`。
