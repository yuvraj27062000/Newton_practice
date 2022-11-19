import React, { Component } from "react";


// export function ClickEvent(){
//     function eventHandler(){
//         console.log("Evnet Is Clicked")
//     }
//     return(
//         <div>
//             <button  onClick={eventHandler}>Click</button>
//         </div>
//     )
// }
class ClickEvent extends Component {
    EventHandler(){
        console.log("event click");
    }
    render() {
        return (
            <div>
                <button onClick={this.EventHandler}>click</button>
            </div>
        )
    }
}

export{
    ClickEvent
}