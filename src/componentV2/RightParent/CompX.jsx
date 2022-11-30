import { React  } from "react";
import { CompY } from "./CompY";
import { useContext } from "react";
import { ContextName } from "./RightParent";

export const CompX = (props)=>{

    const NameValue = useContext(ContextName)

    return(
        <>
            <h3>CompX  Call</h3>
            <p>{NameValue.name}</p>
            <p>Like --- {props.like}</p>
            <CompY />
        </>
    )
}