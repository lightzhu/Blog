---
title: oracle arm服务器安装java环境
date: '2021-10-26 22:00:00'
keywords: oracle arm tomcat9 java1.8
categories: Tool
tags: oracle
comments: true
---

甲骨文云 arm 服务器安装 tomcat9 之后报错：
`line 235: /www/server/tomcat/bin/jsvc: No such file or directory`

## 解决

- 手动安装 java1.8,这里选择支持 arm 架构的 open JDK 8
- [open doc](https://openjdk.java.net/install)
  `sudo apt-get install openjdk-8-jre`
- 这是会安装到/usr/lib/jvm 文件夹下面，java -version 就能看到当前 java 的版本

## 添加环境变量

- `vi ~/.bashrc`
- 修改成正确的目录
  `#set oracle jdk environment export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-arm64 ## 这里要注意目录要换成自己解压的jdk 目录 export JRE_HOME=${JAVA_HOME}/jre export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib export PATH=${JAVA_HOME}/bin:$PATH`
- 使环境变量马上生效
  `source ~/.bashrc`
- 系统注册此 jdk（300 为优先级）
  `sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-8-openjdk-arm64/bin/java 300`

## 编译 jsvc 文件

- 进入 Tomcat 安装 cd /www/server/tomcat/bin/
- 进入 jsvc 的代码目录 cd ./commons-daemon-1.2.4-native-src/unix/
- 确定编译参数 ./configure --with-java=/usr/lib/jvm/java-8-openjdk-arm64
- 编译 make
- 将编译好的文件放到指定位置 cp jsvc ../../jsvc（这个路径下/www/server/tomcat/bin）

## 最后的办法，手动上传编译好的 jsvc 文件到 /www/server/tomcat/bin 目录下，再启动 tomcat 发现成功

[下载地址](https://bytedance.lanzoui.com/i7IEyvth3kf)
