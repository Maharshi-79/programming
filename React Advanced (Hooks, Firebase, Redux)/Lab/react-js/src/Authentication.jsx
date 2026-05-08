import { createContext , useState } from "react";

export const Authcontext = createContext();

export function Authprovider({children}) {
    const [user,setUser] = useState(null)

    const login =(username)=>{
        setUser({name:username})
    }

    const logout =()=>{
        setUser(null);
    }
    
    return(
            <Authcontext.Provider value={{user,login,logout}}>
                {children}
            </Authcontext.Provider>
    )
}

export default Authprovider;