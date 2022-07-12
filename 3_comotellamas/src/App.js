import './App.css';
import { useState } from 'react';
import Input from './Componentes/Input';

                // ver como hago para guardar el estado anterior 
const estado =[]; // mi idea es ir guardando en esta variable global los estados que se van creando 

function App() {
  const [texto,setTexto]=useState('Nombre usuario');

  const [state, setState] = useState({
    nombre: '',
    apellidos: [
       '',   // Materno
       ''    // Paterno
    ]
  });
  
  function guardarEstado(event){
   // me devuelve el nombre 
    
  }
  function handleChange (event) {
    console.log()
    }
 
  
  return (
    <div className="App">
      
      <Input nombreInp="nombre" input={state.nombre} />
      <Input nombreInp="apellido materno" input={state.apellidos[0]} />
      <Input nombreInp="apellido paterno" input={state.apellidos[1]} />

      <button onClick={handleChange}>
        boton
      </button> 
      <h1>Su nombre es:</h1>
      <h3>{texto}</h3>
    </div>
  );
}

export default App;
