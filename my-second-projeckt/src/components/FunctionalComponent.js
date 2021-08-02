import React from 'react';
function FunctionalComponent(props){
    return(
        <div>
            <h1>
                Functional Component
            </h1>
            <p>Mein Name is {props.name}</p>

        </div>
    )
}

export default FunctionalComponent;