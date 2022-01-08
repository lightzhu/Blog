---
title: 免费服务器 路由端口映射
date: '2020-03-05 18:00:00'
# toc: true
keywords: 路由端口映射 免费服务器
thumbnail: 'https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/iptans.jpg'
categories: Tool
tags: ip-port
abbrlink: '7e709354'
comments: true
---

### 上线还需要域名备案？

分享一个路由端口映射，搭建永久个人免费服务器使用教程，满足展示、测试、展示等需求。

<div>
<img style="height: 200px" src="/image/tool/webip02.png" />
</div>
<!-- more -->

### 什么是端口映射

端口映射又称端口转发、NAT、虚拟服务器。就是外网访问内网通过端口映射的方式。

<!-- more -->

### 首先，固定 ip 的宽带。

首先，你拥有一个固定 ip 的宽带，不过没有也没关系可以查看当前路由器的外网地址，比如登陆到路由器查看，还可以用 360 网络测速查看，还有一种更方便的打开网页 iP 地址：https://www.ip138.com/。例如我当前的外网ip为223.94.56.100。 ![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/webip01.png) ![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/webip02.png)

### 第二步，设置路由器端口转发。

登陆路由器找到 Tp-link 路由器：点击【转发规则】——【虚拟服务器】——【添加新条目】；D-link 路由器：点击【进阶设定】—【虚拟服务器】进行设置，先点【激活】，才可设置；小米路由器：入管理界面后，点击【高级设置】——【端口转发】———【添加规则】；还有的路由器的这个功能是单独在应用程序里面的。但是不管那种路由器都是先找到虚拟服务器，然后添加转发规则。添加指导：常用服务器选择 http；外部端口任意，避开常用的端口；内部端口就是你内网服务器的端口，我们都以 8088 为例（我的本机服务会在这个端口启动）；IP 地址填写自己内网 ip 地址（不知道的去自己网络中心查看）；协议类型选择 ALL；点击保存，一天端口转发规则就设置好了。 ![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/webip04.png)

![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/webip05.png)

### 第三步，固定本机内网 ip。

mac 下打开网络偏好设置-高级-TCP/P 配置 ipv4 为手动，然后手动填写一个内网 ip 应用成功后可使用。windows 打开电脑的“网络和共享中心”，在“Internet 协议版本 4 属性”对话框中，选中“使用下面的 ip 地址”项目，然后输入 ip 地址，请注意设定的 ip 地址是否合理有效。还有一种方式就是在路由器中将“你要的内网 ip”与网卡 mac 地址绑定。

![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/webip03.png) ![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/webip06.png) ![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/tool/webip07.png)

### 最后，启动本地服务器

外网环境通过 223.94.56.100:8088 这个地址就访问当前的本地服务了，这样一个基于路由器的内网穿透就成功了。这种方式的穿透速度还是可以的，还有就是很方便的将自己的作品像别人展示，缺点是如果没有固定 ip 每次的访问地址都会变。

### 通过第三方服务

上面的服务比较适合有外网 IP 的玩家，还可以通过第三方服务穿透出去。常用的工具有：

- 花生壳(有流量等限制)
- ngrok（境外的服务）
