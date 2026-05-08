import React,{Component} from "react";

class Productlist extends Component{
    constructor(){
        super();
            this.state ={
            products:[],
        }
    }

    componentDidMount()
    {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data)=>{
            this.setState({products:data})
        })
    }

    render()
    {
        return(
            <>
            <p>--------------------------------------------------------------------------------------------------------------------------</p>     
            <h2>Product list</h2>
                <ul>
                {this.state.products.map((item)=>(
                    <li key={item.id}>
                        {item.title} - {item.price}
                    </li>
                ))}
                </ul>
            </>
        )
    }
}

export default Productlist;