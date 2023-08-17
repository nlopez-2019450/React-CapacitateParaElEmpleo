const crearMayus = function(registro){
    return function (mensaje){
        registro(mensaje.toUpperCase()+"!!!!!")
    }
}

const crearMayus2 = registro => mensajes =>{       // Este funciona igual que el de arriba 
    registro(mensaje.toUpperCase()+"!!!!!")       // La diferencia es que esta es una funcion en flecha
}

const enfasis = crearMayus(mensaje => console.log(mensaje));

enfasis("Las funciones pueden ser retornadas por otras funciones")
enfasis("crearMayus retorna una funcion")
enfasis("Enfasis retorna la funcion retornada")