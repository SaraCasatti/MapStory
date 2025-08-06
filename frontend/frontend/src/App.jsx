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
  const [id_usuario, setId_usuario] = useState(-1)
  const [lc, setLc] = useState(-1)//-1 - nenhum form 1-login 2- cadastro 3- deu certo (vai para a pag do usuario)

  const [u, setU] = useState(false)
  const [usr, setUsr] = useState("")



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
            lc={setLc}
          />
        </div>
      )}
    </div>

  </>
  );

}

export default App
