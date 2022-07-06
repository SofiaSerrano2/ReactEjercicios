import React from "react";
import Button from './Button'

const Navbar = () =>{
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return(
        <nav>
            <img src={imgUrl} alt="PokeApiLogo" className="navBar-image"/>
        </nav>

    );

};

export default Navbar;