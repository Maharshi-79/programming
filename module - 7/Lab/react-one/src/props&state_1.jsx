function UserCard({name,age,location}){
    return(   
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">Name : {name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Age: {age}</h6>
                <p className="card-text">Location: {location}</p>
            </div>
        </div>
    )
}

export function Detail()
{
    let obj={
        "name":"Maharshi",
        "age" : 20,
        "location" : "Sarangpur"
    }

    return(
        <>
        <p>--------------------------------------------------------------------------------------------------------------------------</p>
        <center><UserCard name={obj.name} age={obj.age} location={obj.location} /></center>
        </>
    )
}