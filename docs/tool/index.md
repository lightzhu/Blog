---
title: Html 123
# toc: true
keywords: hao123
thumbnail:
categories: html
tags:
comments: true
---

<style>
  .main{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: center;
  }
  .item{
    width:22%;
    text-align:center;
    margin-top:15px;
  }
</style>

<h2>网址导航</h2>
<div class="main custom">
  <p class="item" :class="[$style.example]">
    <a href="https://lightzhu.github.io/dev/ariang">AriaNg</a>
  </p>
  <p class="item" :class="$style.example">
    <a href="http://91.134.238.131:1180/docs/vue/introduce-cn/">Ant Design Vue</a>
  </p>
  <p class="item" :class="$style.example">
    <a href="http://p3terx.gitee.io/ariang">Ariang gitee</a>
  </p>
  <p class="item" :class="$style.example">
    <a href="https://web.2048888.xyz/">电影</a>
  </p>
  <!-- <p @click="hand">ssss</p> -->
</div>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  props: ['slot-key'],
  mounted () {

  },
  methods:{
    hand(){
      console.log(0)
    }
  }
}
</script>
