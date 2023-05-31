<h1 align=center>Hugo Theme Ladder | <a href="https://hugo-ladder.pages.dev/" rel="nofollow">Demo</a></h1>

<h4 align=center>🌈 Clean | ⏩ Fast | 📰 Focus on Reading | 🌐 Multi language | 🌙 Multi Dark Theme | 📱 Mobile support</h4>

English README | [简体中文说明](README.zh.md)

The [Demo | ExampleSite](https://hugo-ladder.pages.dev/) includes a lot of documentation about Installation, Features with a few more stuff. Make sure you visit it, to get an awesome hands-on experience and get to know about the features ...

Demo is built up with [exampleSite Source Code](https://github.com/guangzhengli/hugo-ladder-exampleSite) (https://github.com/guangzhengli/hugo-ladder-exampleSite) as source.

[![Hugo Version](https://img.shields.io/static/v1?label=hugo-version&message=0.99.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.99.0)[![GitHub license](https://img.shields.io/github/license/guangzhengli/hugo-theme-ladder)](https://github.com/guangzhengli/hugo-theme-ladder/blob/master/LICENSE)[![GitHub stars](https://img.shields.io/github/stars/guangzhengli/hugo-theme-ladder)](https://github.com/guangzhengli/hugo-theme-ladder/stargazers)[![GitHub forks](https://img.shields.io/github/forks/guangzhengli/hugo-theme-ladder)](https://github.com/guangzhengli/hugo-theme-ladder/network)

---

<p align="center">
  <kbd><img src="https://cdn.jsdelivr.net/gh/guangzhengli/PicURL@master/uPic/VPKI7H.png" alt="Ladder image" title="Mockup"/></kbd>
</p>


---

## Documentations [`docs`](docs/home.md)

See [`docs`](docs/home.md) folder.

### Basic Usage

* [Quick Start](docs/quick-start.md)
* [Configurations](docs/configurations.md)

### Extra Guides

* [Multi Language](docs/multi-language.md)
* [Comment System](docs/comment-system.md)
* [Analytics](docs/analytics.md)
* [Analytics Umami](docs/umami.md)

## Quick Start

Use this command to start.
```shell
hugo server -s exampleSite --themesDir=../.. --disableFastRender
```

Or click `Use this template` to create your blog site in the [exampleSite Repository](https://github.com/guangzhengli/hugo-ladder-exampleSite).

Create a new repository(GitHub Pages) from hugo-ladder-exampleSite to enter : `username.github.io`.

**replace the username by your GitHub account**

Then configure the GitHub page setting following:

![nsrExo](https://cdn.jsdelivr.net/gh/guangzhengli/PicURL@master/uPic/nsrExo.png)

🎉🎉🎉 Open the browser and enter: https://username.github.io 🎉🎉🎉

## Minimal Configuration

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

if you like this theme, you can sponsor me to buy a cup of coffee.
https://guangzhengli.com/sponsors

## Special Thanks

* Hugo Ladder is inspired by [hugo-paperMod](https://github.com/adityatelange/hugo-PaperMod).
