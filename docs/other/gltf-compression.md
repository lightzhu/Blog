---
title: GLTF 3D模型压缩探索
date: '2022-01-07 15:00:00'
keywords: 3D three gltf glb KHR_draco_mesh_compression KHR_mesh_quantization
tags: 3D
categories: Tool
comments: true
# sidebar: 'auto'
# publish: false
---

## 3D 性能优化 | 3D 模型 glTF 文件压缩探索

<div class="center">
<img class="mcenter" style="height: 200px" src="https://gitee.com/lightzhu/picgo/raw/master/blog-thumbnail.png" />
</div>
<!-- more -->

## 了解 GLTF

是三维场景和模型的标准文件格式，glTF 格式本质上是一个 JSON 文件。这一文件描述了整个 3D 场景的内容。它包含了对场景结构进行描述的场景图。场景中的 3D 对象通过场景结点引用网格进行定义。如下图：materials 和 meshes 分别描述了材质及网格信息

<div class="center">
<img style="height: 350px" src="https://gitee.com/lightzhu/picgo/raw/master/gltf元素json.png" />
</div>

glTF 文件有两种拓展形式，.gltf（JSON / ASCII）或.glb（二进制）。.gltf 文件可能是自包含的，也可能引用外部二进制和纹理资源，而 .glb 文件则是完全自包含的。一般情况下 gltf 格式的模型文件包括在同一个文件夹下的 json 描述及二进制数据.bin 和纹理贴图.png\.jpg，例如下图：

<div class="center">
<img style="height: 350px" src="https://gitee.com/lightzhu/picgo/raw/master/gltf文件构成.jpg" />
</div>

## gltf 格式模型压缩打体可通过下面几种方式

### 转二进制,分离贴图图片

- gltf 自身包含二进制数据的格式，由于数据是通过 base64 位编码的形式通过 uri 的引用，会额外增加约 33%编码资源。所以初级的压缩策略：拆分二进制数据及纹理贴图，服务器开启 gzip

### .gltf 转成.glb

- 上面的方法依然没有解决.gltf 文件编码（明文需要编码）问题所带来的增加额外空间的问题。压缩策略二：将.gltf 转成.glb（一种容器格式 Binary glTF）。
  <div class="center">
  <img style="height: 350px" src="https://gitee.com/lightzhu/picgo/raw/master/gltftoglb.png" />
  </div>

### KHR_mesh_quantization

- 向量化。顶点属性通常使用 FLOAT 类型存储，将原始始浮点值转换为 16 位或 8 位存储以适应统一的 3D 或 2D 网格，也就是我们所说的 quantization 向量化，该插件主要就是将其向量化(精度会有丢失)。

```
效果：顶点POSITION	（（x,y,z）12 字节）=> 8 字节
	  纹理坐标TEXCOORD（（u,v）8 字节）	  => 4 字节
    法线NORMAL		  （（x,y,z）12 字节）=> 4 字节
	  切线TANGENT		  （16 字节）	        => 4 字节
```

<div class="center">
<img style="height: 350px" src="https://gitee.com/lightzhu/picgo/raw/master/glbtoquantization.png" />
</div>

### EXT_meshopt_compression

- 针对 GPU 效率进行了优化，除了优化压缩率之外，压缩格式还具有两个特性——非常快速的解码（MeshoptDecoder 解码器使用 WebAssembly SIMD，在现代桌面硬件上以约 1 GB/秒的速度运行），以及与通用压缩兼容的字节存储。不是尽可能地减少编码大小，而是以通用压缩器进一步压缩的方式构建比特流，基本没有数据损失。

<div class="center">
<img style="height: 350px" src="https://gitee.com/lightzhu/picgo/raw/master/meshopt-compression.png" />
</div>

### DRACO 网格压缩

- 采用源于谷歌的开源 Draco 算法，用于压缩和解压缩 3D 网格和点云，Edge breaker 3D 压缩算法改变了模型的网格数据的索引方法，缺少了原来的网格顺序。通过减少顶点坐标、顶点纹理坐标等信息的位数，以减少数据的存储量，压缩的使文件小得多，客户端设备上需要额外的解码器 DRACOLoader（WebAssembly wasm）和解码时间并且可能会出现较明显的画质损失，但是可以设置压缩级别减少损失。

<div class="center">
<img style="height: 350px" src="https://gitee.com/lightzhu/picgo/raw/master/glbtodraco.png" />
</div>

RACO 压缩和 meshopt_compression 压缩的文件使用市需要解码器。
