import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            name:'张某人'
        }
    }
    hander(e){
        // console.log(e.target.value);
        this.setState({name:e.target.value})
    }
    render() {
        return (
            <div className="alert alert-info">
                <input className="form-control" onChange={(e)=>this.hander(e)} value={this.state.name} type="text"/>
                <div>name的值为:{this.state.name}</div>
            </div>
        )
    }
}
