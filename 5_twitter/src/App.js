import './App.css';
//componentes
import Header from './componentes/Header'
import Etiqueta from './componentes/Etiqueta'
import Buscador from './componentes/Buscador';
//img
import twitter from './img/twitter.png';

function App() {
  //objeto con etiqueta
  const etiquetaList=[{"name":"Mayonesa"},{"name":"BootstrapVSTaildwind"},{"name":"JulioVinoConElPuma"},{"name":"CosasDeFrontends"},{"name":"Sabalero"}]
  return (
    <div className="App">
      <Header rutaImg={twitter} clase='logoTwitter'/>

      <Etiqueta etiquetaList={etiquetaList}></Etiqueta>
    </div>
  );
}

export default App;
