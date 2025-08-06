import { useState } from 'react';
import logo1 from './assets/logo1.jpg';
import user1 from './assets/user1.webp';

function NavBar(props) {
  const [isActive, setIsActive] = useState(false);

  function toggleBurger() {
    setIsActive(!isActive);
  }

  function usuarios() {
    props.setU(true)
  }

  function home() {
    props.setU(false)
  }

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src={logo1} />
        </a>

        <a
          role="button"
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          onClick={toggleBurger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a className="navbar-item" onClick={home}>
            Home
          </a>

          <div className="navbar-item">
            <div className="field has-addons">


              <div className="control">
                <input
                  className="input is-light"
                  type="text"
                  placeholder="buscar local ..."
                  onChange={(e) => props.setTermoBusca(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      props.realizarBusca();
                    }
                  }}
                  style={{ height: '32px', lineHeight: '32px', fontSize: '0.875rem' }}
                />
              </div>

              <div className="control">
                <button
                  className="button is-info"
                  onClick={props.realizarBusca}
                  style={{ height: '32px', lineHeight: '32px', fontSize: '0.875rem' }}
                >Buscar</button>

              </div>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <a className="navbar-item" href="#" onClick={usuarios}>
              <img src={user1} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
