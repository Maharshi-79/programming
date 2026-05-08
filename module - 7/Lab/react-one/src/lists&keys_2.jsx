import React from "react";

function Keys()
{
    const users = [
        {id:1,name:"Maharshi"},
        {id:2,name:"Jeel"},
        {id:3,name:"Harsh"},
        {id:4,name:"Dev"},
        {id:5,name:"Prince"}
    ];

    const renderUsers =()=>{
        return users.map((item) =>(
        <p key={item.id}>{item.name}</p>
        ))
    }

    return(
        <>
            <p>--------------------------------------------------------------------------------------------------------------------------</p>     
            <h3>{renderUsers()}</h3>
        </>
    )
}

export default Keys;