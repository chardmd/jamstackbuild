---
template: post
title: Add Disqus comments in your Gatsby
slug: add-disqus-comments-in-your-gatsby
draft: false
author: Richard
date: 2020-05-25T03:37:41.564Z
description: Learn how to integrate a commenting system like Disqus in your gatsby site.
category: Plugins
tags:
  - Gatsby
  - Disqus
---

Learn how to integrate a commenting system like Disqus in your jamstack site.

Tested with:

\- Mac OS 10.15.3

## 1. React Disqus component

Install this component via typing the following command in your terminal:

```shell
npm install react-disqus-comments
```

## 2. Disqus account

Create an account in [Disqus](https://disqus.com) and get the "shortname" identifier.

![disqus](/media/disqus.png "disqus")

## 3. Use the component in your site

3.1 Pass the shortname in the component

```javascript
import ReactDisqusComments from "react-disqus-comments";

<ReactDisqusComments
  shortname="jamstackbuild"
  identifier="jamstackbuild"
  title="Example Thread"
  url="http://localhost:8000"
/>;
```

3.2 Run the app and see the result

```shell
gatsby develop
```

![preview](/media/preview.png "preview")

Done. 🙂
