import axios from "axios"


const api = async() =>{
    try{
        const URL = 'https://pokeapi.co/api/v2/pokemon/'

        const response = await axios.get(URL);
        // let longitur = response.data.results.length;
        
        for(var i=0; i < 20; i++){
            return response.data.results[i].name;
        }
    }catch(e){
        console.log(e)
    }
}

export default api

