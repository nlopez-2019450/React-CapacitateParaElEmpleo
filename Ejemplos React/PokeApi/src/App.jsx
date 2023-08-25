import { useEffect, useState } from 'react'
import axios from 'axios'
import api from './api/api'
import './App.css'
import { Browser } from './Buscador'



function App() {

  const [poke, setPoke] = useState(" ");

  function handleClick(){
    setPoke()
  }


  return(   
      
    <div className='App'>

      <h1>POKEMON</h1><br /><br /><br />

      <Browser /> <br />
      <button type="button" className="btn btn-dark">Dark</button>

    </div>
  )
  
}

export default App
