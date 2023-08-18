//Las propiedades "props" al igual que "state" sirven para modificar parametros o atributos de los componentes
//Pero los Props no se pueden modificar directamente, solo se le pueden definir caracteristicas de sus componentes con el metodo state




/*------------------------------- Pasar Datos a los Componentes---------------------------- */
/* --------------------------------------------PDC----------------------------------------- */




import React, {Component} from "react"


class Contador2 extends Component{
    
    state={
        value: this.prop.value
    };


    manejarIncremento = () =>{
        this.setState({value: this.state.value})
    }

    formatoContar(){
        const {value} = this.state;
        return value === 0 ? "Cero": value
    }

//    cambiarClase(){
//        let classes = "badge m-2 badge-"
//        classes += this.state.value === 0 ? "light" : "primary"
//        return classes;
//    }
    


    render(){
        return(
            <div>
                <span>{this.formatoContar()}</span>
                <button onClick={this.manejarIncremento}>Incremento</button>
            </div>
        )
    }
}

export default Contador2;


