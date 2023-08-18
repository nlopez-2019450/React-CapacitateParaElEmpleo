import React, {useState} from "react";

function Contador(){

    const [valor, setContador] = useState(0)
    function manejadorClickBoton(){
        setContador (valor + 1);
    }

    return(
        <div>
            <h1>Contador incrementa {valor} veces</h1>
            <button onClick={manejadorClickBoton}>incremento</button>
        </div>
    )

}


export default Contador;