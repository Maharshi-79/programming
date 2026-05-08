import { useState } from "react";

function Event(){
    const[change,setChange]=useState(false)
    return(
        <>
        <p>--------------------------------------------------------------------------------------------------------------------------</p>     
        <button onClick={()=>setChange(true)}>{change?"click":"Not click"}</button>
        <h3>{change?"Clicked":"Not clicked"}</h3>
        </>
    )
}

export default Event;