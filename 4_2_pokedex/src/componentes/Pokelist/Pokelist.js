import React from "react";
import PokeItem from "../Pokeitems/Pokeitems";

function PokeList({ todos }){
    return(
        <ul>
            {
            !todos ? 'Cargando..' : todos.map( (todo,index) => {
                    return(
                        <PokeItem key={`id-${index}`} todo={todo} index={index}/>
                        );
                    })
            }
        </ul>
    );
}

export default PokeList; 