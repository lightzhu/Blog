---
title: Promise 简单实现
tags: Promise
# toc: true
keywords: ES6 promise
thumbnail: 'https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.4/image/js/promise.jpg'
categories:
  - JS
abbrlink: '7e709353'
comments: true
---

#### 什么是 Promise

promise 是一个对象，对象和函数的区别就是对象可以保存状态，函数不可以（闭包除外）,并未剥夺函数 return 的能力，因此无需层层传递 callback，进行回调获取数据,其代码风格，容易理解，便于维护并且多个异步等待合并便于解决,最终的目的是为了解决 JS 中过多的回调嵌套。

<!-- more -->

![](https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.2/image/bg1.jpg)

```bash
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class Promise {
  constructor(executor) {
    this.status = PENDING
    //初始化成功的回调
    this.onResolvedCb = []
    //初始化失败的回调
    this.onRejectedCb = []
    this.value = null
    this.reason = null
    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (e) {
      this.reject(e);
    }
  }
  resolve(value) {
    console.log(value + 'resolve')
    //如果当前状态是pending的话调用这个函数可以将状态改成fulfilled
    if (this.status == PENDING) {
      this.status = FULFILLED
      // 将获取到的值赋值给当前对象，并且让所有的成功回调函数执行
      this.value = value
      this.onResolvedCb.forEach((item) => item(value))
    }
  }
  reject(reason) {
    console.log(reason + 'reject')
    // 如果当前状态是pending的话调用这个函数可以将状态改成rejected
    if (this.status == PENDING) {
      this.status = REJECTED
      // 将原因值赋值给当前对象，并且让所有的失败的回调函数执行
      this.reason = reason
      this.onRejectedCb.forEach((item) => item(reason))
    }
  }
  then(onFulfilled, onRejected) {
    let self = this
    // 处理如果没有指定相应的回调时的情况
    onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected == 'function' ? onRejected : reason => { throw reason };
    if (self.status === FULFILLED) {
      let x = onFulfilled(self.value)
    }
    if (self.status === REJECTED) {
      let y = onRejected(self.reason)
    }
    if (self.status === PENDING) {
      self.onResolvedCb.push(function () {
        let x = onFulfilled(self.value)
      })
      self.onRejectedCb.push(function () {
        let x = onRejected(self.reason)
      })
    }
  }
}
module.exports = Promise
```
