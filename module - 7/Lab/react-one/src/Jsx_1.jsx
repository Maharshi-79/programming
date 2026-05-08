import React from "react";

function Welcome()
{
    const name = "Maharshi";
    return(
        <>
        <p>--------------------------------------------------------------------------------------------------------------------------</p>
        <h1>Welcome to jsx {name}</h1>
        <p>JSX is a React syntax that lets us write HTML-like code inside JavaScript.<br/> 
            It supports dynamic data using curly braces { }, allowing variables and<br/>
            expressions to be displayed directly in the UI. When the data changes,<br/> 
            React automatically updates the interface, making JSX ideal for building<br/>
            dynamic and interactive user interfaces.</p>  
        </>      
    )
}

export default Welcome;