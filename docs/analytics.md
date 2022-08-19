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

