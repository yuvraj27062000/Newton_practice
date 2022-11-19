import React, { Component } from "react";
import { Child } from "./childcomponent";
// function Event(){
    
//     return <h1>hello yuvraj</h1>
// }


class Event extends Component{
    constructor(){
        super()
        this.state = {
            parentname:"yuvraj"
        }
        this.parentmethod = this.parentmethod.bind(this)
    }
    parentmethod(data){
        console.log(`hello ${this.state.parentname} from ${data}`)
    }

    render(){
        
        return (
            <div>
                <Child   parentcall = {this.parentmethod}  />
            </div>
        )
        
    }
}


export default Event;