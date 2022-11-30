import { React  } from "react";

import {CompA} from "./ConpA"



export const LeftParent = ()=>{
    const name = "yuvraj"
    return(
        <>
            <h2>LEft Parent Call</h2>
            <CompA name = {name} />
        </>
    )
}