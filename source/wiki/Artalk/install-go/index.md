---
layout: wiki
wiki: Artalk-doc # 这是项目名
title: 安装（GO）
keywords: 安装artalk,Artalk,配置Artalk
order: 1
---



#### 环境

- **Go > 1.16**
- git

#### 安装

1.fork [ArtalkJS/ArtalkGo: 🗃 Artalk 评论系统后端程序 施工中...](https://github.com/ArtalkJS/ArtalkGo) 仓库

{% copy git clone https://hub.fastgit.org/ArtalkJS/ArtalkGo.git %}

2.cd到/ArtalkGo/目录下后，运行main.go以下载依赖（如果go版本<1.16就有报错）

{% copy go run main.go %}

![Snipaste_2021-08-29_15-05-10](https://asstes.thun888.xyz/file/pic-bed/2021/09/8140e9b285f7724a0b19d6286b1775ee.webp)

3.安装完后再运行一遍，不出意外应该是这样的

![image-20210911094243644](https://asstes.thun888.xyz/file/pic-bed/2021/09/9588e34f11217da4250fb4bc3a79019c.webp)

#### 配置

与php版本类似，把`artalk-go.example.yml`重命名为`artalk-go.yml`

打开来，设置下第8行的app_key（加密密钥）

这里为了演示改了点

![image-20210911095835151](https://asstes.thun888.xyz/file/pic-bed/2021/09/bb9ae0f3da5cdc5b3e81215c5400404b.webp)

#### 运行

终端里输入

{% copy go run main.go serve %}

![image-20210911100107336](https://asstes.thun888.xyz/file/pic-bed/2021/09/c8449d00b4edf72cf9695db7e5b07dd5.png)

随后便可以通过设置的监听地址访问了

![image-20210911100226980](https://asstes.thun888.xyz/file/pic-bed/2021/09/934d8c97a469f39bb8d3d05a283e1356.png)

当然，新的版本中规范了api，直接用肯定是不行的

![image-20210911101200601](https://asstes.thun888.xyz/file/pic-bed/2021/09/90ce9be3b670668dedbf415bc0eff900.png)

![image-20210911101245911](https://asstes.thun888.xyz/file/pic-bed/2021/09/c429332083d37800f740dff38378f5dc.png)