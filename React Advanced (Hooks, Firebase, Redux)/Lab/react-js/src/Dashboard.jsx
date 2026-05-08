import { Authcontext } from "./Authentication";
import { useContext,useState } from "react";

function Dashboard(){
    const {user,login,logout} = useContext(Authcontext);
    const [username,setUsername] = useState("");

    if(user)
    {
        return(
            <div>
                <h1>Welcome {user.name}</h1>
                <button onClick={logout}>logout</button>
            </div>
        )
    }

    return(
        <div>
            <h3>pls login</h3>
            <input type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
            <button onClick={()=>login(username)}>login</button>
        </div>
    )
}

export default Dashboard;