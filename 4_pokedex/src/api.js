//Voy a usar fetch que es una api para acceder a elementos de internet 
// y esto es solo javascript


export const searchPokemon = async (pokemon) =>{
    try{ 
        let url = `https://pokeapi.co/api/v2/${pokemon}`;
        const response = await fetch(url); 
        const data= await response.json()
        return data;
    }
    catch(error){}
}

export const getPokemons = async (limit=10,offset=0) => {
    try{ // por defaul limit es 10 y offset es 0
        // el limit me dice la cantidad de pokemones que quiero obtener según el api 
        // y el offset a partir de que nombre quiero que me busque 
        let url = `https://pokeapi.co/api/v2/pokemon/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url); 
        // Lo que hace el await es esperar a que responda
        const data= await response.json()
        return data;
    }
    catch(error){

    }
}