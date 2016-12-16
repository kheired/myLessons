
const COMMENTS = 'COMMENTS';
var $ = require('jquery');
module.exports = {
    //增加一条新的留言
    add(comment,callback){
        $.post('http://localhost:9090/comments',comment).done(function(data){
            callback(data)
        })
    },
    //移除一个留言
    remove(id,callback){
        $.ajax({
            url:'http://localhost:9090/comments'+id,
            method:'DELETE'
        }).then(function(data){
            callback(data);
        })
    },
    //查询所有留言 如果有，则转成对象数组，如果没有则返回空数组
    //$.get-->jquery中的AJAX方法，会返回一个promise对象，调用其.then()方法  可以从.then()方法的参数中获取返回的数据，因为AJAX是异步方法，没有返回值，所以需要传入一个callback获取返回的数据
    query(callback){
        return $.get('http://localhost:9090/comments').then(function(data){
                callback(data);
            })
    }
};