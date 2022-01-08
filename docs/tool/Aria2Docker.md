---
title: Aria2 Docker 安装
date: '2021-11-24 19:00:00'
# toc: true
keywords: Aria2 Docker
categories: Tool
tags: Aria2
comments: true
---

## Aria2 是目前最强大的全能型下载工具，它支持 BT、磁力、HTTP、FTP 等下载协议，常用做离线下载的服务端

## docker 源 docker pull p3terx/aria2-pro

## 启动 docker

```
docker run -d
  --name aria2-pro
  --restart unless-stopped
  --log-opt max-size=1m
  --network host
  -e PUID=$UID
  -e PGID=$GID
  -e RPC_SECRET=<TOKEN>
  -e DISK_CACHE=<SIZE>
  -e RPC_PORT=6800
  -e LISTEN_PORT=6888
  -v /data/aria2/config:/config
  -v /data/aria2/downloads:/downloads
  p3terx/aria2-pro
```

- 系统开放 6800 RPC 端口设置。
- 开放（TCP、UDP）6888 - BT 监听端口、DHT 监听端口（UDP）设置

## AriaNg 链接

- http://p3terx.gitee.io/ariang 打开链接，设置 ariaNg 设置，输入主角 ip,RPC_SECRET 密码，即可链接成功
