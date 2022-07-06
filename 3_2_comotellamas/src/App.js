import Input from './componentes/Input'
import { useState } from 'react';


function App() {
  const [state, setState] = useState({
    nombre: '',
    apellidos: [
       '',   // Materno
       ''    // Paterno
    ]
    /*
    apellidoPaterno:'',
    apellidoMaterno:'*/
 });

const handleChange =(event)=>{
  /*setState(current => ({
    ...current,
    nombre: event.target.value
  }));*/
  console.log(event.target.value)
  setState({
    ...state, // lo que hago con los 3 puntitos es crear un nuevo objeto, porque si no iría eliminando lo que es nombre y apellido
    [event.target.name]:event.target.value
  })
}
 // event es un objeto  predefinido de javascript que almacena información sobre un evento
 //  es pasado, para cada evento que tiene lugar, como argumento a la función o funciones que gestionan el evento.

 return (
    <div className="App">
      <h2>Ingrese sus datos</h2>
      <form>
        <Input
          nombreLabel='nombre'
          typename='text'
          name='nombre'
          funcion= {handleChange}
        />
        <Input
          nombreLabel='apellido Paterno'
          typename='text'
          name='apellidoPaterno'
          funcion= {(e) => setState({...state,apellidos:[state.apellidos[0], e.target.value]})} placeholder='Apellido Paterno'
        />
        <Input
          nombreLabel='apellido Materno'
          typename='text'
          name='apellidoMaterno'
          funcion= {(e) => setState({...state,apellidos:[ e.target.value, state.apellidos[1]]})} placeholder='Apellido Materno' 
        />

      </form>
      <h3>{state.nombre}-{state.apellidos[0]}-{state.apellidos[1]}</h3>
    </div>
    
  );
}

export default App;
