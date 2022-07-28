# Hugo Theme Ladder
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
```

copy config.toml to your site config.toml
```
theme = "hugo-theme-ladder"
```

