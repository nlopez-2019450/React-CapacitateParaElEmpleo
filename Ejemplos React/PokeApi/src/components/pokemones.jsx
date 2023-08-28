import React, { useState } from "react";
import 'bootstrap'
import api from "../api/api";

const [filteredList, setFilteredList] = new useState(api.response)

const filterBySearch = (event) =>{
    //Acces input value 
    const query = event.target.value
    //Create copy of item list
    var updateList = [...api.response];
    // Include all elements wich includes the search query
    updateList = updateList.filter((item)=>{
        return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updateList)
}

return(
    <div id='item-list'>
        <ol>
            {filteredList.map((item, index)=>(
                <li key={index}></li>
            ))}
        </ol>
    </div>
)