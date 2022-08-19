### Comment Systems

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

## 