import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Page(){
    const {theme,setTheme} = useContext(ThemeContext);
    return(
        <>
            <h3>Current Theme : {theme}</h3>
            <button onClick={()=>setTheme(theme === "light" ? "dark":"light")}>Toogle theme</button>
            <hr />
        </>
    )
}

export default Page;