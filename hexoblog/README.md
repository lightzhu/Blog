# 这个文件夹是基于 hexo blog ，旧项目，现已完全迁移到当前项目，此文件夹只做备份

## 创建项目

- npm install hexo-cli -g
- hexo init blog
- cd blog
- npm install
- hexo server
- hexo generate
- hexo deploy

## 安装 icarus

- git clone https://github.com/ppoffice/hexo-theme-icarus.git themes/icarus

## 清除缓存，然后重新生成静态文件,重新启动

- hexo clean
- hexo g
- hexo s

## 部署

- 在根目录下\_config.yml 里面任意位置新增以下语句

```bash
deploy:
  type: git
  # 填上你自己的仓库名，注意后面有`.git`
  repository: git@github.com:your_username/your_username.github.io.git
  branch: master
```

- npm install hexo-deployer-git --save
- hexo deploy （d）

## 图片地址

- https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.2/image/
