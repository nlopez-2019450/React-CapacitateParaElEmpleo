import React from 'react'
import { useState } from 'react'
import 'bootstrap'
const Browser = (e) =>{

    const handleSubmit = (e) =>{
        
        e.preventDefault();

        
        const form = e.target;
        const formData = new FormData (form);
    }


    return(
        <div>
        
        <input class="form-control" type="text" placeholder="Default input" aria-label="default input example"></input>


        </div>
    )
}



export {Browser}