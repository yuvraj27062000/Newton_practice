import React, { Component } from "react";

export class EventChange extends Component{
    constructor(props){
        super(props)
        this.state={
            name :"what is your name !"
        }
        this.change = this.change.bind(this)
    }
    // change(){
    //     console.log(this);
    //     this.setState({
    //         name:"yuvraj singh chouhan !"
    //     })
    change = () => {
        console.log(this);
        this.setState({
            name:"yuvraj singh chouhan !"
        })
    }

    render(){
        return(
        <div>
            <h1> {this.state.name} </h1>
             {/* <button onClick={()=>this.change()}> click </button> */}
             {/* <button onClick={this.change.bind(this)}> click </button> */}
             <button onClick={this.change}> click </button>
        </div>
        )
    }
}