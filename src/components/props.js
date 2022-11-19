import React from "react";

// const Props =  (props)=>{       
//     return(
//         <div>
//             <h1> this is the name {props.name} {props.sername}</h1>
//             {props.children}    
//         </div>
//     )

// }
// const Props =  ({name,sername})=>{       
//     return(
//         <div>
//             <h1> this is the name {name} {sername}</h1>
//             {children}    
//         </div>
//     )


// }

// destructuring the props
import {ClickEvent} from "./FunctionclickEvent"

const Props = (props) =>{   
    const {name,address} =  props   
    return(
        <div>
            <h1> this is the name {name}   {address.HNo}</h1>
            {/* {children} */}
            <ClickEvent />
        </div>
    )

}

export default Props;   