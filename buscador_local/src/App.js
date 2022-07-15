import lupa from './vidrio-de-aumento.png';
import logo from './people-logo.png';
import './App.css'

function App() {
    
  return (
    <div className="App">
        <main>
            {/**empieza posible componentes */}
            <div className='buscador_logo'>
                <img src={logo} alt='logo_personas_buscando'/>
                <h2 className='buscador_nombre'>Buscador de personas</h2>
            </div>

            <div className='buscador_container'>
                <input type="text" className='buscador_container'/>
                <div className='buscador_button'>
                    <img src={lupa} alt='lupa'/>
                </div>
            </div>            
            {/**termine componentes */}
        </main>
    </div>
  );
}

export default App;
