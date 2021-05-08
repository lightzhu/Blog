---
title: Linux简单命令
date: '2021-05-07 21:00'
keywords: Linux
tags:
  - Linux
categories:
  - Server
comments: true
# sidebar: 'auto'
# publish: false
---

## 1.netstat -anp |grep 端口号 查看端口使用情况

## 2.netstat -nultp 查看本机端口占用情况

## 3.kill PID 结束对应 pid 的应用

## 4.mv xxx.md /home/www/deploy 移动 xxx.md 文件到指定文件夹

## 5.mkdir dir1 创建一个叫做 'dir1' 的目录'

## 6.rmdir dir1 删除一个叫做 'dir1' 的目录'

## 7.rm -rf dir1 删除一个叫做 'dir1' 的目录并同时删除其内容

## 8.gunzip file1.gz 解压一个叫做 'file1.gz'的文件

## 9.gzip file1 压缩一个叫做 'file1'的文件

## 10.zip file1.zip file1 创建一个 zip 格式的压缩包

## 11.zip -r file1.zip file2 dir1 将几个文件和目录同时压缩成一个 zip 格式的压缩包

## 12.unzip file1.zip 解压一个 zip 格式压缩包

## 13.find / -name file1 从 '/'开始进入根文件系统搜索文件和目录

## 14.find / -user user1 搜索属于用户 'user1' 的文件和目录

## 防火墙相关命令操作

### 添加 80 端口的访问权限，这里添加后永久生效

```
firewall-cmd --zone=public --add-port=80/tcp --permanent
firewall-cmd --reload
```

### 查看 80 端口访问权限情况

```
firewall-cmd --zone=public --query-port=80/tcp
```

### 关闭 80 访问权限

```
firewall-cmd --zone=public --remove-port=80/tcp --permanen
```

- 启动： systemctl start firewalld
- 查看状态： systemctl status firewalld
- 停止： systemctl disable firewalld
- 禁用： systemctl stop firewalld
- 启动服务：systemctl start firewalld.service
- 关闭服务：systemctl stop firewalld.service
- 重启服务：systemctl restart firewalld.service
- 服务的状态：systemctl status firewalld.service
- 在开机时启用一个服务：systemctl enable firewalld.service
- 在开机时禁用一个服务：systemctl disable firewalld.service
- 查看服务是否开机启动：systemctl is-enabled firewalld.service
- 查看已启动的服务列表：systemctl list-unit-files|grep enabled
- 查看启动失败的服务列表：systemctl --failed
- 查看版本： firewall-cmd --version
- 查看帮助： firewall-cmd --help
- 显示状态： firewall-cmd --state
- 查看所有打开的端口： firewall-cmd --zone=public --list-ports
- 更新防火墙规则： firewall-cmd --reload
- 查看区域信息:  firewall-cmd --get-active-zones
- 查看指定接口所属区域： firewall-cmd --get-zone-of-interface=eth0
- 拒绝所有包：firewall-cmd --panic-on
- 取消拒绝状态： firewall-cmd --panic-off
- 查看是否拒绝： firewall-cmd --query-panic
