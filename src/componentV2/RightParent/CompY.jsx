import { React  } from "react";
import { useContext } from "react";
import { ContextName } from "./RightParent";

export const CompY = ()=>{
    const nameValue = useContext(ContextName);
    // console.log(ameValue);
    return(
        <>
            <h4>CompY  Call--- </h4>
            <p>name -- {nameValue.name}</p>
            <p>role -- {nameValue.role}</p>
            
        </>
    )
}