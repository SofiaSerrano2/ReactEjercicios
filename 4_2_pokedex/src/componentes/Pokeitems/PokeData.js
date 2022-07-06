// funcion para sacar datos del porkemons que se esta leyendo 

/*function pokemondata(todo){
    const url= todo.url;
    //a palabra “async” ante una función significa solamente una cosa: que la función siempre devolverá una promesa. Otros valores serán envueltos y resueltos en una promesa automáticamente.
    const fetchApi = async ()=>{
      
    // leer nuestro JSON
      const response = await fetch(url);
      console.log(response.status);
      const responseJSON = await response.json();
      setTodos(responseJSON.results);
    }
}*/ 

export const DatosPokemon = async (pokemon) =>{
  try{ 
    let url = `https://pokeapi.co/api/v2/${pokemon}`;
    const response = await fetch(url); 
    const data= await response.json()
    console.log(pokemon);
    return data;
}
catch(error){}

}