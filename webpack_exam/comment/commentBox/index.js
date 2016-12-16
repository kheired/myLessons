//component是React的一个模块,一般用React.Component
import React,{Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
export default class CommentBox extends Component{
    constructor(props) {
        //props代表当前组件的属性
        super(props);
        //es6中使用此方法初始化一个状态对象
        this.state = {
            comments: []
        };
        //query()方法是一个异步方法，有一个回调函数callback，一开始的时候无法获取数据所以不能直接用它给状态对象赋值，要等他获取数据之后再重新设置状态对象
        this.props.store.query((comments)=>{
            this.setState({comments});
        })
    }
    //向状态comments里增加一个新的对象
    //在es6中组件方法里的this默认指向null

    addComment(comment){
        this.props.store.add(comment,(comments)=>{
            this.setState({comments});
        });
        // this.state.comments.push(comment);

    }
    removeOne(id){
        this.state.store.remove(id,(comments)=>{
            this.setState({comments})
        });
        /*var comments = this.props.store.remove(id);
        this.setState({comments});*/
    }
    render(){
        return(
            <div className="panel panel-defaults">
                <div className="panel-heading">
                    <h3 className="text-center">欢迎来到留言板块</h3>
                </div>
                <div className="panel-body">
                    <CommentList removeOne={this.removeOne.bind(this)} comments={this.state.comments}/>
                </div>
                <div className="panel-footer">
                    <CommentForm addComment={this.addComment.bind(this)}/>
                </div>
            </div>
        )
    }
}