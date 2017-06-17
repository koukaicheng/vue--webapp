# vue--webapp
 使用vue创建的一个webapp项目
 
 vue.js + vue-router + es6 +webpack
 
 首先感谢黄轶老师的vue开发教程，老师的教程令我收货颇丰
 
 ## 技术栈
 
 * vue.js 项目中主要用的框架
 * vue-cli vue本身脚手架构建工具
 * webpack 进行项目的搭建和部署 压缩代码 热加载
 * PostCss 自动根据写的样式去进行兼容处理 会自动编译生成支持多款浏览器的css代码
 * es6语法 ES2015 js的第六个版本
 * 使用eslint进行js代码的规范 多一个空格少一个空格都会报错...
 * stylus编写样式 感觉比sass好用
 * 使用better-scroll进行目录、列表联动滚动、滑动
 * .....
 ##组件
 
   组件化开发，把许多重复的代码封装成组件，可以是一个css样式 也可以是一个动画、功能，调用的时候直接以标签的方式迁入非常的方便
 
 
 ##项目结构
 <pre>
  ├── build              // 构建服务和webpack配置
  ├── config             // 项目不同环境的配置
  ├── dist               // 项目build目录
  ├── index.html         // 项目入口文件
  ├── package.json       // 项目依赖配置文件
  ├── src                // 生产目录
  │   ├── common          // 公共的css js 资源
  │   ├── components     // 各种组件
  │   ├── App.vue         // 主页面 
  │   └── main.js        // Webpack 预编译入口
</pre> 
