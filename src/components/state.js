import React, { useState } from 'react';

export function Statecounter(){
    // let count = 0 ;
    const [count, setCount] = useState(0);
    // function increase(){
    //     count = count + 1;
        
    //     console.log(count)
    // }
    // function decrease(){
    //     count = count - 1;
    //     console.log(count)
    // }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>increase count + </button>
            <button onClick={() => setCount(count - 1)}>Decrease count -</button>
        </div>
    )
}