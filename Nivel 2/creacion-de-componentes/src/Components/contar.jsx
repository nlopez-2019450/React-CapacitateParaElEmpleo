import React, {Component, useState} from "react";


const contar =   ({value=''}) => {
    console.log(value)   

    let inicial = Number(value);
    const [final, setfinal] = useState(inicial)

    const manejarIncremento = () =>{
        setfinal(final + 1)        
    }
    console.log(final)

    const formatoContar = ({}) =>{
        return {final} === 0 ? "Cero": {final}
    }

    return (<>

        <div> 
            <h1>CONTADOR</h1><br /><br />
        </div>
        <div>
            <h3>Hiciste click {final} veces </h3> 
            <button onClick={manejarIncremento}>
                Incremento
            </button>
        </div>
    </>)
}

 export default contar