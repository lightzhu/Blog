---
title: 宝塔面板
date: '2021-11-29 18:00:00'
# toc: true
keywords: 宝塔面板 docker java
thumbnail: 'https://lightzhu.github.io/image/oracle/baotahome.jpg'
categories: Tool
tags: BT
comments: true
---

#### 什么是 Heroku

宝塔 Linux 面板是提升运维效率的服务器管理软件,此日志记录折腾宝塔的一些简单记录。

<!-- more -->

## 首先，ssh 连接服务器，安装脚本参考官网。

## 我的常用安装软件。

<div class="center">
<img style="height: 500px" src="/image/oracle/useapp.png" />
</div>

## 宝塔上面安装 java 环境

Tomcat 自带 java8，如果遇到特殊问题，可参考[服务器安装 java 环境](https://lightzhu.github.io/tool/oraclearm.html)

## rclone 安装

参考 [服务器安装 rclone](https://lightzhu.github.io/tool/rclone.html)
[官网:https://rclone.org/install/](https://rclone.org/install/)

## 通过 rclone 挂载网盘到服务器

- [挂载 onedrive](https://lightzhu.github.io/tool/rclone.html)

## docker 安装常用镜像

- [webdav-aliyundriver](https://hub.docker.com/r/zx5253/webdav-aliyundriver)
  让阿里云盘变身为 webdav 协议的文件服务器

```
docker run -d --name=webdav-aliyundriver
--restart=always -p 8080:8080
-v /etc/localtime:/etc/localtime
-v /yourpath/aliyun-driver/:/etc/aliyun-driver/
-e TZ="Asia/Shanghai"
-e ALIYUNDRIVE_REFRESH_TOKEN="your refreshToken"
-e ALIYUNDRIVE_AUTH_PASSWORD="admin"
-e JAVA_OPTS="-Xmx1024m"
zx5253/webdav-aliyundriver
```

- rclone config 新建配置文件，挂载 webdev 阿里云盘到服务器

```

rclone lsd alipan:

```

- 找到 rclone.conf 文件备用（可能在.config/rclone 这个文件夹下面）

### [aria2-pro](https://hub.docker.com/r/p3terx/aria2-pro)

Aria2 是目前最强大的全能型下载工具，它支持 BT、磁力、HTTP、FTP 等下载协议，常用做离线下载的服务端
docker 部署:

```
docker run -d \
  --name aria2-pro \
  --restart unless-stopped \
  --log-opt max-size=1m \
  --network host \
  -e PUID=$UID \
  -e PGID=$GID \
  -e RPC_SECRET=<TOKEN> \
  -e RPC_PORT=6800 \
  -e LISTEN_PORT=6888 \
  -v /yourpath/aria2-config:/config \
  -v /youpath/downloads:/downloads \
  -e SPECIAL_MODE=rclone \
  p3terx/aria2-pro

```

- 说明：TOKEN 用于 web 页面链接，SPECIAL_MODE=rclone 为 rclone 高级配置，
- 直接把配置文件（rclone.conf）复制到 Aria2 Pro 配置目录下即可，容器在启动的时候会安装 rclone，通过修改配置文件夹下的 script 脚步可以控制下载完成后把文件上传到 onedrive 或者 webdev 的阿里云盘
- 配合 Ar­i­aNg 使用， Ar­i­aNg 只是一个静态网页，只负责发送指令给 Aria2 服务端，所填写的 RPC 地址和 RPC 密钥等设置数据只会储存在本地浏览器中
- [我的](http://ariang.2048888.xyz)
- [github-page:https://lightzhu.github.io/dev/ariang](https://lightzhu.github.io/dev/ariang)
- [三方](http://p3terx.gitee.io/ariang)

### 青龙面板

[青龙面板](https://hub.docker.com/r/whyour/qinglong)

docker-compose 部署:

```
mkdir qinglong
wget https://raw.githubusercontent.com/whyour/qinglong/master/docker-compose.yml

```

#### 启动/停止

```
docker-compose up -d

docker-compose down
```

### [filebrowser](https://hub.docker.com/r/filebrowser/filebrowser)

在网页中浏览服务器文件，将网盘挂载到浏览目录可以直接浏览操作网盘内容

```
docker run
 -v /path/yourpath:/srv
 -v /yourpath/filebrowser.db:/database.db
 -v /yourpath/.filebrowser.json:/.filebrowser.json
 --user $(id -u):$(id -g)
 -p 80:80
 filebrowser/filebrowser
```

注意事项：1./path/yourpath 是服务器上需要 docker 服务读取的文件夹
2.yourpath 文件夹下面新建模版文件.filebrowser.json 写入模版

```
{ "port": 80, "baseURL": "", "address": "", "log": "stdout", "database": "/database.db", "root": "/srv" }

```
