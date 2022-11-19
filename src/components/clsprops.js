import React, { Component } from "react";

// class Clsprops extends Component{
//     render(){
//         return(
//             <h1> hello {this.props.name} and {this.props.heroname} </h1>
//         )
//     }
// }


// destructiring the props 
class Clsprops extends Component{
    render(){
        const {name, heroname} = this.props
        return(
            <h1> hello {name} and {heroname} </h1>
        )
    }
}
// export default clsprops;
export{Clsprops}