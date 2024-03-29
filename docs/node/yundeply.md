---
title: 阿里云一键部署
date: '2021-05-06 21:00'
keywords:
  - 部署
  - 阿里云
tags:
  - Aliyun
categories: Server
comments: true
# sidebar: 'auto'
# publish: false
---

## 一键部署前端项目

- 1.ssh-keygen -t rsa -C admindeploy -f 在本地生成一个密钥文件
- 2.cd .ssh 文件夹，将 生成的 deploy 文件 copy 到当前文件夹 cp ~/deploy .
- 3.将 deploy.pub 文件 copy 到服务器 scp deploy.pub root@your serverip
- 4.将 deploy.pub 的内容 copy 到服务器.ssh 文件夹下的 authorized_keys 文件中 cat deploy.pub >> ~/.ssh/authorized_keys
- 5.将公钥 deploy.pub 配置到 github 项目的 secret 里面
- 6.配置项目的 action，使用 ssh-deploy 插件，配置好信息然后 start-commit

## action 配置

```bash
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [10.x]
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: "10.x"
    - run: npm install
    - run: npm run build --if-present
      env:
        CI: true
    - name: Deploy
      uses: easingthemes/ssh-deploy@v2.0.7
      env:
        SSH_PRIVATE_KEY: ${{secrets.ALIYUN}}
        ARGS: "-avz --delete"
        REMOTE_HOST: "${你的服务器IP地址}"
        REMOTE_USER: "root"
        SOURCE: "dist/"
        TARGET: "/usr/local/nginx/admin" // 项目发布到的目录

```
