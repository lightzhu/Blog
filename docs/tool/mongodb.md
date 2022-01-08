---
title: 免费云数据库 cloud.mongodb
date: '2021-06-02 18:00:00'
categories: Tool
tags: mongodb
comments: true
---

## navicat 连接指南

### 我们可以看到如下图的界面，点击 CONNECT

<div class="center">
<img style="height: 500px" src="/image/tool/mongoose1.jpg" />
</div>

### 选择 Connect Using MongoDB Compass

<div class="center">
<img style="height: 500px" src="/image/tool/mongoose2.jpg" />
</div>

### 点击 I have MongDB Compass，可以看到一串连接字符串

<div class="center">
<img style="height: 400px" src="/image/tool/mongoose3.jpg" />
</div>

### 按照下图填下我们的 Navicat 连接配置信息，密码处填写创建数据库时设置的密码

<div class="center">
<img style="height: 400px" src="/image/tool/mongoose4.jpg" />
</div>

### 点击测试连接，连接成功，随后点击确定即可

<div class="center">
<img style="height: 400px" src="/image/tool/mongoose5.jpg" />
</div>

### 本地导入数据库 JSON 和 BSON 的备份文件夹

- 本地安装 mongoDB
- 下载 mongo 工具插件加压到安装目录 bin 文件夹
- cmd 执行 mongorestore -h localhost:27017 -d exceed-marker(数据库名称) C:\MongoDB\Server\4.4\data\dump
- 最后的路径是你的备份文件夹
