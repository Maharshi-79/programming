import React,{useRef , useState} from "react";

function App1(){
    const countRef =  useRef(0);
    const[render,setRender] = useState(0);

    const increase = () =>{
        countRef.current += 1 ;
        console.log(countRef.current);
    }

    return(
        <div>
            <h3>Component renders : {render}</h3>
            <button onClick={() => setRender(render+1)}>
                Force re-render
            </button>
            <hr/>
        </div>
    )
}

export default App1;