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
        <span class="checkable">.glb向量化压缩</span>
      </label>
        <label>
        <input type='radio' name="radiotype" value="5">
        <span class="checkable">.glb KHR_draco_mesh_compression 网格压缩</span>
      </label>
      <label>
        <input type='radio' name="radiotype" value="6">
        <span class="checkable">.glb EXT_meshopt_compression</span>
      </label>
    </div> 
    <div class="file-box">
      <div class="form-group">
        <label for="file">模型文件：</label>
        <input type="file" id="file" class="form-control" accept=".gltf,.glb" placeholder="上传">
        <button id="creatFile">确认</button>
      </div>
      <div class="image-box">
        <p>下载地址</p>
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
        console.log(data);
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
          success: function (data) {
            console.log(data)
            // $('.file-box .img').eq(0).attr('src',data.url)
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
