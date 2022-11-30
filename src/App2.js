// import { react } from "react";
import {LeftParent} from "./componentV2/LeftParent/LeftParent"
import { RightParent } from "./componentV2/RightParent/RightParent";

export const App2 = ()=>{
    return (
        <>
            <h1>Parent Component </h1>
            <LeftParent />
            <RightParent />
        </>
    )
}
