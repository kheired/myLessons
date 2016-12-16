/*
* 使用es6语法定义一个组件并导出
*
* */
//如果导入时只写名字，会到node_modules下寻找
import React from 'react';
// var Panel=React.createClass({});     es5的定义React组件的方法
//以下为es6的定义React组件的方法 并默认导出Panel类
export default class Panel extends React.Component{
    render(){
        return (
            <div>
                hello world
            </div>
        )
    }
}