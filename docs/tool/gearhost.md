---
title: 免费服务器 GearHost
date: '2019-09-28 18:00:00'
# toc: true
keywords: GearHost 免费服务器
thumbnail: 'https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/gearhost.png'
categories: Tool
tags: GearHost
comments: true
---

### 自己做了个小网站想发布到线上，但是没有服务器？

上线还需要域名备案？太麻烦了吧。今天上干货，分享一个永久免费服务器的申请以及使用教程，满足展示、测试、学习等基本需求。

#### 什么是 GearHost

GearHost，它是国外一家主机商，提供免费和付费的主机套餐，支持 PHP、.Net 和 Node.js 程序。无需信用卡，注册就可以免费部署 100 个免费的网站和数据库。

<!-- more -->

### 首先，注册。

这个注册也是不需要信用卡的，注册的其他事项就不啰嗦了，正常进行就好。

### 第二步，创建一个实例。

进入网站后醒目的 Add Cloudsite 按钮你应该看得到，点击后输入一个自定义二级域名，再点击创建等待一会就能完成，成功后会出现在列表里面，点击进入可以看到实例的一些信息。![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/gearhost01.png) ![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/gearhost02.png)

### 第三步，部署实例。

GearHost 提供三种部署方案，FTP 方式：这个比较简单，FTP 软件用户名和密码登陆，将部署文件直接拉到服务器文件夹里就可以了。开发软件方式：需要下载对应的部署插件，不推荐。连接 github 库的方式，个人推荐这种，方便。

![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/gearhost03.png) ![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/gearhost04.png)

最后，部署完成就可以访问你的网站了（在 overview 里面找到 PREVIEW URL），这个就是访问地址。

### 总结

GearHost 的优点是免费，无需信用卡，建站数量多，但是缺点也很明显，主机容量只有 100MB，免费的 Mysql 数据库只有 5Mb，MongoDB10Mb 内存是 256MB，CPU 占用为 5%，不支持 ssl 等等。个人认为相比较国内而言 GearHost 算是一个很不错的练手工具，毕竟国内根本不存在这样良心的厂商，毕竟免费还能运行 PHP、.Net 或者 Node.js。另外这个网站的实例还是比较有可玩性的，比如自定义域名、add-ons(插件)可以运行比如定时任务等(需要信用卡)等。真是的情况可以自行探索。
