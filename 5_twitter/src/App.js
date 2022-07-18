import './App.css';
//componentes
import Header from './componentes/Header'
import Etiqueta from './componentes/Etiqueta'
import Buscador from './componentes/Buscador';
//img
import twitter from './img/twitter.png';
import lupa from './img/vidrio-de-aumento.png'

function App() {
  //objeto con etiqueta
  const etiquetaList=[{"name":"Mayonesa"},{"name":"BootstrapVSTaildwind"},{"name":"JulioVinoConElPuma"},{"name":"CosasDeFrontends"},{"name":"Sabalero"}]
  return (
    <div className="App">
      <Header rutaImg={twitter} clase='w-20 h-20'/>
      <Buscador  rutaImg={lupa} texto="Busca en Twitter"/>
      <Etiqueta etiquetaList={etiquetaList}></Etiqueta>
    </div>
  );
}

export default App;
