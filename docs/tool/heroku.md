---
title: 免费服务器 Heroku
date: '2019-09-28 18:00:00'
# toc: true
keywords: Heroku 免费服务器
categories: Server
tags: Heroku
abbrlink: '7e7093535'
comments: true
---

#### 什么是 Heroku

heroku 是一个云服务商，它提供的免费实例可以用于构建个人网站，非常适用于实验性质或是其他简单的小型系统。比如如果你有 onedrive 的话还可以打造自己的私人资源站，速度比某盘要快很多。废话不多说，放教程。

<div class="center">
<img class="mcenter" src="https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/heroku.jpeg" />
</div>
<!-- more -->

### 首先，注册。

这个注册也是不需要信用卡的，但是要注意一些事项，第一用谷歌邮箱，国内 qq 邮箱等无法注册成功。第二，需要梯子。注册的其他事项就不啰嗦了，正常进行就好。

### 第二步，创建一个实例。

登陆(最近登陆也需要梯子了，有点麻烦)进去之后会看到一个 new 的按钮，点击新增，输入自己的 app 名字，选择实例区域，只有美国和欧洲可选。之后点击 creat app，等待一会创建完成。 ![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/heroku01.png) ![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/heroku02.png)

### 第三步，部署实例。

- heroku 同样提供三种方式的部署方式，Heroku CLI 的方式：需要单独下砸一个软件，但是这个客户端集创建应用与代码管理与一体方便是方便，就是一开始比较麻烦，需要学习成本。
- 还有一种通过 github 关联仓库的方式，首先要先管理 github 账号，点击右上角用户头型，进入账号管理，applications 选项卡里面对你的 github 账号进行关联。在 deploy 选项卡里选择 github 方式进行部署，在输入框输入你的项目名称点击搜索会找到你 git 仓库里面的对应项目,点击 connect，关联成功后点击 deploy branch(发布分支)，等待成功就好了。如果没有部署成功可以参考官方实例 GitHub https://github.com/heroku/node-js-getting-started

![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/heroku03.png) ![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/heroku04.png) ![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/heroku05.png) ![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/heroku06.png) ![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/heroku07.png)

- 最后，可以在实例详情页面看到打开访问链接，还可以在线查看日志。
  ![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/heroku08.png)

### 总结

注册需要梯子，Heroku 优点支持语言众多例如 Ruby, Node.js, Clojure, Java, Python，Go 等主流开发语言，运行内存 512M 还可以，一个账号只能申请 5 个免费的实例，且月在线时长有限制没有信用卡验证的用户 550 小时，验证过的 1000 小时，30 分钟无访问后会进入休眠状态。对于个人用户而言基本够用。
