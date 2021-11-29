---
title: rclone 挂载onedrive
date: '2021-11-24 18:00:00'
# toc: true
keywords: rclone onedrive
categories: Tool
tags: rclone
comments: true
---

## Rclone 是一款的命令行工具，支持在不同对象存储、网盘间同步、上传、下载数据。

官网网址：https://rclone.org
Github 项目：https://github.com/ncw/rclone

## ubuntu 使用编译的执行文件安装

- github 下载下载对应的版本
  `curl -O https://downloads.rclone.org/rclone-current-linux-amd64.zip unzip rclone-current-linux-amd64.zip cd rclone-*-linux-amd64`
- copy 执行文件到 /usr/bin 目录
- 设置执行权限
  `sudo cp rclone /usr/bin/ sudo chown root:root /usr/bin/rclone sudo chmod 755 /usr/bin/rclone`
- 其他设置
  `sudo mkdir -p /usr/local/share/man/man1 sudo cp rclone.1 /usr/local/share/man/man1/ sudo mandb`

## 配置挂载

- 将 mac 或者其他系统生成的 config 文件直接拷贝到 ubuntu /root/.config/rclone 的配置文件中
- 执行 rclone config 命令则可以查看到相关的网盘配置
- 挂载到系统文件夹
  `sudo rclone mount onedrive:light /adrive/one --copy-links --no-gzip-encoding --no-check-certificate --allow-other --allow-non-empty --umask 000`
- 解释 挂载 onedrive（remotes 的名字）下面的 light 文件夹到系统根目录/adrive/one 文件夹下面

## 设置开机启动挂载

- 新建一个 rclone.service 文件：
  `vi /usr/lib/systemd/system/rclone.service`
- 写入
  `
  [Unit]
  Description=rclone

[Service]
User=root
ExecStart=/usr/bin/rclone mount onedrive:light /adrive/one --copy-links --no-gzip-encoding --no-check-certificate --allow-other --allow-non-empty --umask 000

[Install]
WantedBy=multi-user.target
`

- 保存退出

## 重载 daemon，让新的服务文件生效

`systemctl daemon-reload`

- 使用 systemctl 来启动 rclone
  `systemctl start rclone`
- 设置开机启动：
  `
  systemctl enable rclone
  // 停止、查看状态可以用：

  systemctl stop rclone
  ystemctl status rclone
  `

- 常用的 rclone 命令有：
  `rclone config - 以控制会话的形式添加rclone的配置，配置保存在.rclone.conf文件中。 rclone copy - 将文件从源复制到目的地址，跳过已复制完成的。 rclone sync - 将源数据同步到目的地址，只更新目的地址的数据。 rclone move - 将源数据移动到目的地址。 rclone delete - 删除指定路径下的文件内容。 rclone purge - 清空指定路径下所有文件数据。 rclone mkdir - 创建一个新目录。 rclone rmdir - 删除空目录。 rclone check - 检查源和目的地址数据是否匹配。 rclone ls - 列出指定路径下所有的文件以及文件大小和路径。 rclone lsd - 列出指定路径下所有的目录/容器/桶。 rclone lsl - 列出指定路径下所有文件以及修改时间、文件大小和路径。 rclone md5sum - 为指定路径下的所有文件产生一个md5sum文件。 rclone sha1sum - 为指定路径下的所有文件产生一个sha1sum文件。 rclone size - 获取指定路径下，文件内容的总大小。. rclone version - 查看当前版本。 rclone cleanup - 清空remote。 rclone dedupe - 交互式查找重复文件，进行删除/重命名操作。`

## Mac 系统安装 rclone,生成配置文件

- 安装和 ubuntu 类似
- 执行 rclone config
- 选择新建
- 前往 Azure 管理后台 https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade
- 新建一个应用，获取 client_id,新建一个密钥 client_secret
- 应用回调地址填写：http://localhost:53682/
- 浏览器会自动打开网页进行授权回去 refresh token
- 配置完成在终端可以查看到完整的 conf 信息，保存备用
- rclone lsd onedrive: 可以查看挂载的文件
