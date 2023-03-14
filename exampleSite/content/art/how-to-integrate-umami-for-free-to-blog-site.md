---
title: How to integrate umami to your website for free
date: 2021-03-14T21:34:36+08:00
tags: ["hugo", "ladder", "Tutorial", "analytics", "umami"]
series: ["how to create your blog"]
image: "https://cdn.jsdelivr.net/gh/guangzhengli/PicURL@master/uPic/OZcU7U.png"
featured: true
---
This article is about how to integrate [umami](https://umami.is/) website analytics to your website for free. The database use  [postgres](https://supabase.com/docs/guides/database) with 500M storage limit provided by [supabase](https://app.supabase.com/).

The [umami](https://umami.is/) service is hosted with [vercel](https://vercel.com/). Thanks to the excellent service capabilities of cloud vendors, you can integrate *umami* in less than 10 minutes. You can see the umami dashboard by clicking the [Dashboard](https://umami-ochre-nu.vercel.app/share/o3zAba1V/guangzhengli).

<!--more-->

## Create a database

The database use  [postgres](https://supabase.com/docs/guides/database) with 500M storage limit provided by [supabase](https://app.supabase.com/). You can create a supabase account, click `new project`, and enter the database passowrd to create an ProgresSQL database service.

![cN3Zg4](https://cdn.jsdelivr.net/gh/guangzhengli/PicURL@master/uPic/cN3Zg4.png)

It will take a few minutes to create the database service, and you can get the  `DATABASE_URL` after it's done.

![image-20220815182141638](https://cdn.jsdelivr.net/gh/guangzhengli/PicURL@master/uPic/image-20220815182141638.png)

## Hosting umami

The [umami](https://umami.is/) service is hosted with [vercel](https://vercel.com/), Once you have created the database instance, you can deploy the umami service with click deploy button in the [Running on Vercel](https://umami.is/docs/running-on-vercel) document.

1. Fork the https://github.com/mikecao/umami project to your GitHub account.
2. Create an account on Vercel.
3. From the dashboard page click Import Project then specify the URL to your fork of the project on GitHub.
4. Add the required environment variables to your Vercel project. These values are defined in the Configure umami step from Install.
   1. DATABASE_URL: Connection string for your database. This is the only required variable.
   2. TRACKER_SCRIPT_NAME: Allows you to assign a custom name to the tracker script different from the default `umami`. This is to help you avoid some ad-blockers. I used `hugo-ladder` on this project.

5. Enter `yarn build && yarn update-db` to the `BUILD COMMAND`, which will migrate the tables of umami to database automatically. 
6. Deploy and visit your application at <deploy-id>.vercel.app.
7. Follow the Getting started guide starting from the Login step and be sure to change the default password.

![gePzXI](https://cdn.jsdelivr.net/gh/guangzhengli/PicURL@master/uPic/gePzXI.png)

Of course, if you want to import tables yourself, you can also get the tables from here https://github.com/umami-software/umami/blob/master/sql/schema.postgresql.sql.

## umami configuration

After deploying umami in vercel you will get a  `<deploy-id>.vercel.app`  address which login with the default account: *admin* and password: *umami*.

You can change the default password and `Add webiste`, enter the `Name` and `Domain`, and click  `enable share URL` so that anyone can access the dashboard.

Then you can get  `data-website-id` and  `src` values by click `Get tracking code`，enter the value to the `hugo-ladder` configuration  `params.analytics.umami.website_id` ,  `params.analytics.umami.url`. 

![OZcU7U](https://cdn.jsdelivr.net/gh/guangzhengli/PicURL@master/uPic/OZcU7U.png)

In the end, you can get the website statistics analytics dashboard.🎉🎉🎉

Link to original article: https://guangzhengli.com/en/blog/en/how-to-integrate-umami-for-free-to-blog-site/