/**
 * Created by Administrator on 2016/12/14.
 */
import React,{Component} from 'react';
require('moment/locale/zh-cn.js');
import moment from 'moment';
export default class CommentList extends Component{
    //删除
   /* removeOne(id){
        this.removeone(id)
    }*/
    render(){

        return(
            <ul className="list-group">
                {//onClick={this.removeOne.bind(this,item.id)}
                    this.props.comments.map((item,index)=>{
                        return (<li className="list-group-item" key={index}>{item['name']}刚刚说{item['content']} <span className="pull-right">{moment(item.createAt).fromNow()} <button className="btn btn-xs btn-danger pull-right" onClick={()=>this.props.removeOne(item.id)}>删除</button></span></li>)
                    })

                    /*<li className="list-group-item">a:今天冷       三分钟之前</li>*/
                }
            </ul>
        )
    }
}