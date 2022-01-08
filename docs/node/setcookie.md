---
title: express-session跨域setcookie
date: '2021-09-17 17:00'
keywords:
  - express-session
  - SameSite
  - set-cookie
tags:
  - nginx
  - set-cookie
categories: Server
comments: true
---

## 一. 问题

前后端分离，服务端和前端的项目分别在不同的域名下，服务端设置 Set-Cookie 浏览器的 cookie 显示不出来，设置不成功。

## 二.首选是 express 服务器 header 设置

```
  res.header('Access-Control-Allow-Origin', allowOrigin)
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
  res.header('Access-Control-Expose-Headers', 'Set-Cookie')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Credentials', true) //可以带cookies
```

## 三.session-cookie 设置

```
session: {
    saveUninitialized: true,
    cookie: {
      httpOnly: false,
      secure: true,
      sameSite: 'none',
      maxAge: 6 * 60 * 60 * 1000
    }
  }
```

## 四.nginx 代理服务设置

```
location / {
  proxy_pass http://127.0.0.1:9090/;
  #proxy_cookie_path / /;
  proxy_set_header Host $host:$server_port;
  proxy_set_header Remote_Addr $remote_addr;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Scheme $scheme;
  proxy_set_header X-Forwarded-Scheme $scheme;
   proxy_set_header X-Forwarded-Proto $scheme;
  proxy_set_header Cookie $http_cookie;
}

```
