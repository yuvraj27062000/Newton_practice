import { createContext } from "react";
import { useState } from "react";
import { React } from "react";
import { CompX } from "./CompX";


export const ContextName = createContext()

export const RightParent = () => {


    // const myData = {
    //     name:"", 
    //     role:""
    // }

    const [data, setData] = useState({
        name:"Default",
        role:"Default"
    });
    
 
  const getData = (e)=>{
       data[e.target.id] = e.target.value;
    //    setData({...data})
  }
  const push =()=>{
    setData({...data})
    // console.log(data);
  }

let fruit = "apple"
    return (
        <>
            <h2>Right Parent Call </h2>
            <input type="text" id="name" onChange={getData} />
            <input type="text" id="role" onChange={getData} />
            <button onClick={push} > Put Data </button>
            <ContextName.Provider value = {data}>
                <CompX like={fruit}/>
            </ContextName.Provider>

        </>
    )
}