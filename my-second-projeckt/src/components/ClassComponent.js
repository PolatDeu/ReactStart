import React from "react";

class ClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={surname:'Yilmaz'}
    }
    render(){
        return(
            <div className="wrapper">
                <h1>
                Clarusway
                </h1>
                <p>Class Component</p>
                <p>Mein Name is {this.props.name} {this.state.surname}</p>
                
            </div>
        )
    }
}
export default ClassComponent;