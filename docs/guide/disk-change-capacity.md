---
title: Ubuntu服务器磁盘扩容
date: '2021-11-18 18:00:00'
categories: Ubuntu
tags: parted Ubuntu disk
comments: true
---

有时候需要对服务器的磁盘空间进行扩展，可以使用 parted 来调整分区：

## 进入 parted 命令行模式

`parted`

<div class="center">
<img style="height: 400px" src="/image/guide/parted.png" />
</div>

## 输入 print 查看分区结构

- `print`
  <div class="center">
  <img style="height: 400px" src="/image/guide/print.png" />
  </div>
- 这里可以看到 Number 2 是我想要扩展的分区

## 输入 resizepart 调整分区大小

- `输入resizepart`
- 输入 2
  <div class="center">
  <img style="height: 400px" src="/image/guide/parted01.png" />
  </div>
- yes
- 输入 -0（代表剩下的所有剩余磁盘），也可根据自己需要调整
- 到这里已经完成磁盘拓展，可以输入 print 查看调整后结构
- quit 退出 parted 命令行模式

## 更新系统分区

- 输入 lsblk 查看 `lsblk`
- 输入`df -hT` 显示磁盘分区,发现容量没有变
- 使用`sudo resize2fs /dev/sda2`命令刷新文件系统

## 重新 df -hT 命令进行确认

<div class="center">
<img style="height: 400px" src="/image/guide/resize2fs.png" />
</div>
- 全部完成
