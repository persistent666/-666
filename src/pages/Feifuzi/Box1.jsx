import React, { Component } from 'react'
import ee from '../../utils/Events'
export default class Box1 extends Component {
    constructor(){
        super()
        this.state = {
            msg:'汪峰'
        }
    }
    render() {
        return (
            <div className="alert alert-info">
                <h1>Box1组件</h1>
                <div>msg的值为:{this.state.msg}</div>
                <button className="btn btn-success" onClick={()=>this.send()}>发送</button>
            </div>
        )
    }
    send(){
        // 触发自定义事件
        ee.emit('message',this.state.msg)
    }
}
