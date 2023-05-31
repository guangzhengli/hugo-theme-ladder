<h1 align=center>Hugo Theme Ladder | <a href="https://hugo-ladder.pages.dev/" rel="nofollow">Demo</a></h1>

<h4 align=center>🌈 简洁 | ⏩ 快速 | 📰 聚焦阅读 | 🌐 多语言 | 🌙 多种样式 | 📱 移动端支持</h4>

[Demo 网站](https://hugo-ladder.pages.dev/zh/) 包括了所有的安装文档信息，例如如何免费构建独立的博客网站，如何。你可以通过直接访问网站，来获得原生体验。

Demo 网站是通过这个仓库构建而来 [exampleSite Source Code](https://github.com/guangzhengli/hugo-ladder-exampleSite) (https://github.com/guangzhengli/hugo-ladder-exampleSite)。

[![Hugo Version](https://img.shields.io/static/v1?label=hugo-version&message=0.99.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.99.0)[![GitHub license](https://img.shields.io/github/license/guangzhengli/hugo-theme-ladder)](https://github.com/guangzhengli/hugo-theme-ladder/blob/master/LICENSE)[![GitHub stars](https://img.shields.io/github/stars/guangzhengli/hugo-theme-ladder)](https://github.com/guangzhengli/hugo-theme-ladder/stargazers)[![GitHub forks](https://img.shields.io/github/forks/guangzhengli/hugo-theme-ladder)](https://github.com/guangzhengli/hugo-theme-ladder/network)

---

<p align="center">
  <kbd><img src="https://cdn.jsdelivr.net/gh/guangzhengli/PicURL@master/uPic/VPKI7H.png" alt="Ladder image" title="Mockup"/></kbd>
</p>


---

## 文档 [`docs`](docs/home.md)

See [`docs`](docs/home.md) folder.

### 基础使用

* [Quick Start](docs/quick-start.md)
* [Configurations](docs/configurations.md)

### 高级用法

* [Multi Language](docs/multi-language.md)
* [Comment System](docs/comment-system.md)
* [Analytics](docs/analytics.md)
* [Analytics Umami](docs/umami.md)

## 快速开始

Just click `Use this template` to create your blog site in the [exampleSite Repository](https://github.com/guangzhengli/hugo-ladder-exampleSite).

Create a new repository(GitHub Pages) from hugo-ladder-exampleSite to enter : `username.github.io`.

**replace the username by your GitHub account**

Then configure the GitHub page setting following:

![nsrExo](https://cdn.jsdelivr.net/gh/guangzhengli/PicURL@master/uPic/nsrExo.png)

🎉🎉🎉 Open the browser and enter: https://username.github.io 🎉🎉🎉

## 最小配置

Clone your repository.

Build and run hugo server by `hugo server -D` and open in browser http://localhost:1313/.

```yml
baseURL: 'https://hugo-ladder.pages.dev' # set https://username.github.io
homepage: 'https://hugo-ladder.pages.dev' # set https://username.github.io
defaultContentLanguage: 'en' #default language
params:
  brand: HOME # set the brand of your site
  avatarURL: /images/avatar.png # avatar, replace your avatar in the /static/images/
  author: Hugo Ladder # name
  authorDescription: # description
  info:  this is a info # information of your blog site
  favicon: /images/avatar.png # blog site icon，replace your avatar in the /static/images/
  options:
    showDarkMode: true # is show dark mode button
    enableMultiLang: true # is show multi language button
```

Modifying the default configuration. Then push it to your repository.

## ALL Configuration

Following this [article](https://guangzhengli.com/blog/en/how-to-create-your-blog-for-free-by-hugo-ladder-in-30min/) to cofiguration.

Following this [article](https://guangzhengli.com/blog/en/how-to-integrate-umami-for-free-to-blog-site/) to configure the umami analytics

## Sponsor

如果这份教程对你有帮助，欢迎请作者喝杯咖啡。
https://guangzhengli.com/sponsors

## Special Thanks

* Hugo Ladder is inspired by [hugo-paperMod](https://github.com/adityatelange/hugo-PaperMod).
