---
title: 二维码生成器
comments: true
thumbnail: 'https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.6.6/image/wap.png'
tags: QRCode
---

<!DOCTYPE HTML>
<html>

<head>
  <meta http-equiv="content-type" content="text/html;charset=utf-8;" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="robots" content="all" />
  <meta name="robots" content="index,follow" />
  <title>网址二维码生成器</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.2/css/bootstrap.min.css">
  <style>
    .container{
      width:100%;
    }
    .form-group {
      display:flex;
    }
    .form-group label{
      line-height:34px;
      margin:0;
    }
    .form-group .form-control{
      width:66%;
      margin-right:10px;
    }
    .form-group .btn{
      margin:0px;
    }
    .image-box{
      min-height:350px;
      text-align:center;
    }
    .image-box img{
      min-width:300px;
      min-height:300px;
      height:auto;
      border:1px solid #ccc;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1 class="text-center">二维码生成器</h1>
    <div class="web">
      <div class="form-group">
        <label for="website">网 址：</label>
        <input type="text" class="form-control" id="website" placeholder="输入网址">
        <button id="creatCode" class="btn btn-primary">确认</button> 
      </div>
      <div class="image-box">
        <img src="" class="img" alt="生成的二维码">
      </div> 
    </div>
    <div class="file-box">
      <div class="form-group">
        <label for="website">网 址：</label>
        <input type="file" id="file" accept="image/*" placeholder="上传图片">
        <button id="creatFileCode" class="btn btn-primary">确认</button> 
      </div>
      <div class="image-box">
        <img src="" class="img" alt="生成的二维码">
      </div> 
    </div> 
  </div>
  <script src="https://cdn.jsdelivr.net/gh/lightzhu/public_cdn@0.2/js/jquery-1.11.1.min.js"></script>
  <script>
    $("#creatCode").click(function(){
      if($('#website').val().length){
        console.log($('#website').val())
        getQrcode($('#website').val())
      }
    })
    function getQrcode(url){
      $.ajax({
        type: "post",
        url: "https://webadd.herokuapp.com/qrcode",
        data:{url:url,type:1},
        dataType: "json",
        success: function (data) {
          $('.web .img').eq(0).attr('src',data.url)
          $('#website').val('')
        },
        error: function (err) {
          console.log(err)
        }
      })
    }
    $("#creatFileCode").click(function(){
      var files = $('#file').prop('files');
      var data = new FormData();
      data.append('file', files[0]);
      data.append('type', '2');
      console.log(data)
      getFileQrcode(data)
    })
    function getFileQrcode(params){
      $.ajax({
        type: "post",
        // url: "http://192.168.1.222:9090/qrcode",
        url:"https://api.2048888.xyz/qrcode",
        data:params,
        cache: false, 
        processData: false, 
        contentType: false, 
        success: function (data) {
          console.log(data)
          $('.file-box .img').eq(0).attr('src',data.url)
        },
        error: function (err) {
          console.log(err)
        }
      })
    }
  </script>
</body>

</html>
