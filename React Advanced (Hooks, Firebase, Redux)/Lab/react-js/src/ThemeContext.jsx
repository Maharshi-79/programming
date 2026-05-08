import { createContext,useState,useEffect} from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const[theme,setTheme] = useState("light");

     useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "white" : "black";
    document.body.style.color =
      theme === "light" ? "black" : "white";
  }, [theme]);

    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;