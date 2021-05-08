---
title: 阿里云Linux安装nginx
date: '2021-05-06 20:00'
keywords:
  - nginx
  - 阿里云
tags:
  - nginx
  - Linux
categories:
  - Server
comments: true
# sidebar: 'auto'
# publish: false
---

## 一. gcc 安装

安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装：

```
yum install gcc-c++
```

## 二. PCRE pcre-devel 安装

PCRE(Perl Compatible Regular Expressions) 是一个 Perl 库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库。nginx 也需要此库。命令：

```
yum install -y pcre pcre-devel
```

## 三. zlib 安装

zlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要在 Centos 上安装 zlib 库。

```
yum install -y zlib zlib-devel
```

## 四. OpenSSL 安装

OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。
nginx 不仅支持 http 协议，还支持 https（即在 ssl 协议上传输 http），所以需要在 Centos 安装 OpenSSL 库。

```
yum install -y openssl openssl-devel
```

## 上面步骤可以直接简化如下

```
- yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel
- cd /usr/local/src/
- wget http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz
- tar zxvf pcre-8.35.tar.gz
- cd pcre-8.35
- ./configure
- make && make install
- pcre-config --version
```

## 五.下载并解压 ngnix

```
cd /usr/local/src/
wget -c https://nginx.org/download/nginx-1.8.1.tar.gz
tar -zxvf nginx-1.8.1.tar.gz
cd nginx-1.8.1
```

## 六.编译安装

```
cd  ./configure or ./configure --prefix=/usr/local/webserver/nginx --with-http_stub_status_module --with-http_ssl_module --with-pcre=/usr/local/src/pcre-8.35
make & make install
/usr/local/webserver/nginx/sbin/nginx -v
/usr/local/webserver/nginx/sbin/nginx                      #启动服务
/usr/local/webserver/nginx/sbin/nginx -s reload            # 重新载入配置文件
/usr/local/webserver/nginx/sbin/nginx -s reopen            # 重启 Nginx
/usr/local/webserver/nginx/sbin/nginx -s stop              # 停止 Nginx
```

## 七.其他常用命令

- netstat -lntup 查看所有 tcp 端口监听
- ps -ef | grep nginx 查看 nginx 进程
- netstat -unltp|grep nginx 查看 nginx 端口监听
