import React from "react";

function Eligiblity()
{
    const age = 19;
    return(
        <>
            <p>--------------------------------------------------------------------------------------------------------------------------</p>        
            <h3>{ age >= 18?"Eligible for vote" : "Not Eligible for vote"}</h3>
        </>
    )
}

export default Eligiblity;