---
title: 我的第一篇Blog
thumbnail: 'https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.2/image/js.png'
---

使用[Hexo](https://hexo.io/)和 githubpages 搭建个人博客!

<!-- more -->

## 快速开始

### 创建一片文章

```bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### 启动服务

```bash
$ hexo server or hexo s
```

More info: [Server](https://hexo.io/docs/server.html)

### 生成静态文件

```bash
$ hexo generate or hexo g
```

More info: [Generating](https://hexo.io/docs/generating.html)

### 部署到线上

- 在根目录下\_config.yml 里面任意位置新增以下语句
- 建议通过密钥的方式关联

```bash
deploy:
  type: git
  # 填上你自己的仓库名，注意后面有`.git`
  repository: git@github.com:your_username/your_username.github.io.git
  branch: master
```

```bash
$ hexo deploy or hexo d
```

### 自定义域名

- 到域名解析后台记录类型选择 CNAME 新增解析， 主机记录填 www-> 解析线路选择默认-> 记录值填 yourname.github.io
- 再添加一个解析，记录类型 A 主机记录填 www-> 解析线路选择默认-> 记录值填你 GitHub 的 ip 地址（在 cmd 中）ping yourname.github.io
- 解析生效后 www.your 域名.xxx 将被解析到 https://yourname.github.io/（你的githubpages主页）

### 解决每次 deploy 自定义域名失效问题

- 这个问题原因是每次部署后原来的文件被替换了，而 Hexo 生成的静态文件没有这个 CNAME 记录
- 解决办法：在 source 文件夹新增文件 CNAME 文件，内容为 你的域名地址 例如：www.2048888.xyz
- 其他方式：每次 hexo d 之后，就去 GitHub 仓库根目录新建 CNAME 文件，比较麻烦。

前往 Hexo 文档[documentation](https://hexo.io/docs/) 查看更多帮助。
