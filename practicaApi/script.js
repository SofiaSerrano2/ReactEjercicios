
id=3;
const fetchData = async (id) => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await res.json();
            console.log(data)
            console.log(data.name)

        } 
        catch (error) {
            console.log(error)
        }
   
}

fetchData();