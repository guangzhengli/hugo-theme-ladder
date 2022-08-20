---
title: Rich Content
date: 2022-07-18 20:29:08
tags: ["Hugo", "Ladder", "shortcode"]
featured: false
---
<!--more-->
## figure

## ref in posts
[Neat]({{< ref "blog/zh/how-to-create-your-blog-for-free-by-hugo-ladder-in-30min.zh" >}})

## hide toggle
{{< toggle summary="summary" >}}
```shell
hide value
```
{{< /toggle>}}

### without summary
{{< toggle >}}
```shell
hide value
```
{{< /toggle>}}


## tab group code

{{< tabgroup >}}
{{< tab name="Hello" >}}
```shell
Hello World!
```
{{< /tab >}}

{{< tab name="Goodbye" >}}
```shell
Goodbye Everybody!
```
{{< /tab >}}
{{< /tabgroup >}}

## tab group

{{< tabgroup >}}
{{< tab name="MacOS" >}}
brew install hugo
{{< /tab >}}

{{< tab name="Linux" >}}
apt install hugo
{{< /tab >}}

{{< tab name="Window" >}}
window install hugo
{{< /tab >}}
{{< /tabgroup >}}