import React from 'react';
import Boton from './componentes/Boton/Boton';
import PokeList from './componentes/Pokelist/Pokelist';

import {useEffect,useState} from "react";
const limit=20;
const offset=0;
function App() {
  // De aca 
  const url=`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  const [todos,setTodos]=useState(); //
  
  //a palabra “async” ante una función significa solamente una cosa: que la función siempre devolverá una promesa. Otros valores serán envueltos y resueltos en una promesa automáticamente.
  const fetchApi = async ()=>{
    
  // leer nuestro JSON
    const response = await fetch(url);
    //console.log(response.status);
    const responseJSON = await response.json();
    setTodos(responseJSON.results);
  //Setea el responsejson con los nuevos valores
  }
  // hasta aca lo vimos con gabi para consumir una api

  useEffect (()=>{
    fetchApi();
  },[])

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Boton idName='Fuego' texto='Pokemon de Fuego'/>
      <Boton idName='Aire'texto='Pokemon de Aire'/>
      <Boton idName='Tierra' texto='Pokemon de Tierra'/>
      <PokeList todos={todos} />
    </div>
  );
}

export default App;
