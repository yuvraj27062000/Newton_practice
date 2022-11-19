import React, { Component } from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    counter(){
    //     console.log(this.state.count)
    //    this.setState ({
    //     count : this.state.count + 1
    //    },()=>{
    //     console.log("inside the calback  : "+this.state.count)
    //    })
        this.setState(prevState=>({
            count : prevState.count+1
        }),()=>{console.log("prvalues"+this.state.count)})

        console.log(this.state.count)
    }

    // Fivecounter(){
    //     this.counter()
    //     this.counter()
    //     this.counter()
    //     this.counter()
    //     this.counter()
    // }

    render(){
        return(
            <div className="App">
                <h1> Click to count your like </h1>
                <h1>{this.state.count}</h1>
                <button onClick={()=> this.counter()}> Like </button>
            </div>
        )
    }
}
export{
    Counter
}