---
title: 如何 10 分钟快速搭建你自己的独立博客
date: 2022-08-01
tags: ["hugo", "ladder主题", "教程", "GitHub Pages"]
image: "https://cdn.jsdelivr.net/gh/guangzhengli/PicURL@master/uPic/j0eHDj.png"
desc: "本文是如何搭建免费的独立博客系列的第一篇"
---

<!--more-->

## 准备工作

### 创建 [GitHub](https://github.com/) 账号

在搭建自己的博客前，我们需要先注册一个 [GitHub](https://github.com/) 账号，这个账号的账户名非常重要，它是后面我们博客的域名地址。

例如我们创建的账号名称是 guangzhengli，那么我们最终的博客地址就是 https://guangzhengli.github.io。

### 创建 GitHub Pages 仓库

完整的教程可以查看 [官方教程](https://pages.github.com/)，简单来讲就是 [创建一个新的 repository](https://github.com/new)，名字为 `username.github.io`。

![j0eHDj](https://cdn.jsdelivr.net/gh/guangzhengli/PicURL@master/uPic/j0eHDj.png)

## 搭建博客

我们可以选择直接克隆已经准备好的仓库 [hugo-ladder-exampleSite](https://github.com/guangzhengli/hugo-ladder-exampleSite)

```
git clone https://github.com/guangzhengli/hugo-ladder-exampleSite.git
```

在拉取完代码后，我们需要修改配置信息，文件在根目录的 `config.yml` 文件中，我们需要将 Demo 的配置修改成自己。

> 请注意，一定记得修改配置信息，特别是拉取博客后大家会像评论配置等，否则将会给后续使用改教程的人带来困扰，谢谢🙏。如果想搭建自己独立的评论系统，可以参考这篇文章来搭建 [如何 30 分钟搭建一套完整独立博客]({{< ref "blog/zh/how-to-create-your-blog-for-free-by-hugo-ladder-in-30min.zh" >}})。

### 修改博客配置

根目录的 `config.yml` 文件，使用编辑器打开，修改如下大致的一些配置

```yml
baseURL: 'https://hugo-ladder.pages.dev' #修改为你的 https://username.github.io
homepage: 'https://hugo-ladder.pages.dev' #修改为你的 https://username.github.io
defaultContentLanguage: 'en' #修改默认语言，例如改为 zh 即默认使用中文
params:
  brand: HOME # 修改默认的为自己网站的标志
  avatarURL: /images/avatar.png #网站主页的照片信息，你可以在根目录 /static/images/ 里面替换成自己的照片
  author: Hugo Ladder # 修改你自己的名字
  authorDescription: # 修改对你自己的描述
  info:  # 修改对你自己网站描述
  favicon: /images/avatar.png #网站的 icon，你可以在根目录 /static/images/ 里面替换成自己的照片
  options:
    showDarkMode: true # 是否使用切换黑暗模式
    enableMultiLang: true # 是否展示多语言选择
 languages: # 如果你启用多语言，下面是中文展示
  zh:
    languageName: 中
    author: Ladder 主题
    authorDescription: 一个美观，快速并且专注于阅读的主题
    info: 帮助开发者构建一个免费并且漂亮的博客网站，记录自己的思考并且提高自己的影响力
```

### 注释评论相关功能

准备好的仓库 [hugo-ladder-exampleSite](https://github.com/guangzhengli/hugo-ladder-exampleSite) 主要给大家快速搭建使用。如果大家都使用同一套评论配置的话，会给后续使用该教程的人带来一定的困扰，可以先将相关功能注释掉。如果想搭建自己独立的评论系统，可以参考这篇文章来搭建 [如何 30 分钟搭建一套完整独立博客]({{< ref "blog/zh/how-to-create-your-blog-for-free-by-hugo-ladder-in-30min.zh" >}})。

修改方案如下所示

```yml
comments:
    giscus:
      enable: true
```

改为如下所示

```yml
comments:
    giscus:
      enable: false
```

## 如何添加和修改自己的博客文章

可以在根目录的 `content/blog` 中找到该站点的 Demo 展示文章，可以选择新增一个 `markdown` 文件添加自己想要表达的内容即可。

目前在文章头部，需要添加上这几个标签来配置文章的展示：

* `title`：文章标题。
* `date`: 发布时间。
* `tags`: 文章的标签，便于后续检索和查找类似文章。
* `series`: 系列文章，可以为空，便于在文章末尾相关文章推荐使用。
* `featured`: `true` 或者  `false`，是否在主页推荐中展示。

其次，可以通过添加 `<!--more-->` 标签，标明哪些文字需要在博客的列表中外部展示用，哪些文字需要隐藏，如果不添加的话，会默认展示一定的字数。

## 部署代码

### 推送代码到自己的仓库

在第一步时，我们创建了名为  `username.github.io` 的仓库地址，可以使用下面命令先将指向仓库 [hugo-ladder-exampleSite](https://github.com/guangzhengli/hugo-ladder-exampleSite) 的远程 URL 先去除，再添加自己的地址。注意将下面命令中 `username` 替换成自己的账号名称。

最后我们再推送我们的修改到自己的仓库。

```shell
git remote remove origin

git remote add origin https://github.com/username/username.github.io.git

git add .

git commit -m "feat: init blog site"

git push origin main
```

### 部署 GitHub Pages

确保我们推送成功后，我们会在 `Actions` 中自动的将代码 build 成 GitHub Pages 需要的文件，可以到这个地址检查 `workflow` 是否成功运行。注意将地址中 `username` 替换成自己的账号名称。`https://github.com/username/username.github.io/actions`。

如果 `Actions` 运行成功的话，我们会有一个新的分支叫做 `gh-pages`。这时候我们去仓库的设置中心 `Settings` ，选择 `Pages` ，之后将 `Build and deployment` -> `Source` 选择 `Deploy from a branch`。后面的 `Branch` 选择 `gh-pages` 即可配置成功。

![nsrExo](https://cdn.jsdelivr.net/gh/guangzhengli/PicURL@master/uPic/nsrExo.png)

这个时候，选择上方的 `Visit site` 或者手动输入 `https://username.github.io` 即可访问成功！ 🎉🎉🎉

如果部署时，有任何问题，可以在下方留言。

原文链接: https://guangzhengli.com/zh/blog/zh/how-to-create-your-blog-for-free-in-10min/