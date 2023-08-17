var log = function(mensaje){
    console.log(mensaje)
}

var log2 = (mensaje) =>{
    console.log(mensaje)
}

const mensajes = [
    "Pueden ser insertados en arreglos",
    log,
    log("Hola Mundo "),
    log2
]

const dentrofn = (ingreso) =>{
    ingreso("Pueden ser enviadas como argumentos en otras funciones")
}


//log("Hola mundo 1");
//log2("Hola mundo 2");
//mensajes[1](mensajes[0]);
//mensajes[3](mensajes[2]);
dentrofn(mensaje => console.log(mensaje))

