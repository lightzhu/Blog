## Redis 清空所有数据步骤总结

## 切换至 Redis 安装目录,在 cmd 命令窗口，输入连接 Redis 指令：redis-cli.exe -h 127.0.0.1 -p 6389

## 连接成功后，如果 Redis 配置密码模式，首先需要输入合法密码，如果没有配置，可以直接过滤此步骤

## 在 cmd 命令窗口，输入清空所有 Redis 数据指令:flushall

## Redis window 下启动命令

```
cmd
redis-server.exe redis.window.conf
```
