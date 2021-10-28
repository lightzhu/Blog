---
title: oracle cloud 登录地址
date: '2021-10-12 17:00:00'
categories: Tool
tags: oracle cloud
comments: true
---

申请注册好甲骨文云后找不到登陆地址？因为甲骨文云各区域登录是分开的，下面试汇总的登陆地址方便直接登录：

## 韩国 首尔

- https://console.ap-seoul-1.oraclecloud.com

## 韩国 春川

- https://console.ap-chuncheon-1.oraclecloud.com

## 德国

- https://console.eu-frankfurt-1.oraclecloud.com

## 日本 东京

- https://console.ap-tokyo-1.oraclecloud.com

## 美国 凤凰城

- https://console.us-phoenix-1.oraclecloud.com

## 美国 圣何塞

- https://console.us-sanjose-1.oraclecloud.com

## 万用登陆任何地区：

- https://cloud.oracle.com/?tenant=你申请的时候的用户名

## ubuntu20 进不去宝塔面板问题

- 防火墙也放行了，安全组已经开放端口
- apt-get purge iptables 不使用 iptables
- reboot

### 或者原理一样

- rm -f /etc/iptables/rules.v4
- rm -f /etc/iptables/rules.v6
- reboot
