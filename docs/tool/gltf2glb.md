---
title: 3D 模型转换及压缩
date: '2022-01-06 18:00:00'
keywords: 3D three gltf glb KHR_draco_mesh_compression KHR_mesh_quantization
tags: 3D
categories: Tool
comments: true
---

<!DOCTYPE HTML>
<html>

<head>
  <meta http-equiv="content-type" content="text/html;charset=utf-8;" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="robots" content="all" />
  <meta name="robots" content="index,follow" />
  <title>3D 模型转换及压缩</title>
  <link rel="stylesheet" href="/css/picnic.min.css">
  <style>
    .container{
      width:100%;
    }
    .form-group {
      display:flex;
      justify-content: center;
      align-items: center;
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
    .file-box{
      margin-top:20px;
    }
    .down{
      margin-top:20px;
    }
    .down p{
      display:inline-block;
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
    .down{
      display:none;
    }
  </style>
</head>

<body>
  <div class="container">
    <div>
       <label>
        <input type='radio' name="radiotype" value="0">
        <span class="checkable">.gltf 转 .glb</span>
      </label>
       <label>
        <input type='radio' name="radiotype" value="1">
        <span class="checkable">.glb 转 .gltf</span>
      </label>
       <label>
        <input type='radio' name="radiotype" value="2">
        <span class="checkable">材质拆分</span>
      </label>
      <label>
        <input type='radio' name="radiotype" value="3">
        <span class="checkable">.glb向量化压缩</span>
      </label>
      <label>
        <input type='radio' name="radiotype" value="4">
        <span class="checkable">KHR_draco_mesh_compression 网格压缩</span>
      </label>
      <label>
        <input type='radio' name="radiotype" value="5">
        <span class="checkable">.glb EXT_meshopt_compression</span>
      </label>
    </div> 
    <div class="file-box">
      <div class="form-group">
        <label for="file">模型文件：</label>
        <input type="file" id="file" class="form-control" accept=".gltf,.glb" placeholder="上传">
        <button id="creatFile">确认</button>
      </div>
      <div class="down">
        <p id="dist">下载地址</p>
        <span class="size"></span>
        <a href="/" target="_blank">点击下载</a>
      </div> 
    </div> 
  </div>
  <!-- <script src="/js/jquery-1.8.0.min.js"></script> -->
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.8.0/jquery-1.8.0.min.js"></script>
  <script>
    $(document).ready(function(){
       $("#creatFile").click(function(){
        console.log($("input[name='radiotype']:checked").val());
        let type = $("input[name='radiotype']:checked").val();
        var files = $('#file').prop('files');
        var data = new FormData();
        data.append('file', files[0]);
        data.append('type', type);
        $('.down').hide();
        uploadFileAndconvert(data);
      })
      function uploadFileAndconvert(params){
        $.ajax({
          type: "post",
          url: "http://127.0.0.1:7001/3dmodel/convert",
          // url:"https://api.2048888.xyz/qrcode",
          data:params,
          cache: false, 
          processData: false, 
          contentType: false, 
          success: function (res) {
            console.log(res)
            if(res.code!==200){
              return window.alert(res.msg)
            }
            $('.down').show().find('#dist').text(res.data.path)
            $('.down .size').eq(0).text(res.data.size)
            $('.down a').eq(0).attr('href',res.data.path)
          },
          error: function (err) {
            console.log(err)
          }
        })
      }
    })
  </script>
</body>

</html>
