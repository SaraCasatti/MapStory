import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import MarkerPopupMap from './ MarkerPopupMap';
import './App.css';
import NavBar from './Navbar';
import User from './User';

function App() {
  //controla tudo

  //esses hooks são para o login
  const [usuario, setUsuario] = useState("")
  const [id_usuario, setId_usuario] = useState("")
  //vai para a pagina do usuario
  const [u, setU] = useState(false)
  //fala se esta logado ou nao
  const [logado, setLogado] = useState(false)
  

  return (<>
    <NavBar setU={setU} />
    <div style={{ position: 'relative' }}>

      <div className={u ? 'map-wrapper blurred' : 'map-wrapper'}>
        <MarkerPopupMap />
      </div>

      {u && (
        <div className="overlay-user">
          <User
            usuario={usuario}
            setUsuario={setUsuario}
            id={id_usuario}
            setId={setId_usuario}
            logado = {logado}
            setLogado = {setLogado}
          />
        </div>
      )}
    </div>

  </>
  );

}

export default App
