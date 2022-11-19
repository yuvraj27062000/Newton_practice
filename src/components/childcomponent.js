import React from "react";


export function Child(props){
    return(
        <div>
            <button onClick={()=> props.parentcall("from Child")}>child button</button>
        </div>
    )
}