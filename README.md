<h1 align=center>Hugo Theme Ladder | <a href="https://hugo-ladder.pages.dev/" rel="nofollow">Demo</a></h1>

<h4 align=center>🌈 Clean | ⏩ Fast | 📰 Focus on Reading | 🌐 Multi language | 🌙 Multi Dark Theme | 📱 Mobile support</h4>

> Hugo Ladder is a theme based on [hugo-paperMod](https://github.com/adityatelange/hugo-PaperMod).

The [Demo | ExampleSite](https://hugo-ladder.pages.dev/) includes a lot of documentation about Installation, Features with a few more stuff. Make sure you visit it, to get an awesome hands-on experience and get to know about the features ...

Demo is built up with [exampleSite Source Code](https://github.com/guangzhengli/hugo-ladder-exampleSite) (https://github.com/guangzhengli/hugo-ladder-exampleSite) as source.

[![Hugo Version](https://img.shields.io/static/v1?label=hugo-version&message=0.99.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.99.0)[![GitHub license](https://img.shields.io/github/license/guangzhengli/hugo-theme-ladder)](https://github.com/guangzhengli/hugo-theme-ladder/blob/master/LICENSE)[![GitHub stars](https://img.shields.io/github/stars/guangzhengli/hugo-theme-ladder)](https://github.com/guangzhengli/hugo-theme-ladder/stargazers)[![GitHub forks](https://img.shields.io/github/forks/guangzhengli/hugo-theme-ladder)](https://github.com/guangzhengli/hugo-theme-ladder/network)

---

<p align="center">
  <kbd><img src="https://user-images.githubusercontent.com/21258296/114303440-bfc0ae80-9aeb-11eb-8cfa-48a4bb385a6d.png" alt="Mockup image" title="Mockup"/></kbd>
</p>

---

## how to install

```shell
hugo new site <name of site>
```

```shell
git init

git add .

git commit -m "feat: init blog by hugo"

git remote add origin git@github.com:guangzhengli/blog.git

git push --set-upstream origin master

git push
```

```shell
git submodule add https://github.com/guangzhengli/hugo-theme-ladder themes/hugo-theme-ladder

git submodule update --remote

git add .

git commit -m "feat: git submodule updated"

git push
```

copy config.toml to your site config.toml

```
theme = "hugo-theme-ladder"
```

Build your site with hugo server and see the result at http://localhost:1313/.
