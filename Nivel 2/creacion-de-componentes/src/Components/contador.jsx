import React, {Component} from "react";

class Contador extends Component{
    state={
        count: 0
    }

render(){
    return (
        <div>
            <span>{this.state.contar}</span>
            <button> Increment </button>
        </div>
    )
}

}

// Segunda forma de hacerlo, (En esta parte el import se puede borrar el {Component})

/*
function Contador2(){
    return(
        <h1>Hola mundo!! Esta es la segunda forma</h1>
    )
}
*/



export default Contador