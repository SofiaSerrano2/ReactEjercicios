import './App.css';
import Boton from './componentes/Boton';
import Texto from './componentes/Texto';
import { useState } from 'react';


function App() {
  //useState es un Hook que te permite añadir el estado de React a un componente de función
  const [texto,setTexto]=useState('0 - cero');// el 0 es el valor inicial
 // event es un objeto  predefinido de javascript que almacena información sobre un evento
 //  es pasado, para cada evento que tiene lugar, como argumento a la función o funciones que gestionan el evento.
  //target  Devuelve el elemento del DOM que disparó el evento (inicialmente)


  const cambioTexto=(event)=>{
    let btn = event.target.id;
    //console.log(`Hizo click en ${btn}`);
    if(btn==="1- uno"){
      setTexto("1- uno");
    }
    else if(btn==="2- dos"){
        setTexto("2- dos");
    }
    else if(btn==="3- tres"){
      setTexto("3- tres");
  }
  };
  
  return (
    <div className="App">
     <div className='contenedor_principal'>

      <Texto botonNombre={texto} />

      <Boton texto='1'
            idName='1- uno'
            manejarClic={cambioTexto} />      

      <Boton texto='2'
            idName='2- dos'
            manejarClic={cambioTexto} />      

      <Boton texto='3'
            idName='3- tres'
            manejarClic={cambioTexto} />
     </div>
    </div>
  );
}

export default App;
