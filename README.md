# 聂荣添的个人主页

面向 GitHub Pages 个人站点的静态网页，内容来自本人提供的简历。无需安装依赖或编译。

目标仓库：`1423641322/1423641322.github.io`

发布后的网址：`https://1423641322.github.io/`

此处的网址是配置目标。只有仓库内容上传并在 Pages 中成功部署后，才代表网站已上线。

## 第一次发布

1. 登录 GitHub 账号 `1423641322`，新建一个 **Public** 仓库，名称填写 `1423641322.github.io`。如果已有同名仓库，先查看其中内容，不要直接覆盖。
2. 将此文件夹中的文件上传到仓库根目录，确保 `index.html` 直接出现在仓库首页，而不是再套一层 `1423641322.github.io` 文件夹。
3. 必需文件包括 `index.html`、`styles.css`、`script.js`、`resume-data.js`、`favicon.svg` 和 `resume.docx`。同时保留 `.nojekyll`；如果网页上传时看不到隐藏文件，可在仓库中手动创建一个空的 `.nojekyll` 文件。
4. 提交上传的文件。
5. 打开仓库的 **Settings → Pages**。
6. 在 **Build and deployment → Source** 选择 **Deploy from a branch**。
7. 选择 **main** 分支和 **/(root)** 文件夹，点击 **Save**。
8. 等待部署完成后访问 `https://1423641322.github.io/`。首次发布可能需要约 10 分钟；进度与错误可在仓库的 Actions 页面查看。

官方教程：https://docs.github.com/en/pages/quickstart

## 在 VS Code 中维护

第一次发布后，可以在 VS Code 中克隆 GitHub 仓库，后续始终编辑克隆得到的同一个文件夹。

| 想修改的内容 | 对应文件 |
| --- | --- |
| 姓名、个人介绍、教育背景、GPA、英语成绩、联系方式、导航 | `index.html` |
| 核心课程、科研经历、项目描述、技能、奖项 | `resume-data.js` |
| 色彩、字号、布局、手机适配 | `styles.css` |
| 主题切换、项目展开、打印逻辑、内容加载 | `script.js` |
| 可下载的原始简历 | `resume.docx`，用新版文件替换，保留此名称 |

在 VS Code 中保存修改，使用“源代码管理”提交并推送至 GitHub。推送到 `main` 后，GitHub Pages 会自动更新。也可以使用下面的命令（仅在已经克隆的仓库目录中执行）：

```powershell
git status
git add index.html styles.css script.js resume-data.js favicon.svg resume.docx .nojekyll README.md
git commit -m "Update personal homepage"
git push
```

可通过 VS Code 的 Live Preview 或 Live Server 扩展预览；也可以直接用浏览器打开 `index.html` 查看。

## 内容与功能

- 固定在顶部的导航栏，手机端也保留导航。
- 教育背景、课程、科研经历、两个项目、专业技能、奖项和联系方式。
- 研究过程与结果可以展开查看；“后续规划”与已完成结果分开呈现。
- 深浅主题可切换，本地浏览器会记住选择。
- 原始简历下载，以及打印 / 保存 PDF。打印时自动展开项目详情。
- 不依赖在线字体、数据库、API 或后端服务器。

网页已按原始简历填写电话、邮箱，并提供原始 DOCX 下载；公共仓库与网站访问者均可读取这些内容。科研数值按原简历保留，尤其 `IC50 = 102.65 g/L`，若原文单位有误，应在 `resume-data.js` 和原始简历中同步修正。

## 与 ChatGPT Sites 的关系

此文件夹是独立的 GitHub Pages 发布包，不包含 `.openai` 配置、发布凭证、Git 历史或临时文件。原 ChatGPT Sites 网址与 GitHub Pages 分别部署，推送 GitHub 不会自动更新 ChatGPT Sites。

建议将 GitHub 仓库作为后续维护的主版本。如果继续保留 ChatGPT Sites 镜像，可以在更新后让 Codex同步同一份网页文件并发布。
