import React, {Component} from "react";

class WelcomeMessage extends Component{
    constructor(props){
        super(props);
        this.name = "Guyss"
    }


    render()
    {
        return(
            <>
            <p>--------------------------------------------------------------------------------------------------------------------------</p>
            <h3>Welcome to React!! {this.name}</h3>
            </>
        )
    }
}

export default WelcomeMessage;