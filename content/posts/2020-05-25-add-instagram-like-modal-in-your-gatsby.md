---
template: post
title: Add Instagram like modal in your Gatsby
slug: add-instagram-like-modal-in-your-gatsby
draft: false
author: Richard
date: 2020-05-25T22:36:36.147Z
description: |
  We can easily add modal pages in our jamstack site by using this plugin.
category: Plugins
tags:
  - gatsby
  - modal
---

We can easily add modal pages in our jamstack site by using this plugin.

Tested with:

\- Mac OS 10.15.3

## 1. Install the plugin

1.1 Type the following command in your terminal:

```shell
npm install --save gatsby-plugin-modal-routing
```

1.2 Add the plugin to your `gatsby-config-js` file.

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        appElement: '#___gatsby',
        modalProps: { },
      }
    }
  ]
];
```

1.3 You can also customise the modal via passing the css properties.

```javascript
modalProps: {
  style: {
    overlay: {
      position: `fixed`,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: `rgba(103, 99, 99, 0.75)`,
      display: `flex`,
      justifyContent: `center`
    },
    content: {
      position: `absolute`,
      border: `none`,
      background: `none`,
      padding: 0,
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      overflow: `auto`,
      WebkitOverflowScrolling: `touch`
    }
  },
  contentLabel: `Modal`
}
```

## 2. Call the page as a modal

Passed the `asModal` property so that your page will be called as a modal.

```javascript
import { Link } from "gatsby-plugin-modal-routing";

<Link to="/your-page" asModal>
  Open This Page as Modal
</Link>;
```

Done. 🙂
