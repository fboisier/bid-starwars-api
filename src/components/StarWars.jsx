import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const StarWars = () => {
  const [planetas, setPlanetas] = useState([]);
  const buscarDatos = () =>{
    
    // fetch("https://swapi.dev/api/planets/")
    // .then(response => {
    //     return response.json();
    // }).then(response => {
    //     console.log(response.results);
    //     setPlanetas(response.results.map((planeta)=> ({nombre: planeta.name, poblacion: planeta.population})));
    // }).catch(err => {
    //     console.log(err);
    // });

    axios.get('https://swapi.dev/api/planets/').then(response=>{
      setPlanetas(response.data.results.map((planeta)=> ({nombre: planeta.name, poblacion: planeta.population})));
    })
  }


  useEffect(() => {
    buscarDatos();
  }, [])
  


  return (
    <>
        <button onClick={buscarDatos}>Obtener Planetas!</button>
        <ul>
          {
            planetas.map((planeta, indice)=> <li key={indice}>{planeta.nombre} - {planeta.poblacion}</li> )
          }
        </ul>
    </>
  )
}