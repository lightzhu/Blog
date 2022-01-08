---
title: Git 笔记
date: '2021-05-06 22:00'
keywords: Git
tags: Git
categories: Tool
comments: true
---

#### 配置

- `git config --global user.name 'name'` 配置用户名
- `git config --global user.email 'email@example.com'` 配置邮箱地址

#### 新建代码库

- `git init` 将当前目录初始化为 git 仓库，创建完成后会在当前文件夹下生成一个 .git 文件夹
- `git clone [url]` 拷贝一个 Git 仓库到本地

#### 增加/删除文件

- `git add [文件名.后缀] [文件名.后缀] ...` 添加若干个文件到暂存区
- `git add .` 添加当前目录下所有文件到暂存区
- `git rm [文件名.后缀]` 将文件从暂存区和硬盘中删除
- `git rm --cached [文件名.后缀]` 将文件从暂存区中删除

#### 代码提交

- `git commit -m '描述信息'` 使用 git add 命令将内容存入暂存区
- `git commot -am '描述信息'` 提交暂存区和提交仓库区一起执行
- `git commit [file1] [file2] ... -m [message]` 提交暂存区的指定文件到仓库区

#### 分支

- `git branch` 列出本地所有的分支
- `git branch -r` 列出远程所有分支
- `git branch -a` 列出本地和远程的所有分支
- `git branch [branch-name]` 新建一个分支，但是依然停留在当前分支
- `git checkout -b [branch-name]` 新建一个分支，并且切换到该分支
- `git checkout [branch-name]` 切换到指定分支，并且更新工作区
- `git checkout -` 切换到上一个分支
- `git merge [branch-name]` 合并指定分支到当前分支
- `git branch -d [branch-name]` 删除分支
- `git push origin --delete [branch-name]` 删除远程分支

#### 查看信息

- `git status` 显示有变更的文件
- `git status -s` 显示文件状态，A 表示已经添加到暂存区，AM 表示添加到暂存区后又有变动。
- `git log` 显示当前分支的版本历史
- `git log --stat` 显示 commit 历史，以及每次 commit 发生变更的文件
- `git log -p [file]` 显示指定文件相关的每一次 diff
- `git blame [file]` 显示指定文件是什么人在什么时候修改过
- `git diff` 显示工作区与暂存区的差异。查看尚未暂存的改动
- `git diff --cached [file]` 显示暂存区与上一个 commit 之间的差异
- `git diff HEAD` 查看已暂存和未暂存的所有改动
- `git diff --stat` 显示摘要而非整个 diff
- `git reset HEAD` 取消已暂存的内容

#### 远程同步

- `git fecth [remote-name]` 下载远程仓库的所有变动
- `git remote -v` 显示所有的远程仓库
- `git remote show [remote-name]` 显示某个远程仓库的信息
- `git remote add <远程主机名> <url>` 添加远程主机，用于连接本地和远程仓库
- `git remote rm <远程主机名>` 删除远程主机
- `git pull <远程主机名> <远程分支名>` 拉取远程分支并且合并到当前分支
- `git push <远程主机名> <本地分支名>` 推送本地分支到远程 master 主分支
- `git push -u origin master` 将本地 master 推送到 origin 主机，同时指定 origin 为默认主机，后面就可以不加任何参数使用`git push`了。

```
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/Vincent-R/Emrs.git
git push -u origin master
```

```
远程分支与当前分支关联(关联后可以直接使用git pull/push)
git branch --set-upstream-to=<远程主机名>/<远程分支名> <当前分支名>
若出现错误时，可尝试 git checkout <想要关联的本地分支名>
```

### 列出所有 tag

\$ git tag

### 新建一个 tag 在当前 commit

\$ git tag [tag]

### 新建一个 tag 在指定 commit

\$ git tag [tag][commit]

### 查看 tag 信息

\$ git show [tag]

### 提交指定 tag

\$ git push [remote][tag]

### 提交所有 tag

\$ git push [remote] --tags

### 新建一个分支，指向某个 tag

\$ git checkout -b [branch][tag]

### 显示有变更的文件

\$ git status

### 显示当前分支的版本历史

\$ git log

### 显示 commit 历史，以及每次 commit 发生变更的文件

\$ git log --stat

### 显示某个文件的版本历史，包括文件改名

$ git log --follow [file]
$ git whatchanged [file]

### 显示指定文件相关的每一次 diff

\$ git log -p [file]

### 显示指定文件是什么人在什么时间修改过

\$ git blame [file]

### 显示暂存区和工作区的差异

\$ git diff

### 显示暂存区和上一个 commit 的差异

\$ git diff --cached []

### 显示工作区与当前分支最新 commit 之间的差异

\$ git diff HEAD

### 显示两次提交之间的差异

\$ git diff [first-branch]...[second-branch]

### 显示某次提交的元数据和内容变化

\$ git show [commit]

### 显示某次提交发生变化的文件

\$ git show --name-only [commit]

### 显示某次提交时，某个文件的内容

\$ git show [commit]:[filename]

### 显示当前分支的最近几次提交

\$ git reflog

### 下载远程仓库的所有变动

\$ git fetch [remote]

### 显示所有远程仓库

\$ git remote -v

### 显示某个远程仓库的信息

\$ git remote show [remote]

### 增加一个新的远程仓库，并命名

\$ git remote add [shortname][url]

### 取回远程仓库的变化，并与本地分支合并

\$ git pull [remote][branch]

### 上传本地指定分支到远程仓库

\$ git push [remote][branch]

### 强行推送当前分支到远程仓库，即使有冲突

\$ git push [remote] --force

### 推送所有分支到远程仓库

\$ git push [remote] --all

### 恢复暂存区的指定文件到工作区

\$ git checkout [file]

### 恢复某个 commit 的指定文件到工作区

\$ git checkout [commit][file]

### 恢复上一个 commit 的所有文件到工作区

\$ git checkout .

### 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变

\$ git reset [file]

### 重置暂存区与工作区，与上一次 commit 保持一致

\$ git reset --hard

### 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变

\$ git reset [commit]

### 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致

\$ git reset --hard [commit]

### 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变

\$ git reset --keep [commit]

### 新建一个 commit，用来撤销指定 commit

### 后者的所有变化都将被前者抵消，并且应用到当前分支

\$ git revert [commit]

### 生成一个可供发布的压缩包

\$ git archive

### 备份当前工作区的内容

\$ git stash

### 从 Git 栈中读取最近一次保存的内容，恢复工作区的相关内容

\$ git stash pop

### 显示 Git 栈内的所有备份

\$ git stash list

### 清空 Git 栈

\$ git stash clear
