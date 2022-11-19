import React, { Component } from "react";

class StateExample extends Component{

    constructor(){
        super()
         
        this.state = {
            massage:"Please like this...!",
        }
    }
    
    showlikes(){
        
        this.setState ({
            massage:"Thank you for Like...!",
           
        })
        
    }

    render(){
        return(
            <div>
                <h1>{this.state.massage}</h1>
                <button onClick={()=> this.showlikes()} type="button"> Like </button>

            </div>
        )
    }


}
export{
    StateExample
}