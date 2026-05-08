import { useState } from "react";
function Form(){
    const[val,setval]=useState('')
    return(
        <>
        <p>--------------------------------------------------------------------------------------------------------------------------</p>     
        <form action="">
            <label htmlFor="" style={{marginRight:'10px'}}>Type Something...   </label>
            <input type="text" placeholder="start typing..." onChange={(e)=>setval(e.target.value)}/>
            <p>you typed : {val}</p>
        </form>
        </>
    )
}

export default Form;    