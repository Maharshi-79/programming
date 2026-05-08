import React from "react";
import { useState } from "react";

function Countercomponent()
{
    const[count,setcount]=useState(1)

    return(
        <>
        <p>--------------------------------------------------------------------------------------------------------------------------</p>       
        <h3>{count}</h3>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        </>
    )
}

export default Countercomponent;