import { useState } from "react";
import {React, useReducer, useEffect } from "react";

// import "./Reducdata.css"
export const NewReducerFunction = () => {
     
    const [data, setData] =  useState("");

     

    const methodFunction = (intial,action)=>{
            // console.log("initial",intial);
            // console.log("action",action);
            switch (action.opr) {
                case "add":
                    return intial+action.ini
                case "sub":
                    return intial-1
                case "mult":
                    return intial*2
                case "divide":
                    return intial/2  
                default:
                    return intial;
            }
        
    }
    const reducerFunction = (intial,action)=>{
        // console.log("initial",intial);
        // console.log("action",action);
        switch (action) {
            case "1":
                setData(data+"1")
                break
            case "2":
                setData(data+"2")
                break
            case "3":
                setData(data+"3")
                break
            case "4":
                setData(data+"4")
                break
            
        }
        return 0
    
}

const [countDigit , DispatchFunction] = useReducer(reducerFunction  , "");
const [countMeth , Dispatch] = useReducer(methodFunction, "");
 
    const showdata =(e)=>{
        console.log(data);
        // setData(e.target.value)
    }
    // useEffect(()=>{
    //     showdata()
    //     if(data.charAt(data.length-1)==)
    // })

    return(
        <>
            <h3>count {countDigit}</h3>
            <input type="text" name="display" id="show" value={data}   onChange={showdata}  /> <br /><br />
            <button onClick={()=>DispatchFunction("1")} >1</button>
            <button onClick={()=>DispatchFunction("2")} >2</button>
            <button onClick={()=>DispatchFunction("3")} >3</button>
            <button onClick={()=>Dispatch("add")}>+ Add</button><br /><br />

            <button onClick={()=>DispatchFunction("4")} >4</button>
            <button onClick={()=>DispatchFunction("5")} >5</button>
            <button onClick={()=>DispatchFunction("6")} >6</button>
            <button onClick={()=>Dispatch("sub")}>- sub</button><br /><br />

            <button onClick={()=>DispatchFunction("7")} >7</button>
            <button onClick={()=>DispatchFunction("8")} >8</button>
            <button onClick={()=>DispatchFunction("9")} >9</button>
            <button onClick={()=>Dispatch("mult")}>* mult</button><br /><br />

            <button onClick={()=>DispatchFunction("0")} >0</button>
            <button onClick={()=>Dispatch("=")}>  = </button> 
            <button onClick={()=>Dispatch("divide")}> / divide</button> 



            {/* <button onClick={add}> + </button>
            <button onClick={sub}> - </button>
            <button onClick={mult}> * </button>
            <button onClick={divide}> / </button> */}
            {/* <button onClick={()=>DispatchFunction({opr:"add", ini:10})}>+ Add</button>
            <button onClick={()=>DispatchFunction({opr:"sub", ini:5})}>- sub</button>
            <button onClick={()=>DispatchFunction({opr:"mult", ini:2})}>* mult</button>
            <button onClick={()=>DispatchFunction({opr:"divide", ini:100})}>/ divide</button>  */}
        </>
    )
     
};