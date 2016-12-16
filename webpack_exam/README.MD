## 准备工作
- 在当前文件夹下建立两个文件夹
    app文件夹  > 建立component.js index.js
```
 component.js
export var name='hxd';
```
```
index.js
import {name} from './component.js';
console.log(name);
```
    build文件夹
## 1.初始化项目

### 1.1 初始化项目

```
npm init -y
npm install webpack webpack-dev-server --save-dev
```
### 1.2 创建webpack配置文件 webpack.config.js

```
module.exports = {
 entry:'./app/index.js',//指定入口文件
 output:{
     path:'./build',//指定打包后的文件存放目录
     filename:'bundle.js'//指定打包后的文件名
 }
}
```
### 1.3 创建脚本

```
  "scripts": {
+    "build": "webpack",
+    "dev":"webpack-dev-server"
  },
```
### 1.4 打包文件

```j
npm run build
```
### 1.5 启动开发服务器

```
npm run dev
```
## 2. 支持es6

### 2.1 安装依赖包
```
npm install babel-core babel-loader babel-preset-es2015 --save-dev

```
### 2.2 修改webpack.config.js

```
 module:{
     loaders:[
         {
             test:/\.js$/,
             loader:'babel'
         }
     ]
 }
```
### 2.3 配置 .babelrc文件

```
{
  "presets":["es2015"]
}
```
## 3. webpack-dev-server

### 3.1 安装

- 当运行npm run dev的时候，会先进行打包，打包到build目录下。 会启动一个express的http服务器，以build目录作为静态文件根目录 html-webpack-plugin 用来读取app目录下的index.html文件，然后向里面插入打包生成后的bundle.js文件，再保存到build目录 open-browser-webpack-plugin 当打包完成后，服务器启动成功后，自动打开浏览器运行我们的项目
```

npm install html-webpack-plugin open-browser-webpack-plugin --save-dev
```
### 3.2 修改webpack.config.js文件

```
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

 devServer:{
     //指定静态文件根目录
     contentBase:'./build',
     port:8080,
     inline:true //当源代码变化后自动重新打包并通知浏览器刷新
 },
 
```
```
plugins:[
     new HtmlWebpackPlugin({template:'./app/index.html'}),
     new OpenBrowserWebpackPlugin({url:'http://localhost:8080'})
]
```
- 注：在命令版执行`npm run dev`重新启动开发服务器，服务器会自动为我们在【内存中】创建build文件夹里面有bundle.js和index.html文件，并在浏览器自动打开index.html

## 4. react
- 需要安装的包
```
npm install react react-dom --save

npm install babel-preset-react --save-dev

```
- 在.babelrc里增加预设

```
{
  "presets":["es2015","react"]
}
```



## React开发-珠峰留言板
- 需要安装的包
```
npm install react --save
npm install react-dom --save


npm install bootstrap --save

npm install style-loader css-loader --save-dev


npm install url-loader file-loader --save-dev
```
- 在webpack.comment.js中增加加载器
```
 module:{
            loaders:[
                {
                    test:/\.js$/,   //正则匹配需要加载的js文件
                    loader:"babel",  //转义
                    exclude:/node_modules/ //正则匹配此文件夹，加载时忽略此配置文件里的js文件会大大提高加载速度
                },
                {
                    test:/\.css$/,  //匹配bootstrap的css文件
                    loader:"style!css"  //加载器
                },
                {
                    test:/\.ttf|woff|svg|woff2|eot/, //匹配bootstrap的font引用文件
                    loader:'url'    //加载器
                }
            ]
    },
```