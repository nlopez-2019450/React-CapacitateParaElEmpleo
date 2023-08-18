

/*--------------------------------*Cambios de Estado---------------------------------*/

/*----------------------------------------CE-----------------------------------------*/



import React, {Component} from "react"

class Contador extends Component{
    state={
        contar: 0
    };

    manejarIncremento = () =>{
        this.setState({contar:this.state.contar +1})
    }

    formatoContar(){
        const {contar} = this.state;
        return contar === 0 ? "Cero": contar
    }

    render(){
        return(
            <div>
                <span>{this.formatoContar()}</span>
                <button onClick={this.manejarIncremento}>Incremento</button>
            </div>
        )
    }
}

export {Contador}











/*

import React, {Component} from "react"
import PropsType from "prop-types"


Contador = React.forwardRef(({value}) =>{
    state={

        value:this.prop.value
    };

        
 

    manejarIncremento = () =>{
        this.setState({value:this.state.value +1})
        console.log(this.prop.value)
    }
 
    const formatoContar(){
        const {value} = this.state;
        return value === 0 ? "Cero": value
    }

    render(){
        return(
            <div>
                <span>{this.formatoContar()}</span>
                <button onClick={this.manejarIncremento}>Incremento</button>
            </div>
        )
    }
})
Contador.PropsType = {
    value: PropsType.number
}

export {Contador}
*/