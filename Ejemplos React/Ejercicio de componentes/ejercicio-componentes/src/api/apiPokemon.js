import axios from "axios"


// const URL = 'https://pokeapi.co/api/v2/'

export const listPokemones = async() =>{
    try{
        const {data: {name}} = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
        console.log(name)
        return name
        
    }catch(e){
        return e;
    }
    
}