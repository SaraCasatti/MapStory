
function User(props) {

    let usuario = props.usuario
    let setUsuario = props.setUsuario
    let id = props.id
    let setId = props.setId
    let lc = props.lc
    let setLc = props.setLc

    return (<>
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">Usuario</p>
                <button className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </header>
            <div className="card-content">
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                    iaculis mauris.
                </div>
            </div>
        </div>
    </>)

}

export default User