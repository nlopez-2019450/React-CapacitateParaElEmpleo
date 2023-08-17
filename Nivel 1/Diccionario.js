/*

A. Almacena en un diccionario tu nombre.
B. Cree una funcion que imprima tu nombre.
C. Cree una funcion que cambie tu nombre por otro de tu eleccion 

*/
const persona ={
    nombre: "Nelson",
    decirNombre: function(){
        console.log(this.nombre)
    },
    cambiarNombre: function(){
        this.nombre = "Daniel"
    }
   }

persona.decirNombre();
persona.cambiarNombre();
persona.decirNombre();

// ---------------------------------PARTE 2--------------------------------------------

const dentrofn = (ingreso) => {
    ingreso("Envio de funciones")
};
dentrofn(mensaje => console.log(mensaje));

const crearMayus = function (registro){
    return function(mensaje){
        registro(mensaje.toUpperCase()+"!!!!!")
    }
}

const enfasis = crearMayus(mensaje => console.log(mensaje));
enfasis("Uso de funciones")


