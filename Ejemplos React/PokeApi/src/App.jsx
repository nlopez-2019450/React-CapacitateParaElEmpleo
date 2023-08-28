import React, { useState } from "react";
import 'bootstrap'
import api from "./api/api";

export default function App() {
  const itemList = [
    "Akamaru",
    "Naruto",
    "UnEjemlo",
    "Cosa",
    "Pachon",
    "Comida",
    "Lata",
    "Estremecer"
  ];

  const [filteredList, setFilteredList] = useState(itemList);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...itemList];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };


  return (
    <div className="App">
      <div className="search-header">
        <div className="search-text">Search:</div>
        <input id="search-box" onChange={filterBySearch} />
      </div>
      <div id="item-list">
        <ol>
          {filteredList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}