import React from 'react';
function Input({nombreLabel,typename,name,funcion}){
    return(
    <div>
        <label>{nombreLabel}</label>
        <input type={typename}  name={name} onChange={funcion}/>
    </div>
    );
}

//el evento onChange ocurre cuando la entrada de los usuarios 
//cambia de alguna manera. Una entrada puede cambiar cuando 
//el usuario ingresa texto adicional, selecciona una opción diferente, desmarca la casilla de verificación u otras instancias similares.

export default Input;
