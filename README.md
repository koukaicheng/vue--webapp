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
 
 ## 组件
 
  组件化开发，把许多重复的代码封装成组件，可以是一个css样式 也可以是一个动画、功能，调用的时候直接以标签的方式迁入非常的方便
   
 - [x] 商品列表组件
 - [x] 店铺评价组件
 - [x] 商家介绍组件
 - [x] 优惠活动组件
 - [x] 商品详情组件
 - [x] 购物车
 - [x] 购买物品小球飞入动画的封装
 - [x] 评价star组件
 - [x] 商品添加、删除组件
 - [x] 图标组件
       
 ## 项目结构
 <pre>
  ├── build              // 构建服务和webpack配置
  ├── config             // 项目不同环境的配置
  ├── dist               // 项目build目录
  ├── index.html         // 项目依赖的html文件 所有的组件都将在index.html上面展示
  ├── package.json       // 项目依赖配置文件
  ├── src                // 生产目录
  │   ├── common         // 公共的css js 
  │   ├── components     // 各种组件
  │   ├── App.vue        // 所有的组件的祖先级  components里面的组件都是相对于App.vue的子组件
  │   └── main.js        // 可以说是项目的入口文件 里面引入了vue的ajax请求方法、路由方法
</pre> 

## 项目安装步骤
  
* 本项目需要配置node才能运行，如果没有安装node请浏览[配置node环境](http://blog.csdn.net/pengpegv5yaya/article/details/51885829)
* 需要安装webpack 打开命令输入 npm install -g webpack 安装到全局 
* 需要安装vue本身的脚手架构建工具  输入命令  npm install --global vue-cli 安装到全局  
* 下载该项目可以直接下载 也可在本地克隆  打开git bash here输入命令 git clone https://github.com/koukaicheng/vue--webapp.git  
* 项目到本地之后安装相关依赖 npm install 
* 运行项目 npm run dev  提示成功之后 打开http://localhost:8080/
* 打包项目 npm run build 完毕之后打开dist文件夹 如果要运行dist文件夹里面打包完的文件的话 需要运行server.js  输入命令 node server.js 打开         http://localhost:9000

 ## 项目截图
  
  <img src="https://github.com/koukaicheng/vue--webapp/blob/master/images/goods.jpg" width="20%"/>&nbsp;&nbsp;&nbsp; <img src="https://github.com/koukaicheng/vue--webapp/blob/master/images/%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85.jpg" width="20%"/>&nbsp;&nbsp;&nbsp; <img src="https://github.com/koukaicheng/vue--webapp/blob/master/images/%E5%95%86%E5%AE%B6.jpg" width="20%"/>&nbsp;&nbsp;&nbsp; <img src="https://github.com/koukaicheng/vue--webapp/blob/master/images/%E8%B4%AD%E7%89%A9%E8%BD%A6.jpg" width="20%"/>


