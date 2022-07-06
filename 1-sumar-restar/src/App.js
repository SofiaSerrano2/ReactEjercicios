import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';
//uso de hooks
function App() {
  const [num,setNum]=useState(0);// el 0 es el valor inicial

  const sumaClic=()=>{
    setNum(num+1);
  };
  const restaClic=()=>{
    setNum(num-1);
  };
  
  return (
    <div className="App">
     <div className='contenedor_principal'>
      <Contador numClics={num} />

      <Boton texto='resta'
            manejarClic={restaClic} />      

      <Boton texto='suma'
            manejarClic={sumaClic} />
     </div>
    </div>
  );
}

export default App;
