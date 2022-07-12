import React from "react";
//import { DatosPokemon } from "./PokeData";
import {useState,useEffect} from "react";
import axios from "axios";

import './pokeitems.css'
//<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${index+1}.png`} alt=''/>
//aqui se guardan los pokemons sobre los que se van iterando la lista 
function PokeItem({todo,index}){
    //hacer que me lea otro json y que me traiga el tipo de pokemon en la parte de los datos 
    //https://pokeapi.co/api/v2/pokemon-species/13/ el ultimo numero me trae el dato 
    //a palabra “async” ante una función significa solamente una cosa: que la función siempre devolverá una promesa. Otros valores serán envueltos y resueltos en una promesa automáticamente.
    const [pokemon,setPokemon] = useState('');
    
    
    return(
        <li className="lista">
            <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${index+1}.png`} alt=''/>
                <div className="name">{todo.name} </div> 
                <div className="name">{todo.url} </div> 
                
            </div>
        </li>
    );
}
export default PokeItem;







//Primer intento

/*
        // De aca 
        const [pokemon,setPokemon]=useState();
        const DatosPokemon = async (pokemon) =>{
            try{ 
              let url = `https://pokeapi.co/api/v2/${pokemon}`;
              const response = await fetch(url); 
              const data= await response.json()
              console.log(pokemon.weight);
              return data;
          }
          catch(error){}
          
          }
    const getPokemon= async () => {
            const data = await DatosPokemon(index);
            console.log(data);
            setPokemon(data)
        }
*/