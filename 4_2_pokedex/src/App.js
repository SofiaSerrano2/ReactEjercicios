import React from 'react';
import Boton from './componentes/Boton/Boton';
import PokeList from './componentes/Pokelist/Pokelist';

import {useEffect,useState} from "react";

function App() {
  const url=`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
  const [allPokemons,setAllpokemons]=useState(); //
  //a palabra “async” ante una función significa solamente una cosa: que la función siempre devolverá una promesa. Otros valores serán envueltos y resueltos en una promesa automáticamente.
  const getAllPokemon = async ()=>{ 
  // leer nuestro JSON
    const res = await fetch(url);
    const data = await res.json();
    //setAllpokemons(resJSON.results);
  //Setea el resjson con los nuevos valores
  

    function createPokemonObject(result){
      result.forEach(async(pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
        const data = await res.json();
        setAllpokemons(currentList =>[...currentList,data])
      }
      )}
      createPokemonObject(data.results)
      await console.log(allPokemons)
  }

  useEffect (()=>{
    getAllPokemon();
  },[])

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Boton idName='Fuego' texto='Pokemon de Fuego'/>
      <Boton idName='Aire'texto='Pokemon de Aire'/>
      <Boton idName='Tierra' texto='Pokemon de Tierra'/>
      {<PokeList todos={allPokemons} />}
    </div>
  );
}

export default App;
