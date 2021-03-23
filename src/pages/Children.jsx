import React, { Component } from 'react'

export default class Children extends Component {
    constructor(){
        super()
        this.state = {
            pageTitle:'新闻首页'
        }
    }
    render() {
        // console.log(this.props);
        return (
            <div className="well">
                <h1>子组件</h1>
                <div>name的值为:{this.props.name}</div>
                <div>age的值为:{this.props.age}</div>
                <h3>{this.state.pageTitle}</h3>
                <button className="btn btn-success" onClick={()=>this.send()}>发送数据</button>
            </div>
        )
    }
            send(){
                // console.log(this.props);
                this.props.message(this.state.pageTitle)
            }
}
