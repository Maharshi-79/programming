import { useState } from "react";

function LoginLogout(){
    const[loggedin,setloggedin]=useState(false)
    return(
        <div>
        <p>--------------------------------------------------------------------------------------------------------------------------</p>     
        {
            loggedin?(
            <>
            <h2>Welcome user</h2>
            <button onClick={()=>setloggedin(false)}>Logout</button>
            </>
            ):(
                <>
                    <h2>pls login</h2>
                    <button onClick={()=>setloggedin(true)}>Login</button>
                </>
            )
        }
        </div>
    )
}

export default LoginLogout;