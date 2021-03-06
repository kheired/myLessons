
var HtmlWebpackPlugin=require('html-webpack-plugin');
var OpenBrowserWebpackPlugin=require('open-browser-webpack-plugin');
module.exports={
    entry:'./app/index.js',//指定入口文件
    output:{
        path:'./build',//指定打包文件入口
        filename:'bundle.js'//指定生成的文件名
    },
    devServer:{
        // 指定静态服务根目录
        contentBase:'./build',
        port:8080,
        inline:true  //当源代码发生改变后自动重新打包并通知浏览器刷新
    },
    module:{
            loaders:[
                {
                    test:/\.js$/,   //正则匹配js文件
                    loader:"babel",  //转义
                    exclude:/node_modules/ //正则匹配此文件夹，加载时忽略此配置文件里的js文件会大大提高加载速度
                }
            ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./app/index.html'}),
        new OpenBrowserWebpackPlugin({url:'http://localhost:8080'})
    ]
};
