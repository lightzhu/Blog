---
title: 百度语音合成演示
date: '2019-09-08 18:00:00'
keywords: 百度语音合成
tags: baidu
categories: Other
comments: true
# sidebar: 'auto'
# publish: false
---

<!DOCTYPE HTML>
<html>

<head>
  <meta http-equiv="content-type" content="text/html;charset=utf-8;" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="robots" content="all" />
  <meta name="robots" content="index,follow" />
  <title>百度语音合成</title>
  <link rel="stylesheet" href="/css/picnic.min.css">
  <style>
    .container{
      width:100%;
    }
    .button {
      margin: 20px 0;
      width: 100px;
      float: right;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1 class="text-center">百度语音合成演示</h1>
    <div>
      <textarea id="text" class="form-control" rows="5" placeholder="输入要合成的文本"></textarea>
      <div><a class="button" download="audio.mp3" id="btn" type="audio/mp3" >合成</a> </div>
    </div>
  </div>
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.8.0/jquery-1.8.0.min.js"></script>
  <script>
    $("#btn").click(function () {
      // console.log($('#text').val())
      let url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=7&pit=8&vol=8&per=1&aue=3&text=" + $('#text').val().trim();
      $(this).attr('href', url)
      // $.ajax({
      //   type: "get",
      //   url: "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=8&text=" + $('#text').val().trim(),
      //   // dataType: "json",
      //   success: function (data) {
      //     console.log(data);
      //     $('.container a').attr('href')
      //   },
      //   error: function (err) {
      //     console.log(err)
      //   }
      // });
      setTimeout(function(){
        $('#text').val('')
      },1000)
    });
  </script>
</body>

</html>
