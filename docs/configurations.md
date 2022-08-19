# Configuration

## Mini Configuration

Open the  `config.yml` file in the root directory with an editor and change the configuration as follows: 

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


# Configurations

## About Hugo Configurations

This theme supports:

* Analytics
  * [Google Analytics](https://developers.google.com/analytics)
  * [Google Tag Manager](https://developers.google.com/tag-manager)
  * [umami](https://umami.is/)
* Commenting Systems
  * [Giscus](https://giscus.app/)
  * [Utterances](https://utteranc.es/)

### Analytics

#### Google Analytics

Follow [these steps](https://gohugo.io/templates/internal/#configure-google-analytics).

#### Google Tag Manager

Follow [these steps](https://developers.google.com/tag-manager).

```yml
params: 
  analytics: 
    google: 
      SiteVerificationTag: gid
```

#### Umami Analytics

Follow [these steps](https://guangzhengli.com/blog/en/how-to-integrate-umami-for-free-to-blog-site/).

```yml
params: 
  analytics: 
    umami: 
      enable: true
      website_id: data-website-id
      url: https://umami-ochre-nu.vercel.app/hugo-ladder.js
```

### Commenting Systems

Comments are displayed within post pages and guestbook.

#### Giscus

Follow [these steps](https://giscus.app/).

```yml
params:
  comments:
    giscus:
      enable: true
      repo: username/reponame
      repo_id: Rid
      category: Announcements
      category_id: DIC_id
      mapping: pathname
      position: top
      lang: en # pick a language from https://github.com/giscus/giscus/tree/main/locales
```

#### Utterances
Follow [these steps](https://utteranc.es/)
```yml
params:
  comments:
    utteranc:
      enable: false
      repo: username/reponame
      issueTerm: pathname
```

## Theme Parameters

These are all the parameters used by `hugo-coder` theme.

| Name                            | Type   | Required | Description                               | Default                                                      | Example                                                      |
| ------------------------------- | ------ | -------- | ----------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| baseURL                         | string | Yes      | Website URL                               |                                                              | `https://username.github.io`                                 |
| title                           | string | Yes      | Website Name                              |                                                              | `"Ladder"`                                                   |
| theme                           | string | Yes      | theme name, not change                    | `"hugo-theme-ladder"`                                        | `"hugo-theme-ladder"`                                        |
| license                         | string | No       | License                                   | `"MIT"`                                                      | `"MIT"`                                                      |
| licenselink                     | string | No       | License URL                               | '"https://github.com/guangzhengli/hugo-theme-ladder/blob/master/LICENSE"' | '"https://github.com/guangzhengli/hugo-theme-ladder/blob/master/LICENSE"' |
| description                     | string | No       | Website Description                       |                                                              | `"'A fast, clean Hugo theme'"`                               |
| defaultContentLanguage          | string | Yes      | Website default language                  | `"en"`                                                       | `"en"` or `"zh"`                                             |
| googleAnalytics                 | string | No       | google analytics                          | `"G-xxx"`                                                    | ``"G-xxx"``                                                  |
| enableRobotsTXT                 | string | No       | enable robots.txt                         | `true`                                                       | `true`                                                       |
| paginate                        | number | Yes      | Default paginate                          | 10                                                           | 10                                                           |
| params.brand                    | string | Yes      | brand                                     | `"HOME"`                                                     | `"LADDER"`                                                   |
| params.avatarURL                | string | No       | Gravatar photo of the author              | `"/images/avatar.png"` `replace the photo or change the path` | `"/images/avatar.png"`                                       |
| params.author                   | string | No       | Home page author name                     | `"Hugo Ladder"`                                              | `"Hugo Ladder"`                                              |
| params.authorDescription        | string | No       | Home page author description              | `"A clean, fast hugo theme focused on Reading"`              | `"A clean, fast hugo theme focused on Reading"`              |
| params.info                     | string | No       | Home page website info                    | `"Ladder is a clean, simple but beautiful theme with awesome features"` | `"Ladder is a clean, simple but beautiful theme with awesome features"` |
| params.favicon                  | string | No       | icon photo of the website                 | `"/images/avatar.png"`                                       | `"/images/avatar.png"`                                       |
| params.options.showDarkMode     | bool   | No       | enable dark mode button in nav            | `true`                                                       | `true`                                                       |
| params.options.enableImgZooming | bool   | No       | enable zooming when click img within post | `true`                                                       | `true`                                                       |
| params.options.enableMultiLang  | bool   | No       | enable multi-language support             | `true`                                                       | `false`                                                      |
| params.darkModeTheme            | string | yes      | Adds theme for dark mode                  | `data-dark-mode`                                             | `data-dark-mode` or `icy-dark-mode`                          |
| params.guestbook.title          | string | No       | guestbooke title                          | `"Guestbook"`                                                | `"Guestbook"`                                                |
| params.guestbook.description    | string | No       | guestbooke description                    | `"Leave a comment below. It could be anything –- question, appreciation, information, or even humor."` | `"Leave a comment below. It could be anything –- question, appreciation, information, or even humor."` |
| taxonomies.series               | string | Yes      | enable series                             | `"series"`                                                   | `"series"`                                                   |
| ptaxonomies.tags                | string | Yes      | enable tags                               | `"tags"`                                                     | `"tags"`                                                     |

### Social Icons Configuration

Social Icons are optional. To use them you will need to set at least all the following required parameters for each icon.

| Configuration | Type   | Required | Description      | Example                               |
| ------------- | ------ | -------- | ---------------- | ------------------------------------- |
| name          | string | Yes      | Icon name.       | `"Github"`                            |
| pre           | string | Yes      | icon svg.        | `"find in https://feathericons.com/"` |
| url           | string | Yes      | URL to redirect. | `"https://github.com/guangzhengli/"`  |

An example:

```yml
  social:
    - name: GitHub
      pre: >-
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      url: 'https://github.com/guangzhengli/hugo-theme-ladder'
    - name: Dashboard
      pre: >-
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      url: 'https://umami-ochre-nu.vercel.app/share/R1lHz7QY/hugo-ladder-exampleSite'
```

### Menu Items Configurations

Menu Items are optional. To use them you will need to set all the following required parameters for each icon.

| Configuration | Type   | Required | Description      | Example   |
| ------------- | ------ | -------- | ---------------- | --------- |
| name          | string | Yes      | Menu Item name.  | `"Blog"`  |
| weight        | int    | Yes      | Menu Item order. | `1`       |
| url           | string | Yes      | URL to redirect. | `"/blog"` |

An example:

```yml
menu:
  main:
    - name: Blog
      url: /blog
      weight: 1
    - name: Tags
      url: /tags
      weight: 2
    - name: Archive
      url: /archives
      weight: 3
    - name: Guestbook
      url: /guestbook
      weight: 4
    - name: Dashboard
      url: https://umami-ochre-nu.vercel.app/share/R1lHz7QY/hugo-ladder-exampleSite
      weight: 5
```

## Complete Example

This is a complete configuration example with some recommended values.

```yml
baseURL: 'https://hugo-ladder.pages.dev'
title: LADDER
theme: hugo-theme-ladder
license: MIT
licenselink: 'https://github.com/guangzhengli/hugo-theme-ladder/blob/master/LICENSE'
description: 'A fast, clean Hugo theme'
homepage: 'https://hugo-ladder.pages.dev'
defaultContentLanguage: 'en'
googleAnalytics: G-4WXJ5TEK2S
paginate: 10
menu:
  main:
    - name: Blog
      url: /blog
      weight: 1
    - name: Tags
      url: /tags
      weight: 2
    - name: Archive
      url: /archives
      weight: 3
    - name: Guestbook
      url: /guestbook
      weight: 4
    - name: Dashboard
      url: https://umami-ochre-nu.vercel.app/share/R1lHz7QY/hugo-ladder-exampleSite
      weight: 5
params:
  brand: HOME
  avatarURL: /images/avatar.png
  author: Hugo Ladder
  authorDescription: A clean, fast hugo theme focused on Reading
  info: Ladder is a clean, simple but beautiful theme with awesome features
  favicon: /images/avatar.png
  options:
    showDarkMode: true
    enableImgZooming: true
    enableMultiLang: true
  darkModeTheme: data-dark-mode
  #darkModeTheme: icy-dark-mode
  comments:
    giscus:
      enable: true
      repo: guangzhengli/hugo-ladder-exampleSite
      repo_id: R_kgDOHyVOjg
      category: Announcements
      category_id: DIC_kwDOHyVOjs4CQsH7
      mapping: pathname
      position: top
      lang: en # pick a language from https://github.com/giscus/giscus/tree/main/locales
    utteranc:
      enable: false
      repo: guangzhengli/blog-comments
      issueTerm: pathname
  analytics:
    google:
      SiteVerificationTag: xxx
    umami:
      enable: true
      website_id: 2320eaa6-a90b-471c-b6ca-e79dadde8c4c
      url: https://umami-ochre-nu.vercel.app/hugo-ladder.js
  guestbook:
    title: Guestbook
    description: Leave a comment below. It could be anything –- question, appreciation, information, or even humor.
  social:
    - name: GitHub
      pre: >-
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      url: 'https://github.com/guangzhengli/hugo-theme-ladder'
    - name: Dashboard
      pre: >-
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      url: 'https://umami-ochre-nu.vercel.app/share/R1lHz7QY/hugo-ladder-exampleSite'
languages:
  en:
    languageName: EN
  zh:
    languageName: 中
    author: Ladder 主题
    authorDescription: 一个美观，快速并且专注于阅读的主题
    info: 帮助开发者构建一个免费并且漂亮的博客网站，记录自己的思考并且提高自己的影响力
    guestbook:
      title: 留言板
      description: 您的评论，会让该网站更精彩！
    menu:
      main:
        - name: 文章
          url: /blog
          weight: 1
        - name: 分类
          url: /tags
          weight: 2
        - name: 历史文章
          url: /archives
          weight: 3
        - name: 留言板
          url: /guestbook
          weight: 4
        - name: 网站统计
          url: https://umami-ochre-nu.vercel.app/share/R1lHz7QY/hugo-ladder-exampleSite
          weight: 5
taxonomies:
  series: series
  tag: tags

```

## Content Management

If you create a new posts, it is recommended to fill the configuration which means:

```markdown
title: 
date: {{ .Date }}
tags: []
series: []
featured: true
```

* `title` post title
* `date` published date
* `tags` tags
* `series` series, it will be show related post below the content.
* `featured` it will be show in home page featured post, `true` or `false`
