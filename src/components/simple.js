import React from "react";

const Jsx = ()=>{

    // return <h1>this is jsx exaple</h1>;

    return React.createElement("div",
    {id:"unique", className:"first-tag"},
    React.createElement("h1",{className:"inner-div"}, "hello yuvraj !")
    );

}

export{ Jsx };