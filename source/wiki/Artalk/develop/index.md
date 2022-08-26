---
layout: wiki
wiki: Artalk-doc # 这是项目名
title: 开发
order: 3
updated: 2022-02-12 22:33:00
---

!!! warning 注意
本页面最后编辑时间为2021/7/21，在日后的版本中可能不再适用，请以仓库为准

#### 自定义头像源

官方仓库中是在配置中确定

![image-20210714150341481](https://raw.thun888.xyz/thun888/tuku/master/img/image-20210714150341481.png)

不过我不想每个页面都多出这么一句话来拖慢速度（虽然微乎其微但可以减少冗余代码🙃）

- 打开artalk.js,搜索`cdn`

  ![image-20210714150632090](https://raw.thun888.xyz/thun888/tuku/master/img/image-20210714150632090.png)

- 直接替换就好

#### 自定义表情包

> **仓库里也有，这里作为补充**![image-20210714150859429](https://raw.thun888.xyz/thun888/tuku/master/img/image-20210714150859429.png)

!!! warning 注意
由于自定义会使原本引入代码长一大截，建议新建一个js再在需要的地方引入![image-20210714151645540](https://raw.thun888.xyz/thun888/tuku/master/img/image-20210714151645540.png)

- 在`new Artalk({`下打个回车，  粘贴`emoticons: eData,`

![image-20210714152524758](https://raw.thun888.xyz/thun888/tuku/master/img/image-20210714152524758.png)

- 在`new Artalk({`上粘贴

  ```js
  let eData = {
    // ...
  }
  ```

  ![image-20210714152727550](https://raw.thun888.xyz/thun888/tuku/master/img/image-20210714152727550.png)

- 打开[表情包配置格式参考](https://raw.fastgit.org/ArtalkJS/Artalk/master/src/assets/emoticons.json)，把`第一个{`和`最后一个}`中的文字复制到let eData = { }中

![image-20210714153133048](https://raw.thun888.xyz/thun888/tuku/master/img/image-20210714153133048.png)

- 然后就是自定义了，在复制后的倒数第二个}后加个`,`，在`，`后按回车，按以下格式进行

  ```yaml
      "分类名称": {
            "inputType": "image", //类型
            "container": {
                  "表情名称": "表情url/颜文字对应文字",
        }
      }
  ```

> 可以前往 [emotion.xiaokang.me](https://emotion.xiaokang.me) 复制现成的

!!! Warning "注意"
在类型一项中，填写`emoticon`即”颜文字类“，点击插入对应文字<br>填写`image`即”图片类“，点击插入对应图片<br>表情url中有特殊符号时会无法显示（bug）<br>

\~\~本站一部分表情用`超星学习通`作为图床，毕竟又快又不要钱~😎~\~

以上放屁，有防盗链,建议用[去不图床](https://7bu.top/),如果一定要用可以在`<head>`中加入`<meta name="referrer" content="no-referrer">`

`配置完像这样`

![image-20210714154556238](https://raw.thun888.xyz/thun888/tuku/master/img/image-20210714154556238.png)

![image-20210714154729782](https://raw.thun888.xyz/thun888/tuku/master/img/image-20210714154729782.png)

#### 自定义按钮文字

没什么好说的，打开artalk.js搜索替换就好

#### 按钮点击加载

artalk目前没有懒加载表情，但我们可以通过网页加载好后让访客点击按钮再加载

- 找到原来放artalk.js的地方，替换为

  ```html
  <script>
  function load(){
          var script = document.createElement("script");
          script.type="text/javascript";
          script.src='/js/artalkconfig.js'; //替换为自己的artalk.js链接
          document.body.appendChild(script)
      }
  </script>
  ```

- 找个地方放

  ```
  <a href="javascript:load();">点击加载评论</a>
  ```

  自行美化\[doge\]

#### 未压缩版本

因为原版经过gzipped,导致源码可读性大大降低，这里提供一份未压缩的

[蓝奏云](https://thun888.lanzoui.com/i5S6dr7379i)