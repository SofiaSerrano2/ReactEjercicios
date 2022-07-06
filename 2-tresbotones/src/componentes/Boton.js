import React from 'react';
function Boton({texto,manejarClic,idName}){ //sintaxis de desustructuración en el que llama a la sintaxis por sus propiedades
  return(
    <button id={idName}
      onClick={manejarClic}// funcion para manejar el evento
      //Esta funcion viene de el componente que renderice o creee al boton, 
      // porque cuando nosotros hagamos click en ese boton vamos a tener que actualizar el estado de otro componente que es el contador 
    >
      {texto}
    </button> // el boton tiene un texto especifico mediante props
  );
}
export default Boton;