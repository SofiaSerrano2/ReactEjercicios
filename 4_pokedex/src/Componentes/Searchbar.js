import React from 'react';
import { searchPokemon } from '../api';
const { useState } = React;

const Searchbar = () => {

    const[search,setSearch]=useState("");
    const [pokemon,setPokemon]=useState();

    const onChange = (event) =>{
        setSearch(event.target.value);
    }
    const onClick= async (event) => {
        const data = await searchPokemon(search);
        console.log(data);
        setPokemon(data)
    }
    return (  
        <div>
            <div>
                <input 
                placeholder="Buscar pokemon..."
                onChange={onChange}
                />
            </div>
           
            <div><button onClick={onClick}>Buscar</button></div>
            
        </div>
    );
}
 
export default Searchbar;