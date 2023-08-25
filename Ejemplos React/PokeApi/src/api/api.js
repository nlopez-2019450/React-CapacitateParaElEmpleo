import axios from "axios"


const api = async() =>{
    try{
        const URL = 'https://pokeapi.co/api/v2/pokemon/'

        const response = await axios.get(URL);
        console.log(response)

    }catch(e){
        console.log(e)
    }
}

export default api

