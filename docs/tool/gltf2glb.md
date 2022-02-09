---
title: 3D 模型转换及压缩
date: '2022-01-06 18:00:00'
keywords: 3D three gltf glb KHR_draco_mesh_compression KHR_mesh_quantization
tags: 3D
categories: Tool
comments: true
---

<div class="center">
<img class="mcenter" style="height: 200px" src="https://gitee.com/lightzhu/picgo/raw/master/blog-thumbnail.png" />
</div>

<!-- more -->

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
    .tip{
       margin-top:20px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div>
       <label>
        <input type='radio' name="radiotype" checked value="0">
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
        <span class="checkable">EXT_meshopt_compression 压缩</span>
      </label>
    </div>
    <div>
      <label>
        <input type='radio' name="radiotype" value="4">
        <span class="checkable">KHR_mesh_quantization 向量化压缩</span>
      </label>
      <label>
        <input type='radio' name="radiotype" value="5">
        <span class="checkable">KHR_draco_mesh_compression 网格压缩</span>
      </label>
    </div>
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
    <div class="tip">
      <h3>DRACO 压缩的文件需要使用解码器</h3>
      <p>解码需要draco_decoder.js draco_decoder.wasm这三个在threejs /examples/js/libs/ 已经准备好了，复制到你的服务器中DRACOLoader.setDecoderPath()你需要指定的路径。</p>
      <div class="image-box">
        <img src="https://gitee.com/lightzhu/picgo/raw/master/dracoloader使用.png" class="img">
      </div> 
    </div>
    <div class="tip">
      <h3>meshopt_compression压缩的文件使用</h3>
      <p>解码需要meshopt_decoder.module.js文件同样在threejs /examples/js/libs/ 里。</p>
      <div class="image-box">
        <img src="https://gitee.com/lightzhu/picgo/raw/master/meshopt_compression.png" class="img">
      </div> 
    </div>
  </div>
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
          // url: "http://127.0.0.1:7001/3dmodel/convert",
          url:"https://xapi.2048888.xyz/3dmodel/convert",
          data:params,
          cache: false,
          timeout : 50000,
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
