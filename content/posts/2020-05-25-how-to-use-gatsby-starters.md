---
template: post
title: How to use Gatsby Starters
slug: how-to-use-gatsby-starters
draft: false
author: Richard
date: 2020-05-25T00:01:25.645Z
description: Gatsby starters provide boilerplate functionalities to bootstrap your project.
category: Getting Started
tags:
  - Gatsby
---

Gatsby starters provide boilerplate functionalities to bootstrap your project. In this tutorial, you will learn how to pick and choose your gatsby starter for your project.

Tested with:

\- Mac OS 10.15.3

## 1. Using Gatsby Starters

1.1 Go to this site [gatsby starters](https://www.gatsbyjs.org/starters/?v=2), and pick one from the list.

![starters](/media/starters.png "starters")

1.2 Once you picked your boilerplate, go to terminal execute the following command:

```
gatsby new <name of the starter> <repository of the starter>
```

For example, i picked this [gatsby-starter-delog](https://www.gatsbyjs.org/starters/W3Layouts/gatsby-starter-delog), the command that i will be typing is:

```shell
gatsby new gatsby-starter-delog https://github.com/W3Layouts/gatsby-starter-delog
```

## 2. Running the boilerplate

2.1 Once you have successfully installed the starter, you can go back to your terminal and run the boilerplate:

```shell
 cd <directory name>
 gatsby develop
```

In my example, I will be typing:

```shell
 cd gatsby-starter-delog
 gatsby develop
```

2.2 Wait until you see the success message and navigate to <http://localhost:8000> to view your running application.

Done. 🙂
