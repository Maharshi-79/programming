import { useEffect, useState } from "react";

function Effect()
{
    const [data,setData] = useState([])
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setData(data));
    },[])

    return(
        <div>
            <ul>
                {data.map(item =>(
                <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <hr />
        </div>
    )
}

export default Effect;