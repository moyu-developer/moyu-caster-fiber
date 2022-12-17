<!-- 项目logo -->
<br />
<div align="center" id="top">
  <a href="https://github.com/moyu-developer/moyu-caster-fiber">
    <img src="https://s2.loli.net/2022/12/04/CS2GplwyUNmqZ7J.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">Caster Fiber 河狸</h2>

  <p align="center">
    直观且功能强大的前端搭建平台示例，同时也是一份非常棒的 <a href="https://craft.js.org/docs/overview" >craft.js</a> 实战教程。
    <br />
    <a href=""><strong>浏览文档 »</strong></a>
    <br />
    <br />
    <a href="">示例地址</a>
    ·
    <a href="">交流专区</a>
    ·
    <a href="">教程地址</a>
  </p>
  <img style="border-radius: 4px;" src="https://s2.loli.net/2022/12/16/OY3tLXV924RrUAJ.png" />
</div>

## 特性
<p align="right">(<a href="#top">回到顶部</a>)</p>

- 😺 基于`craft.js`，它看起来真的很棒，您不在需要关注可视化的构建。
- 👹 拖动内置的物料组件到画布中，即可不依赖开发人员的情况下创建和管理内容和体验。
- ⛹️ 快速自定义物料组件，动态注册组件列表。
- 🛳️ `Monorepo`拆包管理，提升系统可复用性、阅读感官。

## 关键

对于搭建平台而言，填充装配与渲染之间存在的基本通信就是`NodeTree`。

`NodeTree`是两者之间沟通协议，渲染器根据协议内容渲染页面，编辑器根据协议内容设置属性，两者目标一致。 因此，整个协议规则采用一颗`Schema`树的方式来约定存储。可以很方便的存储到任何支持`String`格式的内容储存工具中，如`MongoDB`。

下面是一个HTML元素与Node节点之间的转换关系：

```json
{
  "ROOT": {
    "type": {
      "resolvedName": "Container"
    },
    "isCanvas": true,
    "props": {
      "width": 800,
      "height": "100%",
      "paddingTop": 20,
      "paddingBottom": 20,
      "paddingLeft": 20,
      "paddingRight": 20,
      "background": "#FFFFFF"
    },
    "displayName": "基础容器",
    "custom": {},
    "hidden": false,
    "nodes": [
      "rpVYvatknx"
    ],
    "linkedNodes": {}
  },
  "rpVYvatknx": {
    "type": {
      "resolvedName": "Text"
    },
    "isCanvas": false,
    "props": {},
    "displayName": "文本",
    "custom": {},
    "parent": "ROOT",
    "hidden": false,
    "nodes": [],
    "linkedNodes": {}
  }
}
```

## 本地启动


首先，项目采用的是`pnpm`作为依赖管理，内部使用了`pnpm workspace` 的管理方式。为确保`package`之间的引用关系，需要确保当前的开发者环境是存在`pnpm`并使用它来安装相关依赖。

```shell
pnpm install
```

依赖安装完成功，分别依次启动`app`目录下的应用。

```shell
cd ./app/server & pnpm run start
cd ./app/main & pnpm run start
```

启动后在控制台中看到如下提示框即代表应用启动成功，此时浏览器可以访问`http://localhost:8000`查阅应用的视图界面。
```
        ╔════════════════════════════════════════════════════╗
        ║ App listening at:                                  ║
        ║  >   Local: http://localhost:8000                  ║
ready - ║  > Network: http://***.***.**.***:8000             ║
        ║                                                    ║
        ║ Now you can open browser with the above addresses↑ ║
        ╚════════════════════════════════════════════════════╝
```

<p align="right">(<a href="#top">回到顶部</a>)</p>

## 相关链接

- 

## MIT License

Copyright (c) 2022 moyu-developer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

具体可查阅  [LICENSE](https://github.com/moyu-developer/moyu-caster-fiber/blob/main/LICENSE)。 
<p align="right">(<a href="#top">回到顶部</a>)</p>