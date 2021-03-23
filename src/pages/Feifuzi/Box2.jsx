import React, { Component } from 'react'
import ee from '../../utils/Events'

export default class Box2 extends Component {
    constructor(){
        super()
        this.state = {
            msg:''
        }
    }
    render() {
        ee.on('message',(e)=>{
            // console.log(this);
            this.setState({msg:e})
        })
        return (
            <div className="alert alert-info">
                <h1>Box2组件</h1>
                <div>msg的值为:{this.state.msg}</div>
            </div>
        )
    }
}
