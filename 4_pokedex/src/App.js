import React from 'react';
import Navbar from './Componentes/Navbar';
import Searchbar from './Componentes/Searchbar';
import Pokedex from './Componentes/Pokedex';
import './styleComponente/style.css'
import { getPokemons } from './api';
const { useState,useEffect} = React; 


function App() {
  const [pokemons,setPokemons]=useState([]);
  
  const fetchPokemons= async()=>{
    try{
      const data = await getPokemons();
      console.log(data);
    }catch(err){ }
  }

  useEffect(()=>{
    fetchPokemons();
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <Searchbar/>
      <Pokedex />
    </div>
  );
}

export default App;
