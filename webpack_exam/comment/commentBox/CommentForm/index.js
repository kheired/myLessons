/**
 * Created by Administrator on 2016/12/14.
 */
import React,{Component} from 'react';

export default class CommentForm extends Component{
    constructor(props){
        super(props);
        //当创建实例的时候，直接把需要用的方法里的this绑死到当前组件实例上
        this._submit.bind=this._submit.bind(this);
        this.handleKeyDown=this.handleKeyDown.bind(this);
        //如果ctrl按下了，那么就设置为true
        this.ctrl=false;
    }

    _submit(){
        var name=this.refs.myName.value;
        var content=this.refs.myContent.value;
        if(!name || !content) return;
        this.props.addComment({name,content});

        this.refs.myContent.value='';
    }
    handleKeyDown(e){
        var code=e.keyCode;
        if(code==17){
            this.ctrl=true;
            setTimeout(()=>{
                this.ctrl=false;
            },1000)
        }
        if(code==13){

            if(this.ctrl){
                this.refs.myContent.value=this.refs.myContent.value+'\n';
            }else{
                this._submit();
            }
        }
    }
    render(){

        return(
            <form className="form-horizontal" role="form">
                <div className="form-group">
                    <label htmlFor="name" className="control-label col-md-1">姓名</label>
                    <div className="col-md-11">
                        <input type="text" className="form-control" id="name" name="name" ref="myName" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="content" className="control-label col-md-1">内容</label>
                    <div className="col-md-11">
                        <textarea name="content" id="content" cols="30" rows="10" className="form-control" ref="myContent" onKeyDown={this.handleKeyDown}></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-11 col-md-offset-1">
                        <button type="button" className="btn btn-primary" onClick={this._submit}>发言</button>
                    </div>
                </div>
            </form>
        )
    }
}