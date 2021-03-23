import React, { Component } from 'react'
import Chlidren from './Children'
export default class parent extends Component {
    constructor(){
        super()
        this.state = {
            name:'李先生',
            age:25,
            msg:""
        }
    }
    render() {
        const {name,age,msg} = this.state
        return (
            <div>
                <h1>父组件</h1>
                <h3>{msg}</h3>
                <div>name的值为:{name}</div>
                <div>age的值为:{age}</div>
                {/* 引入子组件 */}
                <Chlidren name={name} age={age} message={(e)=>this.getMassage(e)}></Chlidren>
            </div>
        )
    }
            getMassage(name){
                // console.log(name);
                this.setState({msg:name})
            }
}
