import React, { useEffect, useState } from 'react'
import PokemonThumb from './components/PokemonThum/PokemonThum'

const App = () => {
   const[allPokemons, setAllPokemons] = useState([]);
   const[url,SetUrl]=useState(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`);


  const getAllPokemons = async () => {
    //cada vez que llama a la funcion los que hace es borrar
    setAllPokemons([]);
    const res = await fetch(url)
    const data = await res.json()
    SetUrl(data.next);
    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }
  
  
 useEffect(() => {
  getAllPokemons()
 }, [])

  return (
    <div className="app-contaner">
      
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map( (pokemonStats, index) => 
            <PokemonThumb
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />)}
          
        </div>
      </div>
      <button onClick={()=>getAllPokemons()}>Atras</button>
      <button onClick={()=>getAllPokemons()}>Siguientes</button>
    </div>
  );
}

export default App;
