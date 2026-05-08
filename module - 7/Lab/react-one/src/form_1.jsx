import { use } from "react";
import { useState } from "react";

function Formhandling()
{
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [pass,setpass] = useState("")

    return(
        <div>
            <p>--------------------------------------------------------------------------------------------------------------------------</p>        
            <form action="">
                <label htmlFor="">Enter Name : </label>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/><br/><br/>

                <label htmlFor="">Enter Email:</label>
                <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    title="Please enter a valid email"/><br/><br/>

                <label htmlFor="">Enter Password:</label>
                <input type="text" value={pass} onChange={(e)=>setpass(e.target.value)} pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$"
                    title="Please enter valid password"/><br/><br/>
            
                <button type="submit">Submit</button>
            </form>

            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Password : {pass}</p>
        </div>
    )
}

export default Formhandling;