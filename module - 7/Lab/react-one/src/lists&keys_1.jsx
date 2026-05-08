import React from "react";

function Lists()
{
    const fruits = ["Apple","Banana","Orange","Grapes","Mango"]

    return(
        <>
            <p>--------------------------------------------------------------------------------------------------------------------------</p>        
            <h3>Fruit List</h3>
            <ul>
                {fruits.map((fruit,index)=>(<li key={index}>{fruit}</li>))}
            </ul>
        </>
    )
}

export default Lists;