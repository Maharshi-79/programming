import { Component } from "react";

class Lifecycle extends Component{
    
    constructor(){
        super();
        this.state={
            course : "BCA",
        }

        console.log("constructor called")
    }

    componentDidMount()
    {
        console.log("component mounting")
    }

    componentDidUpdate()
    {
        console.log("component update")
    }

    componentWillUnmount()
    {
        console.log("unmounting")
    }


    render() {
        return(
            <>
            <p>--------------------------------------------------------------------------------------------------------------------------</p>     
            <h1>{this.state.course}</h1>
            <button onClick={()=>this.setState({course : "MCA"})}>change</button>
            </>
        )
    }
}

export default Lifecycle;