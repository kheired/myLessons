

require('bootstrap/dist/css/bootstrap.css');//在js中指定文件名来加载bootstrap.css
import CommentBox from './CommentBox';
import React from 'react';
import ReactDOM from 'react-dom';
//store 工具模块
import store from './ajax';
ReactDOM.render(<CommentBox store={store}/>,document.getElementById('app'));