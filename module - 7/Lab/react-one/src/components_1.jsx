import React from "react";

function Fun_component({name})
{
    
    return(
        <>
        <p>--------------------------------------------------------------------------------------------------------------------------</p>
        <h3>hello , {name}</h3>
        </>
    )
}

export default function Run()
{
    return(
        <>
        <Fun_component name="Maharshi"/>
        </>
    )
}

